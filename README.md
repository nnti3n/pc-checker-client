PC Checker Client
=======================

[![Join the chat at https://gitter.im/davezuko/react-redux-starter-kit](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/davezuko/react-redux-starter-kit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/davezuko/react-redux-starter-kit.svg?branch=master)](https://travis-ci.org/davezuko/react-redux-starter-kit?branch=master)
[![dependencies](https://david-dm.org/davezuko/react-redux-starter-kit.svg)](https://david-dm.org/davezuko/react-redux-starter-kit)
[![devDependency Status](https://david-dm.org/davezuko/react-redux-starter-kit/dev-status.svg)](https://david-dm.org/davezuko/react-redux-starter-kit#info=devDependencies)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


Table of Contents
-----------------
1. [Requirements](#requirements)
1. [Features](#features)
1. [Getting Started](#getting-started)
1. [Usage](#usage)
1. [CLI Generators](#cli-generators)
1. [Structure](#structure)
1. [Webpack](#webpack)
1. [Server](#server)
1. [Styles](#styles)
1. [Testing](#testing)
1. [Deployment](#deployment)
1. [Troubleshooting](#troubleshooting)
1. [Learning Resources](#learning-resources)
1. [Thank You](#thank-you)

Requirements
------------

* node `^4.2.0`
* npm `^3.0.0`

Features
--------

* [React](https://github.com/facebook/react) (`^15.0.0`)
* [Redux](https://github.com/rackt/redux) (`^3.0.0`)
  * react-redux (`^4.0.0`)
  * redux-thunk middleware
* [react-router](https://github.com/rackt/react-router) (`^2.0.0`)
  * Asynchronous routes configured with dependencies and reducers
* [react-router-redux](https://github.com/rackt/react-router-redux) (`^4.0.0`)
* [Webpack](https://github.com/webpack/webpack)
  * Vanilla HMR using `module.hot` and `webpack-dev-middleware`
  * Code-splitting using `react-router` route configuration
  * Bundle splitting and CSS extraction
  * Sass w/ CSS modules, autoprefixer, and minification
* [Koa](https://github.com/koajs/koa) (`^2.0.0-alpha`)
* [Karma](https://github.com/karma-runner/karma)
  * Mocha w/ chai, sinon-chai, and chai-as-promised, and [chai-enzyme](https://github.com/producthunt/chai-enzyme)
  * PhantomJS
  * Code coverage reports/instrumentation with [isparta](https://github.com/deepsweet/isparta-loader)
* [Flow](http://flowtype.org/) (`^0.22.0`)
* [Babel](https://github.com/babel/babel) (`^6.3.0`)
  * [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime) so transforms aren't inlined
  * [babel-plugin-transform-react-constant-elements](https://babeljs.io/docs/plugins/transform-react-constant-elements/) save some memory allocation
  * [babel-plugin-transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types) remove `PropTypes`
* [ESLint](http://eslint.org)
  * Uses [Standard Style](https://github.com/feross/standard) by default, but you're welcome to change this.

Getting Started
---------------

Just clone the repo and install the necessary node modules:

```shell
$ git clone https://github.com/davezuko/react-redux-starter-kit.git
$ cd react-redux-starter-kit
$ npm install                   # Install Node modules listed in ./package.json (may take a while the first time)
$ npm start                     # Compile and launch
```

Structure
---------

The folder structure provided is only meant to serve as a guide, it is by no means prescriptive.

```
.
├── bin                      # Build/Start scripts
├── blueprints               # Blueprint files for redux-cli
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── config                   # Project configuration settings
├── interfaces               # Type declarations for Flow
├── server                   # Koa application (uses webpack middleware)
│   └── main.js              # Server application entry point
├── src                      # Application source code
│   ├── main.js              # Application bootstrap and rendering
│   ├── components           # Reusable Presentational Components
│   ├── containers           # Reusable Container Components
│   ├── layouts              # Components that dictate major page structure
│   ├── static               # Static assets (not imported anywhere in source code)
│   ├── styles               # Application-wide styles (generally settings)
│   ├── store                # Redux-specific pieces
│   │   ├── createStore.js   # Create and instrument redux store
│   │   └── reducers.js      # Reducer registry and injection
│   └── routes               # Main route definitions and async split points
│       ├── index.js         # Bootstrap main application routes with store
│       ├── Root.js          # Wrapper component for context-aware providers
│       ├── Home             # Fractal route
│       │   ├── index.js     # Route definitions and async split points
│       │   ├── assets       # Assets required to render components
│       │   ├── components   # Presentational React Components
│       │   ├── container    # Connect components to actions and store
│       │   ├── modules      # Collections of reducers/constants/actions
│       │   └── routes **    # Fractal sub-routes (** optional)
│       └── NotFound         # Capture unknown routes in component
└── tests                    # Unit tests
```
