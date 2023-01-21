# get-dweb-dot-net

Official repo for [getdweb.net](https://getdweb.net/), a website built for connecting people, projects and protocols to build a decentralized web. The normal gatsby build process has been modified to allow serving the site from content-addressed p2p origins such as IPFS.

The following enhancements have been made to accomodate the web3 environment:
- internal links are relativized using https://github.com/willmhowes/gatsby-plugin-ipfs (upstreaming changes to https://github.com/moxystudio/gatsby-plugin-ipfs is [pending](https://github.com/moxystudio/gatsby-plugin-ipfs/pull/27))
- images referenced by pages and templates are downloaded to the repo and packaged in the build
- hooks are provided for ipfs publish (similar to https://github.com/hyphacoop/distributed.press) (in progress)
- assorted other gatsby quirks are addressed

This repo contains both the gatsby build pipeline and the getdweb.net site content. Factoring out a reusable template project is currently in progress, but you may clone the existing codebase and replace the content directories (pages, img, data, etc) for your own use.

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes.

### Prerequisites

Requirements for the software and other tools to build, test and push

- [node](https://nodejs.org/en/download/)
- [nvm](https://github.com/nvm-sh/nvm)
- [gatsby-cli](https://www.npmjs.com/package/gatsby-cli)

### Installing

1. Install nvm to your machine
1. Clone the get-dweb-dot-com repository to your machine
1. `cd` into the respository folder
1. Run `nvm use`, which utilizes the [.nvmrc](.nvmrc) file
1. Run `npm install`
1. Run `npm install -g gatsby-cli` if you don't already have [gatsby-cli](https://www.npmjs.com/package/gatsby-cli) installed globally
1. Run `npm run develop` to spin up a development server or `npm run build` to build a production-ready version of the site
1. Run `ipfs add --pin -r public` to publish site on local IPFS node

### Style test

There is an ESLint configuation which extends the [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [prettier](https://github.com/prettier/eslint-config-prettier/) configurations. Please adhere to these standards to preserve maintainability of the codebase.

### About relative linking

By default, the repository builds the website with relative linking. If you wanted to build this repo without relative linking, you would need to comment out `pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',` and `'gatsby-plugin-ipfs',` found in [gatsby-config.js](gatsby-config.js). Additionally, you would have to disable the post-build process in [gatsby-node.js](gatsby-node.js) that replaces all image urls with the correct relative paths.

## Information about Modular Page Construction

There are a number of pages which are constructed from data that lives in the directory [/static/page-data/](/static/page-data/). The data for each page lives in it's own YAML file, but there are a few things to note:

1. YAML is composed of key and value pairs. [Here](https://quickref.me/yaml) is a cheat sheet for more information, but you can gather most of what you need to know to edit these pages by mimicking the formatting of the data that is already present in the YAML files.
1. There are seven unique modular components any given page might use. The structure of a page is dictated by an array of components given in the page's YAML file. For example, the Contact page is defined by the [Contact.yaml](static/page-data/Contact) file which invokes [PageBlockOpening](src/components/PageBlockOpening.js) followed by [PageBlockFeature](src/components/PageBlockFeature.js). Beneath each component key is the relevant information each component needs to function properly. [Below](#modular-components-and-their-properties) is a complete list of modules and their properties:
    - In order to avoid the ambiguity of duplicate keys in YAML, component data is stored in an array. For example, this is necessary in [dweb-camp-2022.yaml](static/page-data/dweb-camp-2022.yaml) where there are multiple instances of `PageBlockFeature`. The consequence of this is that within the page file–[dweb-camp-2022.js](src/pages/dweb-camp-2022.js)–you will have to iterate through the array as you pass each component data object to the relevant component.
1. There are three components with a key field specifically called `text`: [PageBlockOpening](src/components/PageBlockOpening.js), [PageBlockFeature](src/components/PageBlockFeature.js), and [PageBlockCTA](src/components/PageBlockCTA.js). The value given for that key will be rendered on the page as Markdown. Additionally, any link within that markdown will be rendered as a url that opens in a new tab upon being clicked, even if the link is internal. This choice was made in order to have consistent behavior across all components. **Values entered for all other keys can be expected to be read as plaintext.**
    - Due the unorthodox flow of data from YAML to Markdown to HTML, the rendering of newlines can be a bit funky. In short, you can use any one of three sequences for a new paragraph in the rendered HTML: `\n\n`, `\n` + a literal newline, or two literal newlines. Additionally, `\\\n` will allow for a newline without starting a new paragraph. Compare the YAMl for the [Contact.yaml](static/page-data/Contact.yaml) page to the HTML on the website for the Contact page for an good example.
    - By default, any raw HTML within `text` is escaped due to the behavior of the [react-markdown](https://github.com/remarkjs/react-markdown#appendix-a-html-in-markdown) package. However, there is an optional key called `text_includes_raw_html` that may be set to `True` which allows for HTML to be embedded in `text` and rendered properly. An example of this can be found in [using-the-dweb-brand.yaml](/Users/scoob/internetarchive/winter-contract-2022/dweb-gatsby/static/page-data/using-the-dweb-brand.yaml) where the `<span>` tag is used for styling text a specific color.
1. Unlike the always-external behavior of urls written inside of the "text" key found in some components, the components [PageBlockCTA](src/components/PageBlockCTA.js), [PageBlockFeature](src/components/PageBlockFeature.js), and [PageBlockButton](src/components/PageBlockButton.js) have a url stored in `button_link_url` as well as a key called `button_link_direction` that allows a distinction to be made between whether the link in `button_link_url` is `internal` or `external`. By default, the link is external and the value of `button_link_direction` may be left blank. If the desired link is external, then the following `key: value` pair may be written in the relevant YAML file: `button_link_direction: internal`.

### Modular Components and their key/value pairs
- [PageBlockCTA](src/components/PageBlockCTA.js):
    - title: `String`
    - text: `String` (rendered as Markdown)
    - text_includes_raw_html: `Boolean`
    - button_caption: `String`
    - button_link_direction: `String`
    - button_link_url: `String`
- [PageBlockFeature](src/components/PageBlockFeature.js):
    - title: `String`
    - text: `String` (rendered as Markdown)
    - text_includes_raw_html: `Boolean`
    - button_caption: `String`
    - button_link_direction: `String`
    - button_link_url: `String`
    - image_url: `String`
- [PageBlockHighlighted](src/components/PageBlockHighlighted.js):
    - author: `String`
    - quote: `String`
    - background_image: `String`
    - background_color: `String`
- [PageBlockOpening](src/components/PageBlockOpening.js):
    - title: `String`
    - text: `String` (rendered as Markdown)
    - text_includes_raw_html: `Boolean`
    - hero_image_desktop_url: `String`
    - hero_image_mobile_url: `String`
- [PageBlockContent](src/components/PageBlockContent.js):
    - text: `String`
- [PageBlockWideImage](src/components/PageBlockWideImage.js):
    - image: `String`
- [PageBlockButton](src/components/PageBlockButton.js):
    - button_caption: `String`
    - button_link_direction: `String`
    - button_link_url: `String`

## Built With

- [Gatsby](https://www.gatsbyjs.com/) - Used to build the static site

## License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for
details

## Known Issues

- [X] CSS build process is working, but needs to be updated. Once node-sass enables compatibility with Node v18, the project should be able to build in Node v18 (currently stuck in v16). See [here](https://github.com/sass/node-sass/pull/3257) for information regarding the node-sass compatibility update.
- [ ] Images needs alt tags
- [ ] The page [using-the-dweb-brand.js](src/pages/using-the-dweb-brand.js) isn't linked to anywhere and thus is inaccessible. Is this intentional?
- [ ] [events-archive.yaml](static/page-data/events-archive.yaml) is left unpretty
- [ ] The video element on the frontpage does not appear to be loading the video properly, it appears to be a change on the Internet Archive's end because previous version's of the site cannot load it either.
- [ ] In [Hero.js](src/components/Hero.js), "wordpress_id" should be changed to "key_id". This will also require changing the contents of [HeroQuotes.yaml](src/data/HeroQuotes.yaml) in the same way. This should be done after reliance on wordpress has been severed because the python tools used to make that transfer use "wordpress_id" and will do so ever time the site is build using the wordpress data.
- [ ] In [Principles.yaml](src/data/Principles.yaml), the YAML is storing raw HTML when it should instead lists of the principles using standard YAML syntax. Be careful when fixing this because the python transition tools output this HTML-formatted list. It would make sense to update Principles.yaml and the associated component only after the final break from Wordpress is made so that the transition tools do not interfere.
- [ ] The link to the video and background link in [Hero.js](src/components/Hero.js) should live in a YAML file inside the [data](src/data/) folder.
- [ ] If you click on "recent" on the [Events](https://getdweb.net/#events) page, the highlighting of the current page in the navigation bar breaks because it does not account for the increased page height. The [Voices](https://getdweb.net/#voices) page also increases page height but this change is accouned for and doesn't not cause an issues. Looking at how the Voices page avoids this problem and implementing the solution for the Events would resolve this issue.
- [ ] As part of the updating of the codebase, the slider component has a black bar on the right side of the screen on some devices.
- [ ] If you open the homepage and you repeatedly click on the brightly colored quote circles, the animation slows to a crawl. There appears to be an unecessary page reloading happening every time one of these quote circles is clicked.
- [ ] There is an announcement section on the homepage, but it is not viewable on some devices because it is styled to be hidden at certain screen sizes. The styling should be changed in order for more devices to see the announcement. Alternatively, the announcement section should modified into something more prominent (like a permanent horizontal bar at all screen sizes that can be removed) or the bar could removed entirely and the information it held could be placed elsewhere.
