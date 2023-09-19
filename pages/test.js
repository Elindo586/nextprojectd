import { useEffect, useState } from "react";
import Image from "next/image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Text from "../components/text";
import db from "../utils/text.json";

// const hiddenStyles = {
//   position: "absolute",
//   overflow: "hidden",
//   clip: "rect(0 0 0 0)",
//   height: 1,
//   width: 1,
//   margin: -1,
//   padding: 0,
//   border: 0,
// };

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.count("submit");
        }}
      >
        <input type="text" />
        <button type="submit">btn</button>
      </form>
    </div>
  );
}
