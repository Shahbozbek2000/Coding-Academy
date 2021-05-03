import React from "react";
import { Header } from "../components/Header/Header";
import { WebDevelopment } from "./WebDevelopment";
import { Counter } from "../components/Counter";
import { Courses } from "./Courses";
import { Robototechnics } from "./Robototechnics";
import { OurCompany } from "./OurCompany";


export function HomePage() {
  return (
    <div>
      <Header />
      <WebDevelopment />
      <Counter />
      <Courses />
      <Robototechnics />
      <OurCompany />
    </div>
  );
}
