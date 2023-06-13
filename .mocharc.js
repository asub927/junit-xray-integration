'use strict'

module.exports = {
    color: true,
    diff: true,
    'full-trace': true,
    reporter: 'node_modules/mocha-multi-reporters',
    'reporter-option': ['configFile=reporter-config.json'],
    spec: ['tests/*.spec.js'],
    timeout: 30000
}