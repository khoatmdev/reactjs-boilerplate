![Logo](https://raw.githubusercontent.com/varunalex/React-Webpack-4-Babel-7-boilerplate/master/dist/images/header.png)

# ReactJS Simple Boilerplate

This is a simple reactjs boilerplate. It had builded via [React 18](https://reactjs.org/docs/getting-started.html) + [Webpack 5](https://webpack.js.org/concepts/) + [Babel 7](https://babeljs.io/docs/en/)

## Table of contents

-   [How to install](#howtoinstall)
-   [Getting started](#gettingstarted)
-   [What's include?](#include)
-   [Project structure](#structure)
-   [Example Code](#example)

<a name="howtoinstall"></a>

## How to install

Clone repository and go to the project folder.

```bash
git clone https://github.com/khoatmdev/reactjs-boilerplate ProjectName
cd ProjectName
```

Then you should install required dependencies.

```bash
yarn install
```

<a name="gettingstarted"></a>

## Getting started

To launch project you need to execute following command:

```bash
yarn start
```

Open in browser: [http://localhost:8080](http://localhost:8080)

<a name="include"></a>

## What's Includes

### Tech stacks

-   [React Router](https://github.com/remix-run/react-router)

-   [Redux](https://redux.js.org)

-   [Redux Toolkit](https://redux-toolkit.js.org/)

-   [Redux-Saga](https://redux-saga.js.org/)

-   [Material UI](https://www.npmjs.com/package/@mui/material)

-   [React-i18next](https://github.com/i18next/react-i18next)

-   [Prop Types](https://www.npmjs.com/package/prop-types)

-   [Axios](https://www.npmjs.com/package/axios)

### Code Format

-   [Prettier](https://www.npmjs.com/package/prettier)

-   [ESlint](https://www.npmjs.com/package/eslint)

-   [Lint-Staged](https://www.npmjs.com/package/lint-staged)

-   [Husky](https://www.npmjs.com/package/husky)

<a name="structure"></a>

## Project structure

```
reactjs-boilerplate/
|
├──public/                                   // Directory for the build
|  ├──index.html
|
├──src/
|   ├──app
│   │   ├──components                        // Includes components used throughout the application (stateless component)
│   │   │   ├──[Name]
│   │   │   │   ├──index.js                  // Components JSX
│   │   │   │   └──...                       // Components style
│   │   └───...
│   │
│   │   ├──layouts                           // Includes layouts common for application
│   │   │   ├──components                    // Includes components used for layouts (stateless component)
│   │   │   │   ├──[Name]
│   │   │   │   │   ├──index.js              // Components JSX
│   │   │   │   │   └──...                   // Components style
│   │   └───...
│   │   │   ├──index.js                      // Combine layouts
│   │
│   │   ├──pages                             // Includes pages components in the application (stateful component)
│   │   │   ├──[Name]
│   │   │   │   ├──index.js                  // Components JSX
│   │   │   │   └──Loadable                  // Adapt suspense and lazy component
│   │   └───...
│   │
|   |   ├──index.js                          // Combine all components in app
|
|   ├──assets                                // Includes assets throughout the application
|
|   ├──constants                             // Global constant
|
|   ├──hooks                                 // Custom hooks
|
|   ├──locales                               // Translation locales
|
|   ├──routes                                // Includes routes common
|
|   ├──services                              // Call API services
|
|   ├──store                                 // Redux: config store and reducers
|
|   ├──styles                                // Global styles
|
|   ├──utils                                 // Global helpers
|   |   ├──httpRequest.js                    // Config common axios
|   |   ├──loadable.js                       // Config common suspense and lazy
|
├──index.js                                  // App entry
|
├──.babelrc                                  // Babel configuration
|
├──.env                                      // Environment constants
|
└──webpack.config.js                         // Webpack configuration
```

<a name="example"></a>

## Example Code

You can check in folder [app/pages/example](src/app/pages/Example/)
