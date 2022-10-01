import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/general.css";
import Head from "next/head";
import MainNav from "../components/nav-main";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
            crossorigin="anonymous"
          />
        </Head>
      </div>
      <nav>
        <MainNav />
      </nav>
      <div className="margins">
        <Component {...pageProps} />;
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MyApp;
