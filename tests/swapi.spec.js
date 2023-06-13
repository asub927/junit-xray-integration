const {spec, handler} = require('pactum')

const {testCaseInfo} = require('../utils/common')

describe('swapi api suite', function() {
    let _spec = spec()

    beforeEach('Add reporter contexts', function() {
        _spec = spec()
        _spec.records('mocha', this)
    })

    it('Invoke people api', async function() {
        this.testCaseMetaData = await testCaseInfo('JIRA-1', this.test.title)

        await _spec
        .get('/api/people').expectStatus(200)
    })
})