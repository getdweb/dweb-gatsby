# get-dweb-dot-net

Official repo for [getdweb.net](https://getdweb.net/), a website built for connecting people,
projects and protocols to build a decentralized web.

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

### Style test

There is an ESLint configuation which extends the [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [prettier](https://github.com/prettier/eslint-config-prettier/) configurations. Please adhere to these standards to preserve maintainability of the codebase.

### About relative linking

By default, the repository builds the website with relative linking. This includes  If you wanted to build this repo without relative linking, you would need to comment out `pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',` and `'gatsby-plugin-ipfs',` found in [gatsby-config.js](gatsby-config.js). Additionally, you would have to disable the post-build process in [gatsby-node.js](gatsby-node.js) that replaces all image urls with the correct relative paths.

## Information about Modular Page Construction

There are a number of pages which are constructed from data that lives in the directory [/static/page-data/](/static/page-data/). The data for each page lives in it's own YAML file, but there are a few things to note:

1. YAML is composed of key and value pairs. [Here](https://quickref.me/yaml) is a cheat sheet for more information, but you can gather most of what you need to know to edit these pages by mimicking the formatting of the data that is already present in the YAML files.
1. There are seven unique modular components any given page might use. The structure of a page is dictated by the order of components given in the page's YAML file. For example, the Contact page is defined by the [Contact.yaml](static/page-data/Contact) file which invokes [PageBlockOpening](src/components/PageBlockOpening.js) followed by [PageBlockFeature](src/components/PageBlockFeature.js). Beneath each component key is the relevant information each component needs to function properly. [Below](#modular-components-and-their-properties) is a complete list of modules and their properties:
1. For any component that has a key specifically called `text`, the value given for that key will be rendered on the page as Markdown. Additionally, any link within that markdown will be rendered as a url that opens in a new tab upon being clicked, even if the link is internal. This choice was made in order to have consistent behavior across all components. **Values entered for all other keys can be expected to be read as plaintext.**
    - Due the unorthodox flow of data from YAML to Markdown to HTML, the rendering of newlines can be a bit funky. In short, you can use any one of three sequences for a new paragraph in the rendered HTML: `\n\n`, `\n` + a literal newline, or two literal newlines. Additionally, `\\\n` will allow for a newline without starting a new paragraph. Compare the YAMl for the [Contact.yaml](static/page-data/Contact.yaml) page to the HTML on the website for the Contact page for an good example.
1. Unlike the always-external behavior of urls written inside of the "text" key found in some components, the components [PageBlockCTA](src/components/PageBlockCTA.js), [PageBlockFeature](src/components/PageBlockFeature.js), and [PageBlockButton](src/components/PageBlockButton.js) have a url stored in `button_link_url` as well as a key called `button_link_direction` that allows a distinction to be made between whether the link in `button_link_url` is `internal` or `external`. By default, the link is external and the value of `button_link_direction` may be left blank. If the desired link is external, then the following `key: value` pair may be written in the relevant YAML file: `button_link_direction: internal`.

### Modular Components and their properties
- [PageBlockCTA](src/components/PageBlockCTA.js):
    - title:
    - text:
    - button_caption:
    - button_link_direction:
    - button_link_url:
- [PageBlockFeature](src/components/PageBlockFeature.js):
    - title:
    - text:
    - button_caption:
    - button_link_direction:
    - button_link_url:
    - image_url:
- [PageBlockHighlighted](src/components/PageBlockHighlighted.js):
    - author:
    - quote:
    - background_image:
    - background_color:
- [PageBlockOpening](src/components/PageBlockOpening.js):
    - title:
    - text:
    - hero_image_desktop_url:
    - hero_image_mobile_url:
- [PageBlockContent](src/components/PageBlockContent.js):
    - text:
- [PageBlockWideImage](src/components/PageBlockWideImage.js):
    - image:
- [PageBlockButton](src/components/PageBlockButton.js):
    - button_caption:
    - button_link_direction:
    - button_link_url:

There is also the [PageBlockBorder](src/components/PageBlockBorder.js) component, but this is coded directly into the pages and is not invoked a page's YAML file.

## Built With

- [Gatsby](https://www.gatsbyjs.com/) - Used to build the static site

## License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for
details

## Known Issues

- [X] CSS build process is working, but needs to be updated. Once node-sass enables compatibility with Node v18, the project should be able to build in Node v18 (currently stuck in v16). See [here](https://github.com/sass/node-sass/pull/3257) for information regarding the node-sass compatibility update.
- [ ] In [Hero.js](src/components/Hero.js), "wordpress_id" should be changed to "key_id". This will also require changing the contents of [HeroQuotes.yaml](src/data/HeroQuotes.yaml) in the same way. This should be done after reliance on wordpress has been severed because the python tools used to make that transfer use "wordpress_id" and will do so ever time the site is build using the wordpress data.
- [ ] In [Principles.yaml](src/data/Principles.yaml), the YAML is storing raw HTML when it should instead lists of the principles using standard YAML syntax. Be careful when fixing this because the python transition tools output this HTML-formatted list. It would make sense to update Principles.yaml and the associated component only after the final break from Wordpress is made so that the transition tools do not interfere.
- [ ] The link to the video and background link in [Hero.js](src/components/Hero.js) should live in a YAML file inside the [data](src/data/) folder.
- [ ] If you click on "recent" on the [Events](https://getdweb.net/#events) page, the highlighting of the current page in the navigation bar breaks because it does not account for the increased page height. The [Voices](https://getdweb.net/#voices) page also increases page height but this change is accouned for and doesn't not cause an issues. Looking at how the Voices page avoids this problem and implementing the solution for the Events would resolve this issue.
- [ ] As part of the updating of the codebase, the slider component has a black bar on the right side of the screen on some devices.
- [ ] If you open the homepage and you repeatedly click on the brightly colored quote circles, the animation slows to a crawl. There appears to be an unecessary page reloading happening every time one of these quote circles is clicked.
- [ ] There is an announcement section on the homepage, but it is not viewable on some devices because it is styled to be hidden at certain screen sizes. The styling should be changed in order for more devices to see the announcement. Alternatively, the announcement section should modified into something more prominent (like a permanent horizontal bar at all screen sizes that can be removed) or the bar could removed entirely and the information it held could be placed elsewhere.
