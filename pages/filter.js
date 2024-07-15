import React from "react";
import quotes from "../thejsons/address.json";

export default function ContactForm() {
  const handleSubmit = async () => {
    const d = new Date();
    const month = d.getMonth();
    const days = d.getDate();
    const year = d.getFullYear();
    const hour = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();

    var timesRun = 0;
    var arrayIndex = 0;

    console.log(
      `We are moving on ${month}/${days}/${year} at ${hour}:${minutes}:${seconds}s`
    );

    var myIntervals = setInterval(async function () {
      const currentQuote = quotes[arrayIndex++];
      const fName = currentQuote.Contact.split(" ")[0].toLowerCase();
      const upper = fName.charAt(0).toUpperCase() + fName.slice(1);

      const data = {
        contact: currentQuote.Contact,
        email: currentQuote.Email,
        quote: currentQuote.quote,
        id: currentQuote.id,
        upper: upper,
      };

      console.log(data);

      const response = await fetch("/api/quote-email", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let res2;

      try {
        res2 = await response.json();
      } catch (err) {
        console.log("Error parsing", err);
      }

      const resMessage = res2.message;
      console.log(resMessage);

      const d = new Date();
      const month = d.getMonth();
      const days = d.getDate();
      const year = d.getFullYear();
      const hour = d.getHours();
      const minutes = d.getMinutes();
      const seconds = d.getSeconds();
      timesRun += 1;
      console.log(
        `we ran ${timesRun} times at ${month}/${days}/${year} at ${hour}:${minutes}:${seconds}s`
      );
      console.log(arrayIndex, quotes.length);

      if (arrayIndex === quotes.length) {
        console.log("We are done!");

        clearInterval(myIntervals);
        arrayIndex = 0;
      }
    }, 10 * 1000);
  };

  return (
    <div>
      <div className="col-md-12 main-contact-form-div">
        <h4 className="get-in-touch">Get in touch.</h4>
        <br />
        <br />
        <button className="btn btn-primary form-button" onClick={handleSubmit}>
          click me
        </button>
      </div>
    </div>
  );
}
