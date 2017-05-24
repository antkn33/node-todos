// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if (err) {
	return console.log('unable to connect to MongoDb Server');
}
console.log('Connected to MongoDb Server');

//delete many
// db.collection('Todos').deleteMany({text: 'wash my face'}).then((result) => {
// 	console.log(result);
// });

// delete one
// db.collection('Todos').deleteOne({text: 'wash my face'}).then((result) => {
// 	console.log(result);
// });

// find one and delete

// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
// 	console.log(result);
// });

db.collection('Users').findOneAndDelete({name: 'Sophia Scott'}).then((result) => {
	console.log(result);
});

// db.close();
});