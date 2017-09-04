const mongoose = require('mongoose');

// User Schema
const userSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const User = module.exports = mongoose.model('User', userSchema);

// Get Users
module.exports.getUsers = (callback, limit) => {
	User.find(callback).limit(limit);
}

// Add User
module.exports.addUser = (user, callback) => {
	User.create(user, callback);
}

// Update User
module.exports.updateUser = (id, user, options, callback) => {
	var query = {_id: id};
	var update = {
		name: user.name
	}
	User.findOneAndUpdate(query, update, options, callback);
}


// Delete User
module.exports.removeUser = (id, callback) => {
	var query = {_id: id};
	User.remove(query, callback);
}
