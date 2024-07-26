import Image from "next/image";
import { useEffect } from "react";

import MetaEnglish from "../components/meta-english";
import db from "../utils/meta-tags/meta-tags.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

export default function About({ db }) {
  useEffect(() => {
    function setHeight() {
      const screenWidth = window.innerWidth;
      const divHeight = screenWidth * 0.2;
      const theDiv1 = document.querySelector(".wrap-about");

      if (screenWidth <= 991) {
        theDiv1.style.height = screenWidth * 0.3 + "px";
      } else {
        theDiv1.style.height = `${divHeight}px`;
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
    <div className="main-about">
      <div>
        {db
          .filter((item) => item.id === "about")
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

      <div className=" row row-1-index">
        <div className=" col-6 first-text-about">
          <div className="wrap-about">
            <Image
              fill={true}
              src="/images/me2.png"
              id="edgar2"
              alt="edgar lindo"
              title="Washington D.C. trip"
              // width={640}
              // height={360}
              sizes="100vw"
            />{" "}
          </div>
        </div>
        <div className="col-lg-6">
          <p className="about-paragraph">
            I was born in Nicaragua many moons ago, and came to the United
            States in the middle of the winter in January 1993. It was more than
            interesting to go from tropical weather to a very cold St. James,
            Minnesota, in which place for first time ever I saw snow, got my
            first one week long cold, and first time (and maybe last time) I saw
            somebody wearing wooden snowshoes walking right outside my window,
            and people driving cars on top of a frozen lake. I have tons of
            good, and some not so good memories of good old St. James.. <br />{" "}
            <br />
            Back in those days St. James was a town of bout 3,000 people so I
            was told. This was the place where I started to learn and speak
            English in the everyday basis. Classes were not that hard, but I had
            to translate everything to get the right answers. One and a half
            years later I graduated from high school and by then I spoke decent
            English.
          </p>
        </div>
      </div>
      <div className=" row row-2-index align-items-end">
        <div className=" col test">
          <h2 className="second-text-index"> Granite Falls, Minnesota </h2>{" "}
          <p className="third-text-index">
            I was lucky enough to have some sort of direction of where to go
            after high school. As new-er immigrant I did not have much idea of
            how things works. I knew I wanted to go college to study something,
            and that something needed to be more related to math, because I do
            like math after all.
            <br /> <br />
            During muy senior year at St. James I had to opportunity to meet a
            college head hunger from Granite Falls. She was presenting all of
            the educational programs the school offers, and Fluid Power took my
            interest. <br /> <br />
            <strong>Why Fluid Power?</strong>.. Fluid Power had some attraction
            due to the creation of engineering circuits, either electrical,
            hydraulic, or pneumatic circuits, and everything coming together for
            machine automation. I was excited to find such a field that requires
            some math skills, and an industrial field to deal with machinery and
            American manufacturing.
          </p>
        </div>
      </div>

      <div className=" row row-1-index">
        <h2 className="second-text-index"> After Granite Falls</h2>
        <p>
          {" "}
          After graduating from college (and surprise to know I never missed a
          day of class) I quickly found a job as plant maintenance, but then
          quickly changed jobs to sales engineer for at the time a German
          hydraulic filter manufacturer called INTERNORMEN-Filter, which years
          later become part of group of Eaton-Vickers in the United States.{" "}
          <br /> <br />
          INTERNORMEN was the place where I started to understand the industrial
          manufacturing business, dealing with distributors, with End Users, and
          working in all sort of different industrial machineries for all sort
          of industries, some of the industries that come to mind are for
          example steel mills, paper mills, agriculture, auto industry, mining,
          forestry, plastic, among others.
        </p>
      </div>

      <div className="row">
        <div className="row-2-index align-items-end">
          <h2 className="second-text-index"> Today</h2>
          <p>
            {" "}
            Today I live in the Detroit metro area in the state of Michigan,
            USA. Sure I have also lived in a few other states before Michigan,
            but I am skipping all that in here. <br /> <br />I have a beautiful
            smart lady by my side, and two awesome smart kids with her. Today
            everything I do is with the thinking on how to better serve my
            family.
          </p>
        </div>
      </div>
    </div>
  );
}
