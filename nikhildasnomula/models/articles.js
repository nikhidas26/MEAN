const mongoose = require('mongoose');
const config = require('../config/database');

// Article Schema
const ArticlesSchema = mongoose.Schema({
  title: {
    type: String
  },
  sub_title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  sub_category: {
    type: [String],
    required: true
  },
  text: {
    type: String
  },
  created_date: {
    type: Date
  },
  modified_date: {
    type: Date
  }
});

const Articles = module.exports = mongoose.model('articles', ArticlesSchema);

module.exports.getArticleByTitle = function (title, callback) {
  console.log("Fetching article by title: " + title);
  const query = {title: title};
  Articles.findOne(query, callback);
}

module.exports.getArticleByCategory = function (category, callback) {
  console.log("Fetching article by category: " + category);
  const query = {category: category};
  Articles.find(query, callback).sort({created_date: -1});
}
