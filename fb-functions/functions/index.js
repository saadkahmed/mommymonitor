'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  },
});

const APP_NAME = 'Mommy Monitor';

exports.sendMentorInfoEmail = functions.database.ref('/mentorrequests/{userid}').onWrite((snapshot, context) => {
  const user = snapshot.after.val();
  console.log(`exports.sendMentorInfoEmail: ${user.name}`);
  const name = user.name;
  const email = user.email;
  const phone = user.phone;
  console.log('sending mentor info email');
  sendMentorInfoEmail(name, email, phone);
  console.log('sent mentor info email');

  return 0;
});

// send mentor request submitted email.
function sendMentorInfoEmail(name, email, phone) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@mommymonior.com>`,
    to: 'liyaniama@gmail.com',
  };

  mailOptions.subject = `New Mentor Request from ${APP_NAME}`;
  mailOptions.text =
  `${name} has requested to be a mentor.

  Name: ${name}
  Email: ${email}
  Phone Number: ${phone}

  Thank you!
  Mommy Monitor App`;

  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log('New mentor notification sent');
  });
}
