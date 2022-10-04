import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/general.css";

import MainNav from "../components/nav-main";
import Footer from "../components/footer";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=UA-36867189-13"
        />

        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-36867189-13');
            `,
          }}
        />
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
