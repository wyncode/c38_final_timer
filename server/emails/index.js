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
  <h1 class="sampleh1" >Welcome our Productivity App</h1>
  <div>We hope you find our app useful </div>
  <div>etc etc blah blah blah </div>
  `;
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Thanks for signing up!',
    text: `Hi ${name}! Welcome to your Productivity Timer.`,
    html: htmlEmail
  });
};

const sendUpdateEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: `${name}, here is your weekly update`,
    text: `Weekly update follows`
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
    subject: 'Password Reset.',
    html: exampleHTMLEmail
  });
};

module.exports = {
  sendWelcomeEmail,
  sendUpdateEmail,
  forgotPasswordEmail
};
