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
          <div className="col-6">
            <div>
              <p className="copyright">Copyright © {fullYear()} TU </p>
            </div>
            <div>
              {" "}
              <p className="copyright">All Rights Reserved </p>
            </div>
          </div>
          <div className="col-6">
            <div>
              <p className="dev-by">Developed by:</p>
            </div>
            <div>
              <a
                className="edgar"
                href="https://www.edgarlindo.com/"
                target="blank"
              >
                Edgar Lindo
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
