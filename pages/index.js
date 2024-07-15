import Image from "next/image";
import { useEffect } from "react";

import MetaEnglish from "../components/meta-english";
import db from "../utils/meta-tags/meta-tags.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

export default function Home({ db }) {
  useEffect(() => {
    function setHeight() {
      const screenWidth = window.innerWidth;
      const divHeight = screenWidth * 0.2;
      const theDiv1 = document.querySelector(".wrap-index");

      if (screenWidth <= 991) {
        theDiv1.style.height = screenWidth * 0.25 + "px";
      } else if (screenWidth > 991 && screenWidth <= 1130) {
        theDiv1.style.height = `${divHeight}px`;
      } else if (screenWidth > 1130) {
        theDiv1.style.height = `250px`;
      }
    }

    // Call setHeight initially
    setHeight();

    // Add a listener to resize event
    window.addEventListener("resize", setHeight);

    // Cleanup function to remove the resize event listener
    return () => {
      window.removeEventListener("resize", setHeight);
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div className="main-index">
      <div className="row">
        {db
          .filter((item) => item.id === "index")
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

      <div className="row row-1-index">
        <div className="col-3">
          <div className="wrap-index">
            <Image
              fill={true}
              src="/images/edgar.png"
              id="edgar"
              alt="edgar lindo"
              title="In my house."
              sizes="100vw"
              // width={250}
              // height={250}
            />{" "}
          </div>
        </div>
        <div className=" col-lg-9 first-text-index">
          Hello there!, I am Edgar Lindo. This space is created to let people
          know a bit more about myself, my interests, and my work. <br /> <br />
          Through the years I have met thousands of people working in the
          industrial machinery business, and always I seem to find people asking
          questions such as, where are you from? how do you speak Spanish? how
          did you learn English? How is it that you know this product? Where do
          you live now?... and so on..
          <br /> <br />
          Rather then explain myself every time I enter a conversation about my
          background, my interests, or my current project, maybe is better to
          write things in a public space and have fun with it.
          <br /> <br />
          Welcome to my cloud house! <br />
        </div>
      </div>
      <div className=" row row-2-index align-items-end">
        <div className=" col test">
          <h2 className="second-text-index"> Who is Edgar Lindo in short? </h2>{" "}
          <p className="third-text-index">
            I am an industrial automation sales guy with experience in
            hydraulics, pneumatics, electrical, and mechanical industrial
            products. I have experience in industrial markets from north,
            central, and south America working in wide range of industrial
            machinery applications with End Users, distributors, and machine
            builders (OEMs). <br /> <br />I am by need/fun a programmer, a
            website builder. Learning to code later in life was a surprise that
            I enjoy, and I keep on learning and developing for work reasons, and
            likely for fun as well. <br /> <br />I am a family guy, even when I
            am always busy is important to have time with your family specially
            for the lady and growing kids.
            <br />
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
