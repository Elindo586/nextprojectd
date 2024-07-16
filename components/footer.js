import React from "react";

const Footer = () => {
  function fullYear() {
    const yearFormat = new Date();
    return yearFormat.getFullYear();
  }
  return (
    <div>
      <footer className="main-footer">
        <div className="row">
          <div className=" col footer-privacy">PRIVACY POLICY</div>
        </div>
        <div className="row">
          <div className="col">
            <p className="copyright">
              Copyright © {fullYear()} Edgar Lindo - All rights Reserved.
            </p>
          </div>
          <div className="col dev-by">
            <span className="dev-by2">Developed by:</span>{" "}
            <span className="edgar">Edgar Lindo</span>
          </div>
        </div>
        <br /> <br /> <br /> <br /> <br />
      </footer>
    </div>
  );
};

export default Footer;
