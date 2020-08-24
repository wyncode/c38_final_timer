require('./db/config');

const express = require('express'),
  path = require('path'),
  openRoutes = require('./routes/open'),
  passport = require('./middleware/authentication/'),
  cookieParser = require('cookie-parser'),
  userRouter = require('./routes/secure/users'),
  taskRouter = require('./routes/secure/tasks'),
  sessionRouter = require('./routes/secure/sessions'),
  app = express();

//Middleware
app.use(express.json());

// Unauthenticated routes
app.use(openRoutes);
app.use(cookieParser());

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
app.use(
  passport.authenticate('jwt', {
    session: false
  })
);

// Any authentication middleware and related routing would be here.
app.use(userRouter);
app.use(taskRouter);
app.use(sessionRouter);

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
