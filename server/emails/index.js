const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const htmlEmail = `
  <style>
  .sampleH1{
    color: blue;
  }
  </style>
  <h1 class="sampleh1" >Welcome to WynIt!</h1>
  <div>We hope you find our app useful to increase your productivity!</div>
  `;
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'WynIt - Thanks for signing up!',
    text: `Hi ${name}! Welcome to WynIt! We hope you are prepared to become more productive every day!`,
    html: htmlEmail
  });
};

const forgotPasswordEmail = (email, token) => {
  const exampleHTMLEmail = `
  <div>Click the link below to reset your password</div>
  <a target="_blank" rel="noopener noreferrer" href="${process.env.APP_URL}/api/password/${token}">Reset Password</a>
  `;

  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'WynIt - Password Reset.',
    text: `Hi ${name}! Please click the link below to reset your password.`,

    html: exampleHTMLEmail
  });
};

module.exports = {
  sendWelcomeEmail,
  forgotPasswordEmail
};
