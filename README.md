# <img src="./client/src/Assets/logoBlue.png> WynIt Productivity Timer

## Introduction

Welcome to WynIt!
A timer with the intention of increasing producitivty towards completing tasks. The App functions as a Timer and a Scheduler to help users stay on task and accomplish goals.

## Features:

- Record Productivity sessions using the timer, and log them into the database for record
- Plan future Productivity sessions to schedule your time more effectively
- Review Productivity using the scheduler and graphical representations to see how you've spent your time

## Building Blocks

- The stack we used for this project it MERN:

  - MongoDB as the database to store data
  - Express for the servers
  - React for the front-end
  - Node.js as our JavaScript run-time

- Within our Database we had 3 models

  - Users: the account of the User of the application
  - Tasks: owned by a user, Tasks are goals set to accomplish by spending productive time towards them
  - Sessions: owned by Tasks, sessions are components of each Task that result in the completion of their owning Task (hopefully)

- We utilized the following Frameworks:

  - FullCalendar to build our scheduler and planner
    Docs: https://fullcalendar.io/docs/react

  - React-ChartJS-2 to create visual representation of the spent time
    Docs: https://www.chartjs.org/docs/latest/

  - SendGrid in order to send emails and to assist the reset password function
    Docs: https://sendgrid.com/docs/

  - MDBreact as the building blocks of the front-end
    Docs: https://mdbootstrap.com/docs/react/

- Back-end Routes allow for users to create accounts, to store data from study sessions, and to track Task progression. Please refer to the routes folder inside the server directory to review the utilized
  open and closed routes.

## Installation for local computer

    #Clone the Repo
    git clone

    #Run yarn to install the dependencies
    yarn install
    yarn && cd client && yarn

    #Start your server
    yarn dev will start up both your server-side and client-side servers
    yarn server && yarn client will run your server-side and client-side respectively

## Packages

    NOTE: the Development team used `yarn add packageNameHere` to install all packages

### Dependencies- Client Side

- `@fortawesome/fontawesome`
- `@fullcalendar/daygrid`
- `@fullcalendar/interaction`
- `@fullcalendar/react`
- `@fullcalendar/timegrid`
- `axios`
- `bootstrap`
- `bootstrap-css-only`
- `framer-motion`
- `mdbreact`
- `moment`
- `react`
- `react-bootstrap`
- `react-chartjs-2`
- `react-circle-countdown-timer`
- `react-dom`
- `react-router-dom`
- `react-scripts`
- `react-spring`
- `sweetalert`

### Dependencies- Server Side

- `@sendgrid/mail`
- `bcryptjs`
- `body-parser`
- `concurrently`
- `cookie-parser`
- `cookie-session`
- `cors`
- `express`
- `faker`
- `jsonwebtoken`
- `moment`
- `mongoose`
- `multer`
- `passport`
- `passport-jwt`
- `sendgrid`
- `validator`

## Meet the Team

This team of four Wyncoders went from having no coding experience to
building a full-stack web application. WynIt is the result of their
love for productivity, functionality and simplicity.

Ana Souza- https://github.com/Webkinz1690

Calvin Malagon- https://github.com/Cal9233

Rodrigo Poma- https://github.com/rodpoma

Sara Salazar- https://github.com/saritasalazar

## To deploy

NOTE: Heroku specifically runs npm start, so don't remove that from your package.json file.

- heroku create your-app-name
- heroku config

  - set MONGODB_URL=<insertYourAtlasDbUri>
  - set SENDGRID_API-KEY= refer to documentation for guide
  - set JWT_SECRET= can be anything
  - set FROM_EMAIL= whatever email you want to send from
  - set APP and APP_URL= url of your deployed website or both

- git push heroku master
