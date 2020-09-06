# WynIt Productivity Timer

Welcome to WynIt!
A productivity timer with the intention of increasing producitivty towards completing tasks.
The App offers the ability to record sessions of work time and plan future ones.
The App also allows you to see how you have spent your time compared to other tasks you have recorded.

## Setup

- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`
- `cp .env.sample .env`

## Available build commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.

## To deploy

NOTE: Heroku specifically runs `npm start`, so don't remove that from your package.json file.

- `heroku create your-app-name`
- `heroku config:set MONGODB_URL=<insertYourAtlasDbUri>`
- `git push heroku master`

## Packages Required

NOTE: The production team of this application used yarn to add all packages

Documenation for:
-MDBreact: https://mdbootstrap.com/docs/react/
-FullCalendar: https://fullcalendar.io/docs/react
-ChartJS: https://www.chartjs.org/docs/latest/
-SendGrid: https://sendgrid.com/docs/

### Packages- Client Side

- `yarn add @fortawesome/fontawesome`
- `yarn add @fullcalendar/daygrid`
- `yarn add @fullcalendar/interaction`
- `yarn add @fullcalendar/react`
- `yarn add @fullcalendar/timegrid`
- `yarn add axios`
- `yarn add bootstrap`
- `yarn add bootstrap-css-only`
- `yarn add framer-motion`
- `yarn add mdbreact`
- `yarn add moment`
- `yarn add react`
- `yarn add react-bootstrap`
- `yarn add react-chartjs-2`
- `yarn add react-circle-countdown-timer`
- `yarn add react-dom`
- `yarn add react-router-dom`
- `yarn add react-scripts`
- `yarn add react-spring`
- `yarn add sweetalert`

### Packages- Server Side

- `yarn add @sendgrid/mail`
- `yarn add bcryptjs`
- `yarn add body-parser`
- `yarn add concurrently`
- `yarn add cookie-parser`
- `yarn add cookie-session`
- `yarn add cors`
- `yarn add express`
- `yarn add faker`
- `yarn add jsonwebtoken`
- `yarn add moment`
- `yarn add mongoose`
- `yarn add multer`
- `yarn add passport`
- `yarn add passport-jwt`
- `yarn add sendgrid`
- `yarn add validator`
