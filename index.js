// Name -Inderpal Singh
// Student No. - 301166561
// Subject - COMP229 Sec007

const express = require('express');
// creating a instance object
const app = express();

// setting view engine to ejs view engine
app.set('view engine', 'ejs');

// using express's own static middleware for public files like images, pdf's etc
app.use(express.static('public'));

// listening port at 3000 and logging it to console
app.listen(3000, () => {
  console.log('Connected to Port 3000');
});

// all the routes to the pages of the websites
const indexRouter = require('./routes/indexRouter');
const aboutRouter = require('./routes/aboutRouter');
const projectsRouter = require('./routes/projectsRouter');
const servicesRouter = require('./routes/servicesRouter');
const contactRouter = require('./routes/contactRouter');

// using the app.use() middleware
app.use('/', indexRouter);
app.use(aboutRouter);
app.use(projectsRouter);
app.use(servicesRouter);
app.use(contactRouter);

// for any other url path that doesn't match the route will route to this 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});
