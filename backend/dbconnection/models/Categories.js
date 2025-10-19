const { Schema, model } = require('mongoose');

 const CategoriesSchema = new Schema({
    name:String,
    filters:[String],
});

const Categories = model('Categories', CategoriesSchema);
module.exports = Categories;