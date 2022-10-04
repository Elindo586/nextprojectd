import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Coding() {
  return (
    <div className="main-about">
      <div>
        <Head>
          <title>Edgar Lindo</title>
          <meta name="description" content="This is Edgar Lindo" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>

      <Container>
        <Row className="row-1-index">
          <Col md={6} className="first-text-about">
            <strong> How did I become a programmer?</strong> <br /> <br />
            Why not call myself a programmer after all? I had exposure to HTML
            and CSS for a long time while being a website owner, but I did not
            get a real interest in coding until mid 2021 when I wanted to create
            this{" "}
            <a href="https://www.tu.biz/interactive">
              interactive technical animation{" "}
            </a>
            . During those days I knew absolutely nothing about JavaScript, and
            my old very popular Content Manage System (CMS) was not a tool to
            create a very specific line of code to do what I was interested in
            doing. <br /> <br />
            If you know anything about coding, you would know that HTML and CSS
            are only the scratches on the surface for coding, if you really want
            to learn to code and understand software engineering, then you must
            pick languages such as Python, Javascript, among other languages
            depending on what you are working.
          </Col>
          <Col md={6}>
            <div className="wrap-about">
              <Image
                src="/images/edgar-coding.png"
                id="edgar2"
                alt="edgar lindo"
                width={960}
                height={540}
              />{" "}
            </div>
          </Col>
        </Row>
        <Row className="row-2-index align-items-end">
          <Col className="test">
            <h2 className="second-text-index">
              {" "}
              After my first animation project{" "}
            </h2>{" "}
            <p className="third-text-index">
              It took me about 2 weeks to finish a simple animation. I already
              had the vector graphics (drawings) converted into the SVG files
              that I wanted to animate, but just needed to find a way on how to
              do it. Long story short I found some help and learn the very
              basics on how to write a JavaScript function that would do what I
              wanted, and then writing a few other similar functions to do the
              rest. <br /> <br />
              When I got done with the animation I still had no much knowledge
              about coding, maybe the animation was looking cool (so I think),
              but it was just a few functions to control an SVG drawing. <br />{" "}
              <br />
              If you are not a software engineer and you are not familiar with a
              <strong> function </strong> in programming, think of a function as
              an equation, something that would find in your physics or
              electrical class to calculate speed, force, voltage, amps.. the
              difference is that a function is written in whatever programming
              language you are working with, and you have a bit more control of
              the variables to use for the function to come up with the results
              that you want. This right here is what attracted me to
              programming, besides the point that I needed / wanted to publish
              information in a website.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="row-1-index">
            <h2 className="second-text-index"> My tools and resources</h2>
            <p>
              I am going to credit{" "}
              <a href="https://twitter.com/yu_angela?lang=en"> Angela Yu</a> as
              the person who taught me to code, or at least taught me the basics
              to keep on learning. After taking some of her classes late at
              night, then it was the time to get rid of my CMS (Content
              Management System) and start coding websites on my own without any
              software help.
              <br /> <br />
              <h5> The tools I am using are:</h5>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>Express.js</li>
                <li>REACT</li>
                <li>NEXT.js</li>
                <li>GSAP</li>
              </ul>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="row-2-index align-items-end">
            <h2 className="second-text-index">
              {" "}
              My advise if you want to learn to code.
            </h2>
            <p>
              If you are interested in learning to code without going for a
              computer science degree, then I surely would recommend Angela Yu
              and check out her class, and no, Angela does not know me and has
              no idea who I am, but I still think her class is pretty good.{" "}
              <br /> <br />
              There are many tools out there and they all get to be the buzz of
              the moment and maybe you will think you need to learn a certain
              tool, but keep in mind that if you have control of good old HTML,
              CSS, and JavaScript, then all the awesome tools are just
              secondary. Something like Bootstrap is easy to learn, and sure
              will make you code faster, overall I give Bootstrap a thumbs up
              because it is easy and gets you moving fast, but still think of
              Bootstrap just like a secondary tool. <br /> <br />
              Things like REACT and NEXT.js are a bit more advance, and I would
              learn them later when you get more comfortable with your coding. I
              will tell you right now NOT to use REACT alone as I learned the
              hard way that REACT alone is no good for SEO because search
              engines can not read JavaScript, and you will need to learn Server
              Side Rendering to use in REACT, this is why I am using NEXT.js
              instead. <br /> <br />
              Learning to code takes time and it can be frustrating. Keeping it
              simple and advancing at your own pace is the way to go. Once you
              start coding you also need to practice to keep and obtain more
              skills, or else you will forget, some places to keep sharpening
              your skills are places like{" "}
              <a href="https://www.sololearn.com/home">SoloLearn</a> and{" "}
              <a href="https://www.sololearn.com/home">CodeWars</a> <br />
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
