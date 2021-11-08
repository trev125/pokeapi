/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const fs = require("fs-extra")
const path = require("path")

// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
	const enviroment = config.env.configFile
	let configForEnviroment = getConfigurationByFile(enviroment)
	// This is so we can get the testing_url set in the CLI for pip commits
	configForEnviroment.then((file) => {
		if (config.env.testing_url) {
			file.env.testing_url = config.env.testing_url
		}
	})

	return configForEnviroment || config
}

function getConfigurationByFile(file) {
	const pathToConfigFile = `cypress/config/${file}.json`
	return fs.readJson(path.join(__dirname, "../../", pathToConfigFile))
}
