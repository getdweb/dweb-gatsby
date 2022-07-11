# get-dweb-dot-net

Official repo for [getdweb.net](https://getdweb.net/), a website built for connecting people,
projects and protocols to build a decentralized web.

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes.

### Prerequisites

Requirements for the software and other tools to build, test and push

- [node](https://nodejs.org/en/download/)
- [gatsby-cli](https://www.npmjs.com/package/gatsby-cli)

### Installing

1. Clone the repository to your machine
1. `cd` into the respository folder
1. run `npm install`
1. run `npm install -g gatsby-cli` if you don't already have gatsby-cli installed globally
1. run `npm run develop` to spin up a development server or `npm run build` to build a production-ready version of the site

### Style test

There is an ESLint configuation which extends the [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and [prettier](https://github.com/prettier/eslint-config-prettier/) configurations. Please adhere to these standards to preserve maintainability of the codebase.

## Built With

- [Gatsby](https://www.gatsbyjs.com/) - Used to build the static site
- [MDX](https://mdxjs.com/) - Used to organize page structure

## License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for
details

## Known Issues

- [ ] CSS build process is broken - the [all.min.css](static/css/all.min.css) file is made available to all files through [gatsby-browser.js](gatsby-browser.js), but all.min.css is not built using the scss files found in [src/css/scss](src/css/scss). Also, [gulpfile.js](gulpfile.js) does not provide a working build process and it's not currently known what is broken. For now, update both all.min.css and the relevant scss file directly in order to update the site styles.
