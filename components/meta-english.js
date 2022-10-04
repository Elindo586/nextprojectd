import React from "react";
import Head from "next/head";

function MetaEnglish(props) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/images/el-favicon.png"
        />
        <meta
          name="facebook-domain-verification"
          content="fzctnjbrtlybvytmamk8glkng9af7p"
        />

        <title>{props.metaTitle}</title>
        <meta name="description" content={`${props.metaDescription}`} />
        <meta name="keywords" content={`${props.metaKeywords}`} />
        <meta name="author" content="Edgar Lindo" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={`${props.ogTitle}`}
          id="meta-og-title"
        />
        <meta
          property="og:description"
          content={`${props.ogDescription}`}
          id="meta-og-desc"
        />
        <meta property="og:url" content={`${props.ogURL}`} id="meta-og-url" />
        <meta property="og:locale" content="en" />
        <meta property="site_name" content="Edgar Lindo" />
        <meta
          name="image"
          property="og:image"
          content={`${props.ogImage}`}
          id="meta-og-image"
        />
        {/* Twitter card */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@MrEdgarLindo" />

        <meta name="twitter:title" content={`${props.twitterTitle}`} />

        <meta
          name="twitter:description"
          content={`${props.twitterDescription}`}
        />
        <meta name="twitter:image" content={`${props.twitterImage}`} />
      </Head>
    </div>
  );
}

export default MetaEnglish;
