import React from "react"
import { Header } from "./Header/Header"
import { WebDevelopment } from "./WebDevelopment"
import { Counter } from "./Counter"
import { Courses } from "./Courses"
import { Robototechnics } from "./Robototechnics"
import { OurCompany } from "./OurCompany"
import { Footer } from "./Footer"

import { Contact } from "./Contact"

export function HomePage() {
  return (
    <div>
      
      <Header/>
      <WebDevelopment />
      <Counter />
      <Courses />
      <Robototechnics />
      <OurCompany />
      <Footer />
    </div>
  );
}
