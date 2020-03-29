# flow-annotation-checker

flow-annotation-checker is a babel plugin to check if you have added flow annotation to all your files in the project.

This will list all the files which doesn't have flow annotation while building the bundle. 

## Installation

Using [npm](https://www.npmjs.com/)

```
npm install babel-plugin-flow-annotation-checker --save-dev
```

Using [yarn](https://classic.yarnpkg.com/en/)

```
yarn add --dev babel-plugin-flow-annotation-checker
```

## Usage

Add the plugin to .babelrc

```
{
  "plugins": ["babel-plugin-flow-annotation-checker"]
}
```

Build the bundle using webpack or run it using webpack-dev-server (If webpack is being used)

If any file doesn't have flow annotation a warning will be thrown in the terminal

```
WARNING WARNING!
following file does not have flow annotation
/Users/app/src/index.js
```

## Contributing
Pull requests are welcome.

## License