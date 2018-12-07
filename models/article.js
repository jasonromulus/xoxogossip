const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const ArticleSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    description: {type: String, required: true},
    url: {type: String, required: true}
});

ArticleSchema.plugin(timestamps);
Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;