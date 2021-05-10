import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#2c2c2c" />
          <meta name="msapplication-navbutton-color" content="#2c2c2c" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#2c2c2c"
          />
         
          <link rel="stylesheet" type="text/css" href="css/style.css" />
          <link rel="stylesheet" type="text/css" href="css/responsive.css" />
{/*           
          <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <![endif]-->
     */}
     {/* <!-- [if lt IE 9]>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
      <script src="vendor/html5shiv.js"></script>
      <script src="vendor/respond.js"></script>
    <![endif] --> */}
    {/* <!--[if lt IE 9]> 
<script src="https://raw.githubusercontent.com/aFarkas/html5shiv/master/dist/html5shiv.min.js"></script>
 <![endif]--> */}
        </Head>
        <body>
          <Main />
          <NextScript />

         
          <script type="text/javascript" src="vendor/jquery.2.2.3.min.js"></script>
         
          <script type="text/javascript"
            src="vendor/bootstrap-select/dist/js/bootstrap-select.js"></script>
       
          <script type="text/javascript"
            src="vendor/bootstrap/bootstrap.min.js"></script>
      
          <script type='text/javascript'
            src='vendor/Camera-master/scripts/jquery.mobile.customized.min.js'></script>
          <script type='text/javascript'
            src='vendor/Camera-master/scripts/jquery.easing.1.3.js'></script>
          <script type='text/javascript'
            src='vendor/Camera-master/scripts/camera.min.js'></script>
         
          <script type="text/javascript"
            src="vendor/bootstrap-mega-menu/js/menu.js"></script>

       
          <script type="text/javascript"
            src="vendor/WOW-master/dist/wow.min.js"></script>
          
          <script type="text/javascript"
            src="vendor/owl-carousel/owl.carousel.min.js"></script>
         
          <script type="text/javascript" src="vendor/jquery.appear.js"></script>
          <script type="text/javascript" src="vendor/jquery.countTo.js"></script>
          
          <script type="text/javascript"
            src="vendor/fancybox/dist/jquery.fancybox.min.js"></script>

            <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
            <script src="vendor/html5shiv.js"></script>
            
          <script type="text/javascript" src="js/theme.js"></script>

         
        </body>
      </Html>
    );
  }
}

export default MyDocument;
