export default async function stuff(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      user: process.env.EMAIL2,
      pass: process.env.EPASSWORD2,
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

  const nameFull = req.body.contact;
  const nameFirst = req.body.upper;
  const email = req.body.email;
  const title = req.body.id;
  const quote = req.body.quote;

  const textArray = quote;
  const contents = textArray
    .map(
      ({ QuoteN, ItemCode, ItemName, Qty, Price, ExtPrice, LeadTime }) =>
        `Quote Number: ${QuoteN} \nQyt ${Qty}, Part: ${ItemCode}, Descrition: ${ItemName}, Price: ${Price}, Ext Price: ${ExtPrice}, Lead Time: ${LeadTime}\n \n`
    )
    .join("\n");

  const text = `Hola ${nameFirst},\n\nTodo bien con su cotizacion? Necesita algo mas? \n \n${contents} \n \nSaludos, \n \nEdgar \n`;

  console.log(text);

  const mailData = {
    from: { name: "Edgar Lindo", address: process.env.EMAIL2 },
    to: email,
    subject: `cotizaciones para ${nameFull} | ${title}`,
    text: `${text}`,
    html: `<div><pre>${text}</pre></div>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("email sent");
        resolve(info);
      }
    });
    return res.status(200).json({ message: "Email sent!" });
  });
}
