const { Schema, model } = require('mongoose');

 const CategoriesSchema = new Schema({
    name: String,
    filters: [String],
    // canonical list used by client: an array of category strings
    categories: [String],
});

const Categories = model('Categories', CategoriesSchema);
module.exports = Categories;