const mongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';

async function connectToDbServer(url){
	let mongoConnection;
	try {
		mongoConnection = await mongoClient.connect(url, { useNewUrlParser: true });
		console.log('mongoConnection', mongoConnection);
	} catch (error) {
		console.error(error);
	}
	return mongoConnection;
}

async function createDb(mongoConnection){
	try {
		var db = await mongoConnection.db('db');
		console.log('db', db);		
	} catch (error) {
		console.error('db', db);	
	}
	return db;
}

async function insertDocumentInCollection(db, document, collectionName){
	try {
		var collection = await db.collection(collectionName);
		var writeResult = await collection.insertOne(document);
		console.log('writeResult', writeResult);
	} catch (error) {
		console.error(error);
	}
	return writeResult;
}

async function getAllDocumentsFromCollection(db, collectionName){
	try {
		var collection = await db.collection(collectionName);
		var documents = await collection.find({}).toArray();	
		console.log('documents', documents);
	} catch (error) {
		console.error(error);	
	}
	return documents;
}

async function updateDocumentInCollection(db, oldDocument, newDocument, collectionName){
	try {
		var collection = await db.collection(collectionName);
		var updatedDocument = await collection.updateOne(oldDocument, { $set: newDocument });
		console.log('updatedDocument', updatedDocument);
	} catch (error) {
		console.error(error);
	}
}

async function removeDocumentFromCollection(db, removedDocument, collectionName){
	try {
		var collection = await db.collection(collectionName);
		var writeResult = await collection.remove(removedDocument);
		console.log('Removal writeResult', writeResult);
	} catch (error) {
		console.error(error);
	}
	return writeResult;
}

async function closeConnectionToDbServer(mongoConnection){
	mongoConnection.close();
}

// Function exemplifying usage
// (async function main(){
// 	const mongoConnection = await connectToDbServer(url);
// 	const db = await createDb(mongoConnection);
// 	await insertDocumentInCollection(db, { property: 10 },'collection');
// 	await updateDocumentInCollection(db, { property: 10 }, { anotherProperty: 20 }, 'collection');
// 	await removeDocumentFromCollection(db, { anotherProperty: 20 }, 'collection');
// 	await getAllDocumentsFromCollection(db, 'collection');
// 	await closeConnectionToDbServer(mongoConnection);
// })();

module.exports = {
	connectToDbServer,
	createDb,
	insertDocumentInCollection,
	getAllDocumentsFromCollection,
	updateDocumentInCollection,
	removeDocumentFromCollection,
	closeConnectionToDbServer	
}

/* Flow with promises instead of async/await:

connectToDbServer(url)
	.then(createDb);
	...
*/