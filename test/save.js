require('dotenv').load();
const expect = require('chai').expect,
	Gateway = require('./../src/save');

var gateway = new Gateway({
			"user": "wusala01",
			"repo": "SAP_Hana_Project",
			"path": "testfiles/test.bib"
		});

describe('Object creation', () => {
	it('Should create a Object w/ correct keys and functions', () => {
		expect(gateway).to.be.an.instanceof(Gateway);
		expect(gateway).to.have.all.keys('auth', 'path', 'client', 'repoName', 'user', 'owner', 'repo');
	});
});