require('./db/config');

const express = require('express'),
  path = require('path'),
  openRoutes = require('./routes/open'),
  passport = require('./middleware/authentication/'),
  cookieParser = require('cookie-parser'),
  userRouter = require('./routes/secure/users'),
  taskRouter = require('./routes/secure/tasks'),
  sessionRouter = require('./routes/secure/sessions'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  cookieSession = require('cookie-session'),
  app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(
  cookieSession({
    name: 'Session',
    keys: ['key1', 'key2']
  })
);

const isLoggenIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

app.use(passport.initialize());
app.use(passport.session());

//Middleware
app.use(express.json());

app.get('/', (req, res) => res.send('You are not logged in'));
app.get('/failed', (req, res) => res.send('You have failed to log in!'));
app.get('/good', isLoggenIn, (req, res) =>
  res.send(`Welcome! ${req.user.displayName}!`)
);

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
  (req, res) => console.log('In GET')
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

app.get('/logout', (req, res) => {
  req.session = null;
  req.logout;
  res.redirect('/');
});

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
