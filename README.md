# PokeAPI project

The purpose of this app is to be a demo app for engineers to use to learn cypress and see how it works in a pipeline
If you're fine with installing all the packages in the package-lock file, just npm i to get everything listed below.

Make sure you're in the nier folder before using npm i.

```bash
$ npm i
```

## Running the tests

> The test suite gets updated regularly, so before you run tests, its good to always make sure you update with git pull regularly and also do an `npm i` as needed

You can run the tests from the Cypress UI, or from the command line.

There are many ways to do this, and you can see them all in the `package.json`, but I'll outline the easiest ways to do this below. The different commands in `package.json` all follow the same logic.

### Running tests from Cypress UI:

I recommend using the following commands to open up all Cypress tests in a GUI format (so you can pick and choose tests at will)

```bash
$ npm run cypress:gui_all_local
```

### Running tests with Electron (headless browser) from the command line/terminal:

I recommend using the following commands to run all Cypress smoke tests headlessly from your console

```bash
$ npm run cypress:smoke_local
```

# Generated Readme below

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

You will also see any lint errors in the console.
