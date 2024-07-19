import { React, useState, useEffect } from "react";
import Link from "next/link";

function MainNav() {
  const [isPath, setIsPath] = useState();
  useEffect(() => {
    title();
  }, [isPath]);

  const show = () => {
    let drop = document.getElementById("navbarTogglerDemo02");

    if (drop.classList.value === "navbar-collapse collapse") {
      drop.classList.value = "navbar-collapse collapse show";
    } else {
      drop.classList.value = "navbar-collapse collapse";
    }
  };

  const title = () => {
    let findTitle = window.location.pathname;
    setIsPath(findTitle);
    // document.title = `TU  | ${findTitle}`;
    switch (findTitle) {
      case "/":
        document.title = "Edgar Lindo | Home";
        break;
      case "/about":
        document.title = "Edgar Lindo | About";
        break;
      case "/coding":
        document.title = "Edgar Lindo | Coding";
        break;
      case "/work":
        document.title = "Edgar Lindo | Work";
        break;
      case "/contact":
        document.title = "Edgar Lindo | Contact";
        break;

      default:
        console.log("This is not a part of this website.");
    }
  };

  return (
    <div className="bg-dark ">
      <nav
        className="navbar navbar-expand-lg bg-dark navbar-dark main-navbar "
        onClick={title}
      >
        <Link legacyBehavior href="/">
          <a onClick={title} className="navbar-brand ">
            &nbsp; &nbsp; <strong>Edgar Lindo</strong>
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={show}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link legacyBehavior href="/">
                <a className="nav-link" onClick={title}>
                  Home
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link legacyBehavior href="/about">
                <a className="nav-link" onClick={title}>
                  About
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link legacyBehavior href="/coding">
                <a className="nav-link" onClick={title}>
                  Coding
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link legacyBehavior href="/work">
                <a className="nav-link">Work</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link legacyBehavior href="/contact">
                <a className="nav-link" onClick={title}>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default MainNav;
