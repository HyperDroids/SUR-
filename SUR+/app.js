const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

User =require('./models/user');
Item =require('./models/item');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/rest-commerce');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/items or /api/users');
});



// Get list of Users

app.get('/api/users', (req, res) => {
	User.getUsers((err, users) => {
		if(err){
			throw err;
		}
		res.json(users);
	});
});



// Add User

app.post('/api/users', (req, res) => {
	var user = req.body;
	User.addUser(user, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});



// Edit User

app.put('/api/users/:_id', (req, res) => {
	var id = req.params._id;
	var user = req.body;
	User.updateUser(id, user, {}, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});



// Delete an existing User

app.delete('/api/users/:_id', (req, res) => {
	var id = req.params._id;
	User.removeUser(id, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
});



// Get list of Items

app.get('/api/items', (req, res) => {
	Item.getItems((err, items) => {
		if(err){
			throw err;
		}
		res.json(items);
	});
});



// Get Item by ID

app.get('/api/items/:_id', (req, res) => {
	Item.getItemById(req.params._id, (err, item) => {
		if(err){
			throw err;
		}
		res.json(item);
	});
});



// Add a new Item

app.post('/api/items', (req, res) => {
	var item = req.body;
	Item.addItem(item, (err, item) => {
		if(err){
			throw err;
		}
		res.json(item);
	});
});



// Edit an existing Item

app.put('/api/items/:_id', (req, res) => {
	var id = req.params._id;
	var item = req.body;
	Item.updateItem(id, item, {}, (err, item) => {
		if(err){
			throw err;
		}
		res.json(item);
	});
});



// Delete Item

app.delete('/api/items/:_id', (req, res) => {
	var id = req.params._id;
	Item.removeItem(id, (err, item) => {
		if(err){
			throw err;
		}
		res.json(item);
	});
});

app.listen(3000);
console.log('Running on port 3000...');
