import Image from "next/image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useEffect } from "react";
import MetaEnglish from "../components/meta-english";
import db from "../utils/meta-tags/meta-tags.json";

export async function getStaticProps() {
  return {
    props: { db },
  };
}

export default function Work({ db }) {
  useEffect(() => {
    function setHeight() {
      const screenWidth = window.innerWidth;
      const divHeight = screenWidth * 0.2;
      const theDiv1 = document.querySelector(".wrap-work");

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
      <div className="row">
        {db
          .filter((item) => item.id === "work")
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
        <div className="col-6">
          <div className="wrap-work">
            <Image
              fill={true}
              src="/images/edgar-suit.png"
              id="edgar-work"
              alt="edgar lindo"
              title="Dark gray suit"
              // width={640}
              // height={360}
              sizes="100vw"
            />{" "}
          </div>
        </div>
        <div className="col-lg-6">
          <p className="work-paragraph">
            I work as an independent industrial sales engineer. Much of my work
            is together with a range small to mid size industrial manufacturers
            for hydraulic, pneumatic, electrical, and mechanical products used
            in different industrial machinery applications. Usually large
            companies say they have full coverage of different markets, which
            offers me an opportunity to introduce new products to take market
            share with my partners. <br /> <br />
            With a solid background in Fluid Power I have a good base of what is
            really required in the industrial manufacturing world. Many products
            fall outside of the range of Fluid Power, but still directly or
            indirectly related to the very same industrial application seen in
            hydraulics. <br /> <br />
            Products like servo motors, drives, linear bearings, lubrication
            systems, sensors, gear boxes, and too many other to mention are
            often handle by companies and engineers who are coming from the old
            Fluid Power world. This is the reason why Fluid Power is now often
            called / or evolving to &quot;Mechatronics&quot;.
          </p>{" "}
        </div>

        <Col md={6} className="first-text-about"></Col>
      </div>
      <Row className="row-2-index align-items-end">
        <Col className="test">
          <h2 className="second-text-index">
            {" "}
            How do you learn about so many industrial products?{" "}
          </h2>{" "}
          <p className="third-text-index">
            Depending on what type of company you are working for, many people
            get used to work with just one single product. In how many
            companies, or how many people have the opportunity to work with
            entire machine system for all sort of different machines? <br />{" "}
            <br />
            When I arrived in Michigan I was hired to work for one of the area
            largest industrial distributors, which handle products in
            hydraulics, pneumatics, electrical, mechanical, and lubrication
            products, but how can a single company be able to handle such
            different products all under one roof? Part of the answer was the
            hiring of application engineers from different manufacturers, from
            different fields, all working together and training sales people on
            different products. <br /> <br />
            In some companies you required to learn the engineering of the
            products you promote, and when you have such a large range of
            product and fields, then you acquire more knowledge and you feel
            more comfortable and confident on learning about new products.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="row-1-index">
          <h2 className="second-text-index"> Opportunities</h2>
          <p>
            <strong> For industrial manufacturers</strong> <br />
            If you are a manufacturer of industrial products that is used for
            industrial machinery, and you are looking to expand markets in north
            or south America, then I would be interested in discussing a
            partnership for mutual benefits. <br /> <br />
            <strong> For industrial distributors</strong> <br />
            Depending on your location I could offer you a verity of industrial
            products that could be an alternative for your local large brand
            names. For more details are products open for distribution you could
            visit{" "}
            <a href="https://www.tu.biz/" target="blank">
              {" "}
              <strong>TU </strong>
            </a>
            . <br /> <br />
            <strong> For End User</strong> <br />
            If you are a purchasing agent, maintenance person, or engineer
            working in an industrial plant needing of some specific items, then
            maybe I would be able to find some alternative solutions for your
            needs depending on the products. If it is a product falling into
            distribution category I could let you know about our partner in your
            area, and if it is a product outside the distribution line then
            maybe I could find an alternative product.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="row-2-index align-items-end">
          <h2 className="second-text-index">
            {" "}
            Domestic and international business
          </h2>
          <p>
            If you are calling from outside the United States there is no
            problem on quoting products put in the United States, or location
            such as Miami or on the border to Mexico. We can also quote
            international transportation but if you have your own carrier that
            would be better if you can work with your own transportation
            company. <br /> <br />
            If you are located in the United States I can always quote you
            products, or point to our nearest partner in your area.
            <br /> <br />
          </p>
        </Col>
      </Row>
    </div>
  );
}
