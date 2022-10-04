export default async function stuff(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EPASSWORD,
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: "info@tu.biz",
    to: "info@tu.biz",
    subject: "contact form",
    text:
      req.body.company +
      " | Sent from: " +
      req.body.firstName +
      req.body.email +
      req.body.country +
      req.body.notes,
    html: `<div>${req.body.company}</div><div>Sent from: ${req.body.email}</div><div> ${req.body.country}</div> <div> ${req.body.notes}`,
  };

  await new Promise((req, res) => {
    transporter.sendMail(mailData, function (err, info) {
      // if (err) console.log(err);
      // // else console.log(info);
    });
  });
}
