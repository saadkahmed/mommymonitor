'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

const APP_NAME = 'Mommy Monitor';

exports.sendMentorInfoEmail = functions.database
  .ref('/mentorrequests/{userid}')
  .onWrite((snapshot, context) => {
    const user = snapshot.after.val();
    //console.log(`exports.sendMentorInfoEmail: ${user.name}`);
    const { name, email, phone } = user;
    sendMentorInfoEmail(name, email, phone);
    return 0;
  });

// send mentor request submitted email.
function sendMentorInfoEmail(name, email, phone) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@mommymonior.com>`,
    to: 'liyaniama@gmail.com'
  };

  mailOptions.subject = `New Mentor Request from ${APP_NAME}`;
  mailOptions.text = `${name} has requested to be a mentor.

  Name: ${name}
  Email: ${email}
  Phone Number: ${phone}

  Thank you!
  Mommy Monitor App`;

  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log('New mentor notification sent');
  });
}

//get average stress levels
exports.avgStressLevels = functions.database
  .ref('/users/{userid}/Questions')
  .onWrite((snapshot, context) => {
    const data = snapshot.after.val();
    let avg = 0;
    let stdDev = 0;
    const stressLevels = Object.keys(data)
      .map(key => data[key])
      .filter(ele => ele.one !== undefined)
      .map(ele => ele.one);
    if (stressLevels.length > 0) {
      avg = (
        stressLevels.reduce((acc, val) => acc + val) / stressLevels.length
      ).toFixed(2);
      let variance =
        stressLevels
          .map(val => Math.pow(val - avg, 2))
          .reduce((acc, val) => acc + val) /
        (stressLevels.length - 1);
      stdDev = Math.sqrt(variance).toFixed(2);
    }
    return snapshot.after.ref.parent
      .child('Stats/')
      .update({ StressAverage: Number(avg), StressStdDev: Number(stdDev) });
  });

//get average sleep levels
exports.avgSleepLevels = functions.database
  .ref('/users/{userid}/Questions')
  .onWrite((snapshot, context) => {
    const data = snapshot.after.val();
    let avg = 0;
    let stdDev = 0;
    const sleepLevels = Object.keys(data)
      .map(key => data[key])
      .filter(ele => ele.three !== undefined)
      .map(ele => ele.three);
    if (sleepLevels.length > 0) {
      avg = (
        sleepLevels.reduce((acc, val) => acc + val) / sleepLevels.length
      ).toFixed(2);
      let variance =
        sleepLevels
          .map(val => Math.pow(val - avg, 2))
          .reduce((acc, val) => acc + val) /
        (sleepLevels.length - 1);
      stdDev = Math.sqrt(variance).toFixed(2);
    }
    return snapshot.after.ref.parent
      .child('Stats/')
      .update({ SleepAverage: Number(avg), SleepStdDev: Number(stdDev) });
  });
