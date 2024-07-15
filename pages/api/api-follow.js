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
  const company = req.body.company;
  const nameFirst = req.body.upper;
  const email = req.body.email;
  const id = req.body.id;
  // const quote = req.body.quote;

  // const textArray = quote;
  // const contents = textArray
  //   .map(
  //     ({ QuoteN, ItemCode, ItemName, Qty, Price, ExtPrice, LeadTime }) =>
  //       `Quote Number: ${QuoteN} \nQyt ${Qty}, Part: ${ItemCode}, Descrition: ${ItemName}, Price: ${Price}, Ext Price: ${ExtPrice}, Lead Time: ${LeadTime}\n \n`
  //   )
  //   .join("\n");

  const mailData = {
    from: { name: "Edgar Lindo", address: process.env.EMAIL2 },
    to: email,
    subject: `Seguimiento para ${nameFull} | ${company}`,
    text: ``,
    html: `<div> <div> Hola ${nameFirst},</div> <br/>
           <div> ¿Cómo va todo? </div>
          <div> Cómo le podríamos hacer para incrementar algunos negocios? </div><br />

        <div> Le comento de productos en STOCK.</div> <br />
        
        <div><u>Bombas de pistones y repuestos:</u></div>
        <div>Intercambios con Vickers en general, y Rexroth A10V y A4V</div> <br />

        <div> <u>Bombas de Paletas y repuetos:</u></div>
        <div>Intercambios con Vickers y Denison.</div> <br />

        <div><u>Bombas de engranajes:</u></div>
        <div> Intercambios con bombas de Volteo y bomba de aluminio.</div> <br />

        <div><u>Motores orbitales tipo Charlynn:</u></div>
        <div>Pueden ser intercambiables con muchas marcas.</div> <br />

        <div><u>Válvulas direccionales:</u></div>
        <div>Tamaños D03 y D05.</div> <br />

        <div><u>Válvulas de control de presión:</u></div> 
        <div> Intercambios con muchas marcas. <div/><br />

        <div>Tambien manejamos:</div>
        <div  ><u style="background-color: #FFFF00">Guías Lineales:</u></div>
        <div>Intercambios con todas marcas.</div>
        <div ><u style="background-color: #FFFF00">Husillos de bolas:</u></div>
        <div>Intercambios con todas marcas.</div> <br />
        
        <div>
          
          Para mas información puede visitar nuestro sitio:
          <a href="https://www.tu.biz/castellano/productos">
            
            www.tu.biz/castellano/productos
          </a>
        </div> <br />
        <div> Saludos,</div> <br />
        <div> Edgar Lindo</div> `,
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
