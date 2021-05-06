import Head from "next/head";
import {BlogCard} from '../blogComponents copy/BlogCard'
import { BlogHeader } from "../blogComponents copy/BlogHeader";
import { BlogSection } from "../blogComponents copy/BlogSection";




export default function blog() {
  return (
    <>
      <Head>
        <title>Agile Organisations | Blog</title>
        <meta name="keywords" content="Blog Page" />
        
      </Head>
      <div>
      <BlogHeader/>
      <BlogSection/>
      <BlogCard/>

      
      </div>
    </>
  );
}
