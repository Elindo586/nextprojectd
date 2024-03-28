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

  const textArray = Array.isArray(req.body.chatToServer)
    ? req.body.chatToServer
    : [];
  const contents = textArray
    .map(({ role, content }) => `role: ${role}${content}\n `)
    .join("\n");

  console.log(contents);

  const mailData = {
    from: "info@tu.biz",
    to: "info@tu.biz",
    subject: "Chat History",
    text: contents,
    html: `<div><pre>${contents}</pre></div>`,
  };

  await new Promise((req, res) => {
    transporter.sendMail(mailData, function (err, info) {
      // if (err) console.log(err);
      // // else console.log(info);
    });
  });
}
