import Head from "next/head";
import { FullStackHeader } from "../fullStackComponent/FullStackHeader";
import FullStackMentors from "../fullStackComponent/FullStackMentors";
import { FullStackService } from "../fullStackComponent/FullStackService";
import { LanguageCareer } from "../languageComponents/LanguageCareer";
import { LanguageCounter } from "../languageComponents/LanguageCounter";
import LanguagePlan from "../languageComponents/LanguagePlan";
import {FullStactTabs}  from '../fullStackComponent/FullStactTabs'
export default function English() {
  return (
    <div>
      <Head>
        <meta name="keywords" content="Professional english teachers" />
        <title>English courses</title>
      </Head>
      <body>
        <FullStackHeader name='English' title='Ingliz tilini o’rgan o’zingga chet el eshiklarini och'
        image='https://www.edgehill.ac.uk/study/files/2018/11/Media-4.jpg'
        image1='https://way-to-success.net/wp-content/uploads/2020/12/english-turizm.jpg' />
        <LanguageCounter/>
        <LanguageCareer name='O`z kareerangni dasturchi sifatida boshla'
        info=' Unumli ta`lim nafaqat yaxshi o`quv materiallariga bog`liq, Balki
        o`qiyotgan va o`qitayotgan insonlarni bir-biri bilan bog`lashdir.
        2020-yil, Mart oyidan buyon CAT dasturchilar akademiyasi yuqori
        malakali va iqtidorli yoshlarni bir joyga to`plash bilan juda
        yuqori natijalarga erishdi' />
       <FullStactTabs/>
        <FullStackService/>
        <FullStackMentors image='https://expertnov.ru/800/600/https/howyoutube.ru/wp-content/uploads/2018/11/Image1542350522757.jpeg'
        name='Muhammad Amin' job='Senior Teacher'
        image2='https://www.laparent.com/wp-content/uploads/2016/11/MarkRobots.jpeg'
        name2='Isroil' job2='Senior Teacher'
        name3 = 'Shahbozbek No`monjonov' image3 = 'https://cdn2.onboard.org/uploads/job/header_image/3258/Software_Engineer.jpg'
        job3 = 'Junior Teacher'
         />
         <LanguagePlan/>
        

      </body>
    </div>
  );
}
