// The stuff to start it
const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars').create({
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
    defaultLayout: 'main',
    extname: 'hbs'
  });
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

//Controllers that are needed
const news = require('./controllers/news.js');
const articles = require('./controllers/articles.js');
const notes = require('./controllers/notes.js');

// middleware
app.engine('hbs', exphbs.engine);
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/xoxo-gossip-people', { useNewUrlParser: true });

//these access my controls
app.use(news);
app.use(articles);
app.use(notes);

//Listen for Port
app.listen(port, function () {
    console.log('App listening on port 3000!')
  });
  
    
module.exports = app;