// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if (err) {
	return console.log('unable to connect to MongoDb Server');
}
console.log('Connected to MongoDb Server');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('59257f8852c67d1c567b2c99')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	// 	db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count} `);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('Users').find({name: 'Sophia Scott'}).toArray().then((docs) => {
		console.log('Users');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('unable to fetch users', err);
	});

// db.close();
});