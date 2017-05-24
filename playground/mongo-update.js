// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if (err) {
	return console.log('unable to connect to MongoDb Server');
}
console.log('Connected to MongoDb Server');

// db.collection('Users').findOneAndUpdate({
// 	_id: new ObjectID('592590df52c67d1c567b2fbc')
// }, {
// 	$set: {
// 		name: 'Anthony Scott'
// 	}
// }, {
// 	returnOriginal: false
// }).then((result) => {
// 	console.log(result);
// });

db.collection('Users').findOneAndUpdate({
	_id: new ObjectID('592590df52c67d1c567b2fbc')
}, {
	$inc: {
		age: 1
	}
}, {
	returnOriginal: false
}).then((result) => {
	console.log(result);
});

// db.close();
});