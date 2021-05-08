import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { ScratchHeader } from '../scratchComponents/ScratchHeader'
import { ScratchCard } from '../scratchComponents/ScratchCard'


export default function Scratch(){
    return (
        <>
         <Head>
          <meta name='keywords' content='Coding Academy in Tashkent & Scratch page' />
           <title>Scratch Page</title>
         </Head>
         <div> 
          <ScratchHeader/>
          <ScratchCard/>
         </div>
        </>
    )
}