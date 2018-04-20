const functions = require('firebase-functions');
const sendgrid = require('sendgrid');
const client = sendgrid("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");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
function parseBody(body) {
    var helper = sendgrid.mail;
    var fromEmail = new helper.Email(body.from);
    var toEmail = new helper.Email(body.to);
    var subject = body.subject;
    var content = new helper.Content('application/json', body.content);
    var mail = new helper.Mail(fromEmail, subject, toEmail, content);
    return mail.toJSON();
  }
    // const data = {
    // helper: sendgrid.mail,
    // fromEmail: new helper.Email("igorak4@hotmail.com"),
    // toEmail:new helper.Email("igor.leite@genialinvestimentos.com.br"),
    // subject: "subject",
    // content: new helper.Content('text/html', 'conteudo'),
    // mail = new helper.Mail(fromEmail, subject, toEmail, content)
    // }

  exports.httpEmail = functions.https.onRequest((req, res) => {
    return Promise.resolve()
      .then(() => {
        if (req.method !== 'POST') {
          const error = new Error('Only POST requests are accepted');
          error.code = 405;
          throw error;
        }
  
  
        const request = client.emptyRequest({
          method: 'POST',
          path: '/v3/mail/send',
          body: parseBody(req.body)
        });
  
        return client.API(request)
  
      })
      .then((response) => {
        if (response.body) {
            res.send(response.body);
          } else {
            res.end();
          }
          return null;
      })
  
      .catch((err) => {
        console.error(err);
        return Promise.reject(err);
      });
  
  })