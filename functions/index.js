const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const nodemailer = require('nodemailer');
const email = encodeURIComponent(functions.config().gmail.email);
const password = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${email}:${password}@smtp.gmail.com`);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.sendContactMessage = functions.database.ref('/registros/{key}').onWrite(event =>{
  const snapshot = event.database
  if(snapshot.previous.val() || !snapshot.val().name){
    return;
  }
  const val = snapshot.val();

  const mailOptions ={
    to: 'igorak4@hotmail.com',
    subject: 'Oi',
    text: `Oi oi oi oi`
  };
  return mailTransport.sendMail(mailOptions).then(() =>{
    return console.log('mail sent');
  })
})