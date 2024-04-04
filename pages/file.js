import React from "react";
import quotes from "../thejsons/test-quote.json";

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
      const data = {
        contact: currentQuote.Contact,
        email: currentQuote.Email,
        quote: currentQuote.quote,
        id: currentQuote.id,
      };

      console.log(data);

      await fetch("/api/quote-email", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log("Response received");

          if (res.status === 200) {
            console.log("Response succeeded!");
          }
        })
        .catch((error) => {
          console.log("Error", error);
        });

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
