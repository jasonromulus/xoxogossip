// The stuff to start it
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const exphbs = require('express-handlebars').create({
  defaultLayout: 'main',
  extname: 'hbs'
});

//Mongoose Connections
const mongoose = require('mongoose');

//Handlebars stuff
app.engine('hbs', exphbs.engine);
app.set('view engine', 'hbs');

// middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//connect mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/xoxo-gossip-people', { useNewUrlParser: true });

//Controllers that are needed
const news = require('./controllers/news.js');
const articles = require('./controllers/articles.js');
const notes = require('./controllers/notes.js');

//these access my controls
app.use(news);
app.use(articles);
app.use(notes);

//Listen for Port
app.listen(port, function () {
    console.log('App listening on port 3000!')
  });
  
    
module.exports = app;