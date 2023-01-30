/**
 * This is the default scenarios collection that will be used if there is not a template-specific scenarios file in place
 * for a given template. You can copy this file and then name it `template-paths.js`.
 *
 */

/**
 * Stores the scenarios for each page/endpoint that should be tested
 * @type {{}}
 */
var scenarioPaths = {};

/**
 * For each page/endpoint you want to test, create a new array entry that contains at least the keys/properties `label`
 * and `path`.
 *
 * additional properties you can set for each scenario are documented here: https://github.com/garris/BackstopJS#advanced-scenarios
 *
 * However, do NOT set `referenceUrl` or `url` as those will be overridden
 *
 * `path` should assume the URL ends in a trailing slash. For example, if the page you want to test against is
 * https://master-7rqtwti-fqfjrmtjbjta4.eu-3.platformsh.site/a/path/to/foo/bar/
 * Then for `path` it should be "a/path/to/foo/bar/"
 *
 * If you wish to override the default paths or add to them, create an object in the template-paths.js file with the
 * exact same label name, and then any properties you wish to add/change. For example, if the template needs a delay of
 * 2 seconds for the Forced 404 path, you can add the following:
 * <code>
 * scenarioPaths.paths = [
 * {
 *       "label": "Forced 404",
 *       "delay": 2000,
 *   }
 * ];
 * </code>
 *
 * The action will merge the delay property with the path from the defaults-paths collection.
 *
 * @type {{path: string, label: string}[]}
 */
scenarioPaths.paths = [
    {
        "label":"Home",
        "path": ""
    },
    {
        "label": "Forced 404",
        "path": "a/path/to/nowhere/"
    }
];

module.exports = scenarioPaths;
