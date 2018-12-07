const express = require('express');
const app = express();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('e315d9e20b484824af95e0b46782b0bd');
const Article = require('../models/article.js');

// HOME
app.get('/', (req, res) => {
    Article.find().then(article => {
        // Uses NewsAPI to gather news articles
        newsapi.v2.topHeadlines({
            sources: 'entertainment-weekly'
        }).then(news => {
            res.render('home', { article: article, news: news.articles });
        }).catch((err) => {
            console.log(err.message);
        });
    });
});

//NEW
app.get('/new/:index', (req, res) => {
    Article.find().then(article => {
        newsapi.v2.topHeadlines({
            sources: 'entertainment-weekly'
        }).then(news => {
            res.render('article-new.hbs', {news: news.articles[req.params.index]})
        }).catch((err) => {
            console.log(err.message);
        });
    });
});

module.exports = app;