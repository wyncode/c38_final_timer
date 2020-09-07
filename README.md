# <img src="./client/src/Assets/logoBlue.png> WynIt Productivity Timer

## Introduction

Welcome to WynIt!
A productivity timer with the intention of increasing producitivty towards completing tasks.
The App functions as a Timer and a scheduler to help users stay on task and efficiently accomplish goals
they set out to accomplish.

Feature:

- Record Productivity sessions using the timer, and log them into the database for record
- Plan future productivity sessions to schedule your time more effectively
- Review productivity using the scheduler and graphical representations to see how you've spent your time

## Building Blocks

- The stack we used for this project it MERN.

  - MongoDB as the database to store data
  - Express for the servers
  - React for the front-end
  - Node.js as our JavaScript run-time

- Within our Database we had 3 models

  - Users: the account of the User of the application
  - Tasks: goals set to accomplish by spending productive time towards them
  - Sessions: components of each Task that result in the completion of their owning Task (hopefully)

- We utilized the following Frameworks:

  - FullCalendar to build our scheduler and planner
    Docs: https://fullcalendar.io/docs/react

  - React-ChartJS-2 to create visual representation of the spent time
    Docs: https://www.chartjs.org/docs/latest/

  - SendGrid in order to send emails and to assist the reset password function
    Docs: https://sendgrid.com/docs/

  - MDBreact as the building blocks of the front-end
    Docs: https://mdbootstrap.com/docs/react/

- Back-end Routes allow for users to create accounts, to store data from study sessions, and to track Task progression. Please refer to the routes folder inside the server directory to review the utilized open and closed routes.

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
- `ypassport`
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
- heroku config:set MONGODB_URL=<insertYourAtlasDbUri>
- git push heroku master

current Deployment of the website can be found here: https://secret-retreat-95639.herokuapp.com/
