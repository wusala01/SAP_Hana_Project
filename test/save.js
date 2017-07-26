require('dotenv').load();
const expect = require('chai').expect,
	assert = require('chai').assert,
	Gateway = require('./../src/save');

var gateway = new Gateway({
			"user": "wusala01",
			"repo": "SAP_Hana_Project",
			"path": "testfiles/test.bib"
		});
describe('save.js', () => {
	it('Should create a Object w/ correct keys and functions', () => {
		expect(gateway).to.be.an.instanceof(Gateway);
		expect(gateway).to.have.all.keys('auth', 'path', 'client', 'repoName', 'user', 'owner', 'repo');
	});
	it.skip('Should import a SHA for Commit identification and correct data', () => {
		return gateway.import().then((data, sha) => {
			expect(sha).to.be.a.string();
			expect(data).to.have.key('0');
			expect(data['0']).to.have.all.keys('bib_type', 'entry_key', 'fields');
			//TODO
		}).catch((err) => {
			assert.fail(1, 0, err.message);
		});
	});
});