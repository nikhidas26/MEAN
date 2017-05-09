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
  console.log("Fetching article by title");
  const query = {title: title};
  console.log(query);
  Articles.findOne(query, callback);
}
