import React from 'react'
import Head from 'next/head'
import { FullStackHeader } from "../fullStackComponent/FullStackHeader";
import FullStackCard from "../fullStackComponent/FullStackCard";
import {FullStactTabs} from '../fullStackComponent/FullStactTabs'
import { FullStackService } from "../fullStackComponent/FullStackService";
import FullStackMentors from "../fullStackComponent/FullStackMentors";
import FullStackPlan from "../fullStackComponent/FullStackPlan";

 export default function Python(){
    return (
     <>
     <Head>
     <meta name='keywords' content='Python Page' />
        <title>Python page</title>
     </Head>
     <div>
     <FullStackHeader
     name="Web Development"
     title="  CAT kurslari studentlarga butun hayoti davomida yuqori
   darajada dasturchilar bo`lishiga ko`mak beradi"
     image="https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_1369460255-2048x1365.jpg"
     image1="https://www.hallaminternet.com/wp-content/uploads/2017/05/Digital-tools.jpg"
   />
       <FullStackCard/>
       <FullStactTabs />
       <FullStackService />
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
       <FullStackPlan />
       
     </div>
     </>
    )
}