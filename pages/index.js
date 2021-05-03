import Head from "next/head";
import { HomePage } from "../components/Layout/components/HomePage"



export default function Home() {
  return (
    <>
      <Head>
        <title>Coding Academy in Tashkent</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="Coding Academy in Tashkent" />
        <link
          rel="icon"
          type="image/png"
          sizes="56x56"
          href="images/fav-icon/icon.png"
        />
      </Head>
      <body>
        <HomePage />
      </body>
    </>
  );
}
