const nodemailer = require("nodemailer");
const SMTPConnection = require("nodemailer/lib/smtp-connection");
let connection = new SMTPConnection(587);
// connection.connect(callback);
const { EMAIL, PASSWORD } = process.env;

module.exports = {
  email: async (req, res) => {
    const { name, message, email, title, image } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        // host: "smtp-mail.outlook.com",
        // secureConnection: false, // TLS requires secureConnection to be false
        // port: connection, // port for secure SMTP
        // tls: {
        //   ciphers: "SSLv3"
        // },
        service: 'gmail',
        auth: {
          user: EMAIL,
          pass: PASSWORD
        }
      });
      console.log(req.body, EMAIL)

      const info = await transporter.sendMail(
        {
          from: `'${name}' <${email}>`,
          to: EMAIL,
          subject: title,
          text: message,
          html: `<div>${message}</div>
                       <img src='cid:unique@nodemailer.com'/>`,
          attachments: [
            {
              filename: "license.txt",
              path:
                "https://raw.github.com/nodemailer/nodemailer/master/LICENSE"
            },
            {
              cid: "unique@nodemailer.com",
              path: image
            }
          ]
        },
        (err, res) => {
          if (err) {
            console.log("err", err);
          } else {
            console.log("res", res);
            res.status(200).send(info);
          }
        }
      );
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
};
