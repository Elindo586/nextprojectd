import React, { useRef, useEffect } from "react";
import { GrUser } from "react-icons/gr";
import { FaRobot } from "react-icons/fa6";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// const SlowText = (props) => {
//   const { speed, text } = props;
//   const [placeholder, setPlaceholder] = useState(text[0]);
//   const index = useRef(0);
//   useEffect(() => {
//     function tick() {
//       index.current++;
//       setPlaceholder((prev) => prev + text[index.current]);
//     }
//     if (index.current < text.length - 1) {
//       let addChar = setInterval(tick, speed);
//       return () => clearInterval(addChar);
//     }
//   }, [placeholder, speed, text]);
//   return <span>{placeholder}</span>;
// };

const Message = (props) => {
  return (
    <Container className="message_container">
      <Row>
        <Col className="col-2">
          {props.aiMessage ? <FaRobot /> : <GrUser />}
        </Col>
        <Col className="col-10">
          <p className="message_text">{props.content}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Message;
