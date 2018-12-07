const express = require('express');
const app = express();
const Article = require('../models/article.js');
const Note = require('../models/note.js');

// CREATE
app.post('/', (req, res) => {
    Article.create(req.body).then( article => {
        // res.send(article);
        res.redirect(`/`);
    }).catch((err) => {
        console.log(err.message);
    });
});

// SHOW
app.get('/articles/:id', (req, res) => {
    Article.findById(req.params.id).then(article => {
        Note.find({ articleId : req.params.id}).then(note => {
            // res.send(note);
            res.render('article-show.hbs', { article: article, note: note })
        }).catch((err) => {
            console.log(err.message);
        });
    });
});

// DELETE
app.delete('/articles/:id', (req, res) => {
    Article.findOneAndDelete({ _id: req.params.id }).then(article => {
        res.redirect(`/`);
    }).catch((err) => {
        console.log(err.message);
    });
});

module.exports = app;