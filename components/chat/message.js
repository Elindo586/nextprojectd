import React, { useRef, useEffect, useState } from "react";
import { GrUser } from "react-icons/gr";
import { FaRobot } from "react-icons/fa6";

const SlowText = (props) => {
  const { speed, textOut } = props;
  const [placeholder, setPlaceholder] = useState(textOut[0]);
  const index = useRef(0);

  useEffect(() => {
    function tick() {
      index.current++;
      setPlaceholder((prev) => prev + textOut[index.current]);
    }
    if (index.current < textOut.length - 1) {
      let addChar = setInterval(tick, speed);
      return () => clearInterval(addChar);
    }
  }, [placeholder, speed, textOut]);
  return <span>{placeholder}</span>;
};

const Message = ({ text, aiMessage, animate }) => {
  return (
    <div
      className=" container message_container"
      style={{ background: aiMessage ? "rgb(247, 247, 248)" : "white" }}
    >
      <div className="row">
        <div className=" col col-2">{aiMessage ? <FaRobot /> : <GrUser />}</div>
        <div className="col col-10">
          <p className="message_text">
            {animate ? <SlowText speed={80} textOut={text} /> : text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
