const { Schema, model } = require('mongoose');

 const CategoriesSchema = new Schema({
 categories:[String],
});

const Categories = model('Categories', CategoriesSchema);
module.exports = Categories;