import Head from "next/head";
import React from "react";
import FullStackMentors from "../fullStackComponent/FullStackMentors";
import { FullStackService } from "../fullStackComponent/FullStackService";
import { FullStactTabs } from "../fullStackComponent/FullStactTabs";
import { FullStackHeader } from "../fullStackComponent/FullStackHeader";
import { LanguageCareer } from "../languageComponents/LanguageCareer";
import LanguagePlan from "../languageComponents/LanguagePlan";


export default function RoboKids() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="Create your own robot by learning this course"
        />
        <title>Robo-Kids Page</title>
      </Head>
      <div>
        <FullStackHeader
          name="Robototexnika"
          title="Robot yasashni Dasturlash orqali o`rganing"
          image="https://itsmart.io/wp-content/uploads/2020/07/4-5.jpg"
          image1="https://www.novatia.com/hs-fs/hubfs/Blog_Page/ICT%20blockers.%20shutterstock_648050746%20(original%20large%20size).jpg?width=17280&name=ICT%20blockers.%20shutterstock_648050746%20(original%20large%20size).jpg"
        />
        <LanguageCareer
          name="Farzandingiz Robotlar olamiga Safar qilishga, va
    o’z robotini kashf etishga tayyormi?"
          info="Endilikda 9 yoshdan 15 yoshgacha bo’lgan bolalar robot yasashni bizning 
          robototexnika darslari orqali o’rganishlari mumkin. Bunda bola chuqur fikrlash,
          yaratuvchanlik, matematika va fizika fanlarini o’zlari bilmagan holda o’rganishadi."
        />
        <FullStactTabs/>
        <FullStackService/>
        <FullStackMentors
        image='https://expertnov.ru/800/600/https/howyoutube.ru/wp-content/uploads/2018/11/Image1542350522757.jpeg'
        name='Muhammad Amin' job='Senior Teacher'
        image2='https://www.laparent.com/wp-content/uploads/2016/11/MarkRobots.jpeg'
        name2='Isroil' job2='Senior Teacher'
        name3 = 'Shahbozbek No`monjonov' image3 = 'https://cdn2.onboard.org/uploads/job/header_image/3258/Software_Engineer.jpg'
        job3 = 'Junior Teacher'
        />
        <LanguagePlan/>
      </div>
    </React.Fragment>
  );
}
