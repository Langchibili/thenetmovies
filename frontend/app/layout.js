import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

export default function RootLayout({ children, title, description, image }) {
  return (
    <html lang="en">
      <head>
      <meta charSet="utf-8" />
      <meta name="keywords" content="Thenetwork Nigerian Movies" />
      <meta
        name="description"
        content={description || 'Thenetwork Nigerian Movies'}
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image? <meta property="og:image" content={image} /> : ''}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image? <meta name="twitter:image" content={image} /> : ''}
      <meta name="author" content="langtechdev" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>{title || 'TheNetMovies | Find the best nigerian movies here'}</title>
      {/* Favicon */}
      <link rel="shortcut icon" href="/theme/images/favicon.png" />
      {/* CSS bootstrap*/}
      <link rel="stylesheet" href="/theme/css/bootstrap.min.css" />
      {/*  Style */}
      <link rel="stylesheet" href="/theme/css/style.css" />
      {/*  Responsive */}
      <link rel="stylesheet" href="/theme/css/responsive.css" />
      <React.Fragment>
          <script async type="text/javascript" src="/theme/js/owl.carousel.min.js?ver=1.0"></script>
          <script async type="text/javascript" src="/theme/js/jquery.magnific-popup.min.js?ver=1.0"></script>
          <script async type="text/javascript" src="/theme/js/slick.min.js?ver=1.0"></script>
          <script async type="text/javascript" src="/theme/js/jquery-3.6.0.min.js"></script>
          <script async type="text/javascript" src="/theme/js/asyncloader.min.js"></script>
          {/* <!-- JS bootstrap --> */}
          <script async type="text/javascript" src="/theme/js/bootstrap.min.js"></script>
          {/* <!-- owl-carousel --> */}
          <script async type="text/javascript" src="/theme/js/owl.carousel.min.js"></script>
          {/* <!-- counter-js --> */}
          <script type="text/javascript" src="/theme/js/jquery.waypoints.min.js"></script>
          <script type="text/javascript" src="/theme/js/jquery.counterup.min.js"></script>
          {/* <!-- popper-js --> */}
          <script type="text/javascript" src="/theme/js/popper.min.js"></script>
          <script type="text/javascript" src="/theme/js/swiper-bundle.min.js"></script>
          {/* <!-- Iscotop --> */}
          <script type="text/javascript" src="/theme/js/isotope.pkgd.min.js"></script>
          <script type="text/javascript" src="/theme/js/jquery.magnific-popup.min.js"></script>
          <script type="text/javascript" src="/theme/js/slick.min.js"></script>
          <script type="text/javascript" src="/theme/js/streamlab-core.js"></script>
          <script type="text/javascript" src="/theme/js/script.js"></script> 
      </React.Fragment>
      </head>
      <body>{children}</body>
      <React.Fragment>
          {/* <!-- js-min --> */}
             
      </React.Fragment>
    </html>
  );
}


