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

  const name = req.body.contact;
  const email = req.body.email;
  const title = req.body.id;
  const quote = req.body.quote;

  const textArray = quote;
  const contents = textArray
    .map(
      ({ QuoteN, Part, PartDesc, Qty, Price, ExtPrice, LeadTime }) =>
        `Quote Number: ${QuoteN} \nQyt ${Qty}, Part: ${Part}, Descrition: ${PartDesc}, Price: ${Price}, Ext Price: ${ExtPrice}, Lead Time: ${LeadTime}\n \n`
    )
    .join("\n");

  const text = `hola ${name},\n\nTodo bien con su cotizacion? Necesita algo mas? \n \n${contents} \n \nSaludos, \n \nEdgar \n`;

  console.log(text);

  const mailData = {
    from: "info@tu.biz",
    to: email,
    subject: `cotizaciones para ${name} | ${title}`,
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
