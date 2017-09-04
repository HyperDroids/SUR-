var mongoose = require('mongoose');

// Item Schema
var itemSchema = mongoose.Schema({
    user:{
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    },
    title:{
      type: String,
      required: true
    },
    description:{
      type: String,
    },
    category:{
      type: String,
    },
    weight:{
      type: String,
    },
    dimensionsX:{
      type: String,
    },
    dimensionsY:{
      type: String,
    },
    dimensionsZ:{
      type: String,
    },
    telephone:{
      type: String,
    },
    mobile:{
      type: String,
    },
    image_url:{
      type: String,
    },
    price:{
      type: String,
    },
    create_date:{
      type: Date,
      default: Date.now
    },
});

const Item = module.exports = mongoose.model('Item', itemSchema);

// Get Items
module.exports.getItems = (callback, limit) => {
	Item.find(callback).limit(limit);
}

// Get Item
module.exports.getItemById = (id, callback) => {
	Item.findById(id, callback);
}

// Add Item
module.exports.addItem = (item, callback) => {
	Item.create(item, callback);
}

// Update Item
module.exports.updateItem = (id, item, options, callback) => {
	var query = {_id: id};
	var update = {
    user: item.user,
    email: item.email,
		title: item.title,
		featured: item.featured,
		category: item.category,
    weight: item.weight,
    dimensionsX: item.dimensionsX,
    dimensionsY: item.dimensionsY,
    dimensionsZ: item.dimensionsZ,
    telephone: item.telephone,
    mobile: item.mobile,
		image_url: item.image_url,
		price: item.price
	}
	Item.findOneAndUpdate(query, update, options, callback);
}

// Delete Item
module.exports.removeItem = (id, callback) => {
	var query = {_id: id};
	Item.remove(query, callback);
}
