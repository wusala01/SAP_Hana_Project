'use strict';

var MongoClient = require('mongodb').MongoClient,
    Promise = require('bluebird');

export class DBConnector {
	constructor() {
		this.collections = new Map();
	}
	
	static async factory(uri){
		MongoClient.connect(uri, (err, db) => {
			if (err) {
				console.error(err); 
				return false;
			} else {
				var r = new DBConnector();
				r.database = db;
				return r;
			}
		});
	}
	
	collection(collection) {
		if (this.collections.has(collection)) return this.collections.get(collection);else return new Collection(this, collection);
	}

	removeCollection(collection) {
		if (this.collections.has(collection)) {
			this.collections.delete(collection);
			return Promise.resolve(this.database.dropCollection(collection));
		} else {
			this.collection(collection);
			return Promise.resolve(this.removeCollection(collection));
		}
	}
}

export class Collection {
	constructor(that, collection) {
		this.parent = that;
		this._collection = this.parent.database.collection(collection);
		this.parent.collections.set(collection, this.parent);
	}

	setPrimary(index) {
		return Promise.fromCallback(cb => {
			this._collection.setIndex(index, {
				unique: true,
				background: true,
				dropDups: true
			}, cb);
		});
	}

	find(selector, multi) {
		if (multi) {
			return new Promise((resolve, reject) => {
				var cursor;
				try {
					cursor = this._collection.find(selector);
					resolve(cursor.toArray());
				} catch (err) {
					reject(err);
				}
			});
		} else {
			return Promise.resolve(this._collection.findOne(selector, {}));
		}
	}

	insert(data) {
		var fn = data instanceof Array ? 'insertMany' : 'insertOne';
		return Promise.resolve(this._collection[fn](data, {
			serializeFunctions: true,
			forceServerObjectId: true
		}));
	}

	update(selector, data) {
		var fn = data instanceof Array ? 'updateMany' : 'updateOne';
		return Promise.resolve(this._collection[fn](selector, data));
	}

	delete(selector) {
		var fn = data instanceof Array ? 'deleteMany' : 'deleteOne';
		return Promise.resolve(this._collection[fn](selector));
	}
}