import Head from "next/head";
import { Navbar } from "../components/Header/Navbar";
import { HomePage } from "../components/HomePage";


import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        
       <title>Coding Academy in Tashkent</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="Coding Academy in Tashkent" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
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
    <Navbar/>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </body>
    </div>
  );
}
