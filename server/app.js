require('./db/config');
const express = require('express'),
  path = require('path'),
  openRoutes = require('./routes/open'),
  passport = require('./middleware/authentication/'),
  cookieParser = require('cookie-parser'),
  userRouter = require('./routes/secure/users'),
  app = express();

//Middleware
app.use(express.json());

// Unauthenticated routes

app.use(openRoutes);

app.use(cookieParser());
//Dummy
app.get('/test', (req, res) => console.log('Test'));

app.use(
  passport.authenticate('jwt', {
    session: false
  })
);

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Any authentication middleware and related routing would be here.

app.use(userRouter);

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
