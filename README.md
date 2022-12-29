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
