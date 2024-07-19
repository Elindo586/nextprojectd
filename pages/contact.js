import React from "react";

import ContactForm from "../components/form-contact";

import MetaEnglish from "../components/meta-english";
import db from "../utils/meta-tags/meta-tags.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

const Contact = ({ db }) => {
  return (
    <div className="main-form-div">
      <div>
        {db
          .filter((item) => item.id === "contact")
          .map((item) => {
            return (
              <MetaEnglish
                key={item.id}
                metaTitle={item.metaTitle}
                metaDescription={item.metaDescription}
                metaKeywords={item.metaKeywords}
                ogTitle={item.ogTitle}
                ogDescription={item.ogDescription}
                ogURL={item.ogURL}
                ogImage={item.ogImage}
                twitterTitle={item.twitterTitle}
                twitterDescription={item.twitterDescription}
                twitterImage={item.twitterImage}
              />
            );
          })}
      </div>
      <div className="main-contact-div">
        <div className="row">
          <ContactForm />
          <br />
        </div>
      </div>
    </div>
  );
};
export default Contact;
