import Document, { Html, Head, Main, NextScript } from "next/document"
import { HomePage } from "../components/HomePage"
import Link from 'next/link'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#2c2c2c" />
          <meta name="msapplication-navbutton-color" content="#2c2c2c" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#2c2c2c"
          />
          <title>Coding Academy in Tashkent</title>
          <link
            rel="icon"
            type="image/png"
            sizes="56x56"
            href="images/fav-icon/icon.png"
          />
          <link rel="stylesheet" type="text/css" href="css/style.css" />
          <link rel="stylesheet" type="text/css" href="css/responsive.css" />
          
        </Head>
        <body>
          <Main />
          <NextScript />
          <Link href='/'>
          <HomePage />
          </Link>
          

          <script
            type="text/javascript"
            src="vendor/jquery.2.2.3.min.js"
          ></script>

          <script
            type="text/javascript"
            src="vendor/bootstrap-select/dist/js/bootstrap-select.js"
          ></script>

          <script
            type="text/javascript"
            src="vendor/bootstrap/bootstrap.min.js"
          ></script>

          <script
            type="text/javascript"
            src="vendor/Camera-master/scripts/jquery.mobile.customized.min.js"
          ></script>
          <script
            type="text/javascript"
            src="vendor/Camera-master/scripts/jquery.easing.1.3.js"
          ></script>
          <script
            type="text/javascript"
            src="vendor/Camera-master/scripts/camera.min.js"
          ></script>
          <script
            type="text/javascript"
            src="vendor/bootstrap-mega-menu/js/menu.js"
          ></script>

          <script
            type="text/javascript"
            src="vendor/WOW-master/dist/wow.min.js"
          ></script>

          <script
            type="text/javascript"
            src="vendor/owl-carousel/owl.carousel.min.js"
          ></script>

          <script type="text/javascript" src="vendor/jquery.appear.js"></script>
          <script
            type="text/javascript"
            src="vendor/jquery.countTo.js"
          ></script>

          <script
            type="text/javascript"
            src="vendor/fancybox/dist/jquery.fancybox.min.js"
          ></script>

          <script type="text/javascript" src="js/theme.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument
