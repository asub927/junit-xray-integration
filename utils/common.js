async function testCaseInfo(key, title) {
    return {
        test_key: key,
        test_summary: title,
        test_description:{
            _cdata: title
        }
    }
}

module.exports = {
    testCaseInfo
}