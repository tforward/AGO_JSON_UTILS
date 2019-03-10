
GitHub
- GitHub, new project
- Set the "Add .gitignore: " to Node
- Set the license
- Create Repo

GitHub Desktop
- Clone / Download and copy link


- Copy Template Files

- npm init

// Save DEV

npm install --save-dev eslint
npm install --save-dev eslint-plugin-import
npm install --save-dev prettier
npm install --save-dev eslint-config-prettier
npm install --save-dev eslint-plugin-prettier


- Commit / Restart
	- eslint --init
	- AirBnB, Pick JSON
- Copy eslint config from Template

Webpack Core

npm install --save-dev webpack
npm install --save-dev webpack-cli
npm install --save-dev webpack-dev-server
npm install --save-dev style-loader
npm install --save-dev css-loader
npm install --save-dev html-webpack-plugin

Webpack File/Images
npm install --save-dev file-loader
npm install --save-dev image-webpack-loader

- webpack config template files rename

Optional Packages

npm install --save-dev ramda

Mapping
npm install --save-dev leaflet

Testing Package

Add these lines into "package.json" under "scripts"
make sure to add a comma, to the previous line

"start": "webpack-dev-server --open",

"build": "webpack --config webpack.prod.js"

Git Commit and Done Set-up