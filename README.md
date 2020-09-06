<p align="center">
   <img width="300" src='https://i.imgur.com/GhcxkhC.png'>
</p>
<p align="center">
  An opinionated starter that contains everything you need to quickly ship any type of static site.
</p>
<p align="center">
  <a href='https://gatsby-starter-picks.netlify.com'><b>DEMO</b></a>
</p>
<p>
</p>
  <br>
<p align="center">
  <a href="https://github.com/MantasMikal/gatsby-starter-picks/issues">
    <img
      src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"
      alt="Contributions welcome"
    />
  </a>
    <a href="https://github.com/MantasMikal/gatsby-starter-picks/blob/master/LICENSE">
    <img
      src="https://img.shields.io/github/license/MantasMikal/gatsby-starter-picks "
      alt="styled with prettier"
    />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img
      src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"
      alt="styled with prettier"
    />
  </a>
  <a href="https://app.netlify.com/sites/gatsby-starter-picks/deploys">
    <img
      src="https://api.netlify.com/api/v1/badges/93ecc1ca-2fd8-427a-96de-245af6e0d17a/deploy-status"
      alt="Netlify Status"
    />
  </a>
<p>
<p align="center">
  <img width="500" src="https://i.imgur.com/Md3UTQ9.png" alt="Google lighthouse"/>
</p>

## Features

- [x] Sanity.io CMS integration with a few predefined schemas
- [x] SCSS Modules
- [x] Buletproof base level component library to get the boring stuff out of the way
- [x] Useful set of SCSS utility [mixins](https://www.npmjs.com/package/backline-mixins) to aid development
- [x] Tests included
- [x] Created with accessibility in mind
- [x] Storybook 6 integration
- [x] Inline SVG support
- [x] PWA support
- [x] Sitemap support
- [x] ESLint

## Setup

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/MantasMikal/gatsby-starter-picks)

Use NPM

```bash
# Install deps
cd gatsby-starter-picks && npm i && npm i -g @sanity/cli gatsby-cli

# Login to Sanity
sanity login

# Runs out of the box
# Studio at http://localhost:3333
# Web frontend at http://localhost:8000
# GraphiQL explorer at http://localhost:8000/___graphql
npm start

# When you are ready setup the Sanity.io CMS
# Create a project and deploy Graphql API
# Once you launch the site you must go to studio and add some data to Site Settings and Pages/Home
# Then restart the site
cd studio && sanity init && npm run graphql-deploy && cd ..

# Format and lint
npm run lint
npm run fix

# Build
npm run build

# Deploy Sanity Graphql API
npm run graphql-deploy

# Deploy the Sanity Studio to *.sanity.studio
npm run sanity-deploy

# Run storybook
npm run storybook

```

## Read the docs

Run Storybook to learn how components work

[Getting started with Sanity.io](https://www.sanity.io/blog/get-started-with-gatsby-and-structured-content)

[Sanity.io](https://www.sanity.io/blog/get-started-with-gatsby-and-structured-content)

[gatsby-source-sanity](https://github.com/sanity-io/gatsby-source-sanity)

## Contrubute

1. [Fork it](https://github.com/MantasMikal/gatsby-starter-picks/fork)
2. Create your feature branch `git checkout -b feature/fooBar`
3. Commit your changes `git commit -am 'Add some fooBar'`
4. Push to the branch `git push origin feature/fooBar`
5. Create a new Pull Request

## Credits

A massive thanks to [@jackbrewer](https://github.com/jackbrewer) for creating and mainting [Picks](https://github.com/jackbrewer/picks) component library and SASS utility [mixins](https://www.npmjs.com/package/backline-mixins)

This starter is inspired by [Sanity](https://github.com/sanity-io/example-company-website-gatsby-sanity-combo)
