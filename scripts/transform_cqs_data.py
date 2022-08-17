'''
transform_cqs_data.py
'''

import argparse
from email import header
import sys
import os
import re
import requests
import json
from ruamel import yaml
import shutil
from os.path import expanduser
home = expanduser("~")

# (static) indicates that a components graphql query data has been manually
# entered into a component and any updates made to that data will not carry
# over. Some components are only (party static), which means that some data
# carries over and some data does not. Components without either are safe
# and any changes made to them through Wordpress are fully brought over.

# TODO:
# Events.yaml
# Voices.yaml

# DONE:
# QuotesSlider.yaml (used data from Hero)
# MenuSocial.yaml (used data from Footer)
# GetInvolvedQuote.yaml (static)
# GetInvolvedHero.yaml (static)
# AboutUs.yaml (static)
# HeaderLogo.yaml (static)
# HeaderButton.yaml (static)
# Principles.yaml (partly static)
# Footer.yaml (partly static)
# Faq.yaml (partly static)
# Hero.yaml (partly static)
# Network.yaml (partly static)
# Partners.yaml (partly static)
# MenuPrimary.yaml
# MenuSecondary.yaml
# BuildingBlocks.yaml


OK_FILES = ['Faq', 'Footer', 'Hero', 'Network',
            'MenuPrimary', 'MenuSecondary', 'Principles', 'BuildingBlocks', 'Partners']
FOLDER_INPUT = 'cqs_output'
FOLDER_OUTPUT = 'good_shape_data'
FILE_TYPE = 'yaml'
ORIGINAL_DIR = os.getcwd()
VERBOSE = True
WRITE_TRANSFORMATIONS = True  # files are written out iff this is true
COPY_TO_SRC = False  # Clears files in data folder and copies in new data files
SRC_FOLDER = home + '/internetarchive/dweb-gatsby/src'


def dump_json(name): return yaml.dump(name, indent=2,
                                      Dumper=yaml.RoundTripDumper, width=100000)


