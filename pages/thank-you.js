import React from "react";

import Head from "next/head";
import Link from "next/link";

const Thanks = () => {
  return (
    <div>
      <div>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/images/el-favicon.png"
          />
          <meta
            name="facebook-domain-verification"
            content="fzctnjbrtlybvytmamk8glkng9af7p"
          />{" "}
          <title> Edgar Lindo | Thank you</title>
          <meta name="description" content="Thank you page" />
          <meta name="keywords" content="thank, you" />
          <meta name="author" content="Edgar Lindo" />
        </Head>
      </div>
      <div className="row" lang="en">
        <div className="col-md-12">
          <br />
          <h6 className="thank-you-text"> Thank you! </h6>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="green"
          className="bi bi-check-lg"
          viewBox="0 0 16 16"
        >
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
        </svg>

        <div className="col-md-12">
          <h6 className="thank-you-text">
            We will be in contact.
            <Link href="/"> Go back to main page. </Link>
          </h6>{" "}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
export default Thanks;
