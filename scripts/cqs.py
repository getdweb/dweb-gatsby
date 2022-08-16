'''
cqs.py (stands for component-query-scraper)
'''

import argparse
import sys, os
import re
import requests
import json
import pandas as pd
from ruamel import yaml
from os.path import expanduser
home = expanduser("~")

TYPE_SELECT = "json" # change be json or yaml, depending on desired output filetype
DEFAULT_FILEPATH = home + '/internetarchive/dweb-gatsby old/'
DEFAULT_WD = os.getcwd()
VERBOSE = True
default_output_folder = 'cqs_output'

parser = argparse.ArgumentParser(description='Scrape the dweb-gatsby site \
                    components for their GraphQL queries')
parser.add_argument('-s', '--source', metavar='<path>', dest='path',
                    action='store', default=DEFAULT_FILEPATH,
                    help='the filepath of the dweb-gatsby folder ')
parser.add_argument('-l', '--local', dest='local', action='store_true',
                    help='determines if program sources queries locally or runs out to project folder')
parser.add_argument('-f', '--foldername', metavar='<name>', dest='folder',
                    action='store', default=default_output_folder,
                    help='the name of the folder your files export into; lives in project directory')

args = parser.parse_args()
path = args.path
OUTPUT_FOLDER = args.folder
USE_LOCAL_QUERY = args.local

# removes trailing slash from input if present
if path[-1] == "/":
    path = path[:-1]

# change directory to be in component folder
if not USE_LOCAL_QUERY: os.chdir(path+'/src/components')

# regex for graphql query
regex = re.compile(r'graphql`\s*(query[A-Za-z_}{\s\(\)":,]*})\s*`')

OUTPUT_FILEPATH = "{}/{}".format(DEFAULT_WD, OUTPUT_FOLDER)

# attempt to create OUTPUT_FOLDER
try:
    os.mkdir(OUTPUT_FILEPATH)
except FileExistsError:
    if VERBOSE:
        print("./{} already exists".format(OUTPUT_FOLDER))

# attempts to remove files in OUTPUT_FOLDER
try:
    for f in os.listdir(OUTPUT_FILEPATH):
        os.remove(os.path.join(OUTPUT_FILEPATH, f))
except:
    if VERBOSE:
        print("error removing files in " + OUTPUT_FILEPATH)

def save_data(filename, query):
    url = 'http://localhost:8000/___graphql/'
    r = requests.post(url, json={'query': query})
    if r.status_code == 200:
        json_data = json.loads(r.text)
        # del json_data["extensions"]
        if VERBOSE: print(json_data)
        outfile = open(DEFAULT_WD+"/{}/{}.{}".format(OUTPUT_FOLDER,filename[:-3],TYPE_SELECT), "w")
        match TYPE_SELECT:
                case "json":
                    outfile.write(json.dumps(json_data, indent=2))
                case "yaml":
                    # width = 100000 to prevent line wrap
                    outfile.write(yaml.dump(json_data, indent=2, Dumper=yaml.RoundTripDumper, width=100000))
        outfile.close()

# Warning: QueryArchive.yaml does not contain latest queries,
#          usage not recommended
if USE_LOCAL_QUERY:
    print("in local query")
    q = open(DEFAULT_WD+"/QueryArchive.yaml", 'r')
    queries = yaml.load(q, Loader=yaml.Loader)
    for filename in queries:
        save_data(filename, queries[filename])
else:
    for file in os.listdir():
        with open(file, 'r') as f:
            text = f.read()
            out = re.search(regex, text)
            if out != None:
                save_data(file, out.group(1))
