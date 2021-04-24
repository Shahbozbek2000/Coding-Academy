import React from "react";
import  Head  from "next/head";
import { AboutCounter } from "../AboutUsComponents/AboutCounter";
import { AboutHeader } from "../AboutUsComponents/AboutHeader";
import { AboutPanel } from "../AboutUsComponents/AboutPanel";
import AboutTabs from "../AboutUsComponents/AboutTabs";
import { AboutText } from "../AboutUsComponents/AboutText";
import FullStackMentors from "../fullStackComponent/FullStackMentors";

export default function About_us() {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          name="Coding Academy in Tashkent official website About page"
        />
        <title>About Us Page</title>
      </Head>
      <body>
        <AboutHeader />
        <AboutText />
        <AboutTabs />
        <AboutCounter />
        <FullStackMentors
          image="https://expertnov.ru/800/600/https/howyoutube.ru/wp-content/uploads/2018/11/Image1542350522757.jpeg"
          name="Muhammad Amin"
          job="Senior Teacher"
          image2="https://www.laparent.com/wp-content/uploads/2016/11/MarkRobots.jpeg"
          name2="Isroil"
          job2="Senior Teacher"
          name3="Shahbozbek No`monjonov"
          image3="https://cdn2.onboard.org/uploads/job/header_image/3258/Software_Engineer.jpg"
          job3="Junior Teacher"
        />
        <AboutPanel />
      </body>
    </>
  );
}
