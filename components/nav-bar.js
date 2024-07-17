import Link from "next/link";

const NavBar = () => {
  return (
    <div className="main-navbar bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-main">
        <a className=" text-white navbar-brand" href="#">
          Edgar Lindo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" href="/">
                <span className=" text-secondary sr-only">Home</span>
              </Link>
            </li>
            <li className=" nav-item">
              <Link className="text-secondary  nav-link" href="/about">
                About
              </Link>
            </li>
            <li className="text-secondary nav-item">
              <Link className="text-secondary nav-link" href="/coding">
                Coding
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-secondary nav-link" href="/work">
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className=" text-secondary nav-link " href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
