import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/general.css";
import Head from "next/head";
import MainNav from "../components/nav-main";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div>
        <Head></Head>
      </div>
      <nav>
        <MainNav />
      </nav>
      <div className="margins">
        <Component {...pageProps} />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MyApp;
