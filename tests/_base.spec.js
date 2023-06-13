const {request, reporter} = require('pactum')
const addContext = require('mochawesome/addContext')

const config = require('../config.json')

const awesome_reporter = {
    afterSpec(_spec) {
        const mocha_context = _spec.recorded['mocha']
        addContext(mocha_context, {
            title: 'request',
            value: _spec.request
        }),
        addContext(mocha_context, {
            title: 'response',
            value:_spec.response
        })
    }
}

before(() => {
    request.setBaseUrl(config.baseUrl),
    request.setDefaultTimeout(config.timeout),
    reporter.add(awesome_reporter)
})