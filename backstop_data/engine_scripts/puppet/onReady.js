const process = require("process");
const path = require("path")
const args = require('minimist')(process.argv.slice(2));

/**
 * @todo should we test args.testPath when it's set to to make sure there is an ending separator?
 * @type {*|string}
 */
const test_path = args.testPath ? args.testPath : path.resolve(process.env.GITHUB_WORKSPACE,'.github','tests','vrt') + path.sep;
const readyFile = test_path + 'onReady';

module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  // add more ready handlers here...

  // Support for custom downstream onReady file
  try {
    await require(readyFile)(page,scenario)
  } catch (e) {
    // not having a custom onReady file is an expected potential outcome, so we don't need to do anything
  }
};
