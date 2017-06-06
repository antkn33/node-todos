const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// todo.remove - multiples

// removes all todos
// Todo.remove({}).then((result) => {
// 	console.log.apply(result);
// });

//Todo.findOneAndRemove
Todo.findOneAndRemove({_id: '593566483adadd8a34e08f42'}).then((todo) => {
	console.log(todo);
});

//Todo.findByIdAndRemove
Todo.findByIdAndRemove('593566483adadd8a34e08f42').then((todo) => {
	console.log(todo);
});