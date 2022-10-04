import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sending");

    let data = {
      firstName,
      company,
      email,
      country,
      notes,
    };
    router.replace("/thankyou");

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");

      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setFirstName("");
        setCompany("");
        setEmail("");
        setCountry("");
        setNotes("");
      }
    });
  };

  return (
    <div className="col-md-6 bg-light">
      <h4 className="get-in-touch">Get in touch with us.</h4>
      <form className="contact-us-form">
        <input
          type="hidden"
          name="_next"
          // value="http://www.tu.biz/thankyou.html"
        />

        <label htmlFor="firstname" className="form-label">
          * Name:{" "}
        </label>
        <input
          className="form-control"
          type="text"
          id="firstname"
          name="firstname"
          placeholder=" Your Name"
          required=""
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <br />

        <label htmlFor="company" className="form-label">
          {" "}
          Company:{" "}
        </label>
        <input
          className="form-control"
          type="text"
          id="company"
          name="company"
          placeholder="Your company"
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />
        <br />

        <label htmlFor="email" className="form-label">
          {" "}
          * E-mail:{" "}
        </label>
        <input
          className="form-control"
          type="email"
          id="email"
          name="email"
          placeholder="Your E-mail"
          required=""
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />

        <label htmlFor="country" className="form-label">
          {" "}
          * Country:{" "}
        </label>
        <input
          className="form-control"
          type="text"
          id="country"
          name="country"
          placeholder="Your Country"
          required=""
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <br />

        <label htmlFor="notes"> * Your Message: </label>

        <textarea
          className="form-control"
          type="text"
          id="notes"
          name="notes"
          placeholder="Include any additional information"
          rows="5"
          required=""
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        ></textarea>
        <br />

        <input
          className="contact-your-message-input"
          type="text"
          name="_honey"
        />
        <br />

        <input
          type="submit"
          name="submit"
          value="submit"
          className="btn btn-primary"
          onClick={(e) => {
            handleSubmit(e);
          }}
        />
      </form>
    </div>
  );
}
