var MongoClient = require('mongodb').MongoClient(),
Promise = require('bluebird'),
assert = require('assert'),
vcapServices = require('vcap_services');


console.log(JSON.stringify(vcapServices.getCredentials("mongodb")));
var uri = vcapServices.getCredentials("mongodb")["uri"] || "localhost:27017";

var obj = {};

function instanciate(db) {
	return new Promise((resolve, reject) => {
		if (!(db.collection('users'))) 
			db.createCollection('users').then(resolve).catch(reject);	
		resolve(db.collection('users'));
	});
}

MongoClient.connect(uri).then(db => {
	obj.db = db;
	instanciate(db).then(usersCollection => {
		obj.collection = usersCollection;
	}).catch(console.error);
});

obj.getToken = function getToken(id){
	return new Promise((resolve, reject) => {
		this.collection.findOne({ _id: id }).then(result => {
			resolve(result.token);
		}).catch(reject);
	});
}

obj.createUser = function createUser(id){
	return new Promise((resolve, reject) => {
		var user = this.getUser(id).then(result => {
			if(result === null || result === undefined || result == {}){
				this.collection.insertOne({ _id: id , token: "undefined"}).then(resolve).catch(reject);
			} else {
				reject(new Error('User already Existed'));
			}
		}).catch(reject);
	});
}

obj.addGit = function addGit(id, token){
	return this.collection.updateOne({_id : id}, {"$set": {token : token}});
}

var exports = module.exports = obj;