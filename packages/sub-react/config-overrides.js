/* config-overrides.js */
const { name } = require('./package');

module.exports = {
    webpack: function(config) {
        config.output.library = `${name}-[name]`;
        config.output.libraryTarget = 'umd';
        return config;
    },
}