def transform(filename):
    with open(filename, 'r') as f:
        text = f.read()
        j = json.loads(text)
        match filename:
            case "Faq.json":
                faq_sections = j['data']['allWordpressWpFaqSection']['nodes']
                for node in faq_sections:
                    del node["id"]
                    node["questions"] = node["acf"]["questions"]
                    del node["acf"]
                return [(filename[:-5], dump_json(faq_sections))]

            case "Hero.json":
                hero_quotes = j['data']['allWordpressAcfOptions']['nodes'][0]["options"]["hero_quotes"]
                new_quotes = []
                for item in hero_quotes:
                    item = item["image"]
                    item["url"] = item["localFile"]["url"]
                    del item["localFile"]
                    new_quotes.append(item)
                return [('HeroQuotes', dump_json(new_quotes))]

            case "Network.json":
                cities = j['data']['allWordpressWpCity']['nodes']
                for city in cities:
                    city['color'] = city['acf']['color']
                    city['link'] = city['acf']['link']
                    city['city_image_url'] = city['acf']['city_image']['localFile']['url']
                    del city['acf']
                    del city['wordpress_id']
                return [(filename[:-5], dump_json(cities))]

            case "Footer.json":
                footer_blocks = j['data']['allWordpressAcfOptions']['edges'][0]['node']['options']['footer_menu_blocks']
                for block in footer_blocks:
                    for item in block['links']:
                        if item['link_file'] != None:
                            temp = item['link_file']
                            item['link_file'] = temp['localFile']['url']
                            del temp['localFile']['url']
                            del temp['localFile']

                social = j['data']['allWordpressAcfOptions']['edges'][0]['node']['options']['footer_social_links']
                return [(filename[:-5], dump_json(footer_blocks)), ('SocialMedia', dump_json(social))]

            case "MenuPrimary.json":
                menuPrimary = j['data']['allWordpressMenusMenusItems']['edges'][0]['node']['items']
                parent = [{"label": "primary", "items": menuPrimary}]
                return [("Menu", dump_json(parent))]

            case "MenuSecondary.json":
                menuSecondary = j['data']['allWordpressMenusMenusItems']['edges'][0]['node']['items']
                parent = [{"label": "secondary", "items": menuSecondary}]
                return [("Menu", dump_json(parent))]

            case "Principles.json":
                def insertLoop(i, people):
                    arr = []
                    count = i
                    do_break = False
                    while count < len(people):
                        if people[count] == "":
                            do_break = True
                        elif people[count] != "" and not do_break:
                            arr.append(people[count])
                        else:
                            break
                        count += 1
                    return count, arr

                principles = j['data']['wordpressAcfOptions']['options']['principles']

                people_text = j['data']['wordpressAcfOptions']['options']['principles_bottom_text']
                principlesPeople = [{"label": "STEWARDS"}, {
                    "label": "CONTRIBUTORS"}, {"label": "SUPPORTERS"}]

                regex = re.compile(r'\\n(?:<\/strong>)*([\w\s\\\.\-“”]*)')
                people = re.findall(regex, repr(people_text))

                i = 0
                i, principlesPeople[0]["people"] = insertLoop(
                    i, people)  # STEWARDS
                i, principlesPeople[1]["people"] = insertLoop(
                    i, people)  # CONTRIBUTORS
                i, principlesPeople[2]["people"] = insertLoop(
                    i, people)  # SUPPORTERS

                return [(filename[:-5], dump_json(principles)), ("PrinciplesPeople", dump_json(principlesPeople))]

            case "BuildingBlocks.json":
                blocks = j['data']['allWordpressWpBuildingBlock']['nodes']
                for block in blocks:
                    block["button_label"] = block["acf"]["button_label"]
                    block["button_link"] = block["acf"]["button_link"]
                    block["link_target"] = block["acf"]["link_target"]
                    block["url"] = block["acf"]["image"]["localFile"]["url"]
                    block["text"] = block["acf"]["text"]
                    del block["date"]
                    del block["id"]
                    del block["acf"]
                return [(filename[:-5], dump_json(blocks))]

            case "Partners.json":
                partners = j['data']['wordpressAcfOptions']['options']['partners_sponsors']
                partners_formatted = []
                for partner in partners:
                    partners_formatted.append({"url" : partner['logo']['localFile']['url'], "id" : partner['logo']['id']})
                return [(filename[:-5], dump_json(partners_formatted))]



def main():
    # attempt to create FOLDER_OUTPUT
    try:
        os.mkdir(FOLDER_OUTPUT)
    except FileExistsError:
        if VERBOSE:
            print("{}/{} already exists".format(ORIGINAL_DIR, FOLDER_OUTPUT))

    # attempts to remove files in FOLDER_OUTPUT
    try:
        for f in os.listdir(FOLDER_OUTPUT):
            os.remove(os.path.join(FOLDER_OUTPUT, f))
    except:
        if VERBOSE:
            print("error removing files in " + FOLDER_OUTPUT)

    for file in OK_FILES:
        os.chdir("{}/{}".format(ORIGINAL_DIR, FOLDER_INPUT))
        jsonarr = transform(file+".json")
        os.chdir("{}/{}".format(ORIGINAL_DIR, FOLDER_OUTPUT))
        for jsontuple in jsonarr:
            with open(jsontuple[0]+".yaml", 'a+') as outfile:
                if WRITE_TRANSFORMATIONS:
                    outfile.write(jsontuple[1])
                else:
                    print(jsontuple)

    if VERBOSE:
        print("write complete:", FOLDER_OUTPUT)
    os.chdir(ORIGINAL_DIR)

    if COPY_TO_SRC:
        # Clear files in data folder
        os.chdir(SRC_FOLDER)
        try:
            for f in os.listdir("data"):
                os.remove(os.path.join("data", f))
        except:
            if VERBOSE:
                print("error removing files in data")

        # copies files to data directory in dweb-gatsby
        for f in os.listdir(ORIGINAL_DIR+"/"+FOLDER_OUTPUT):
            shutil.copy2(ORIGINAL_DIR+"/"+FOLDER_OUTPUT +
                         "/"+f, SRC_FOLDER+"/data")


if __name__ == "__main__":
    main()
