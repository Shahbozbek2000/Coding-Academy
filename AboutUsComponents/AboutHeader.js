import React from "react";
import Typical from "react-typical";
export function AboutHeader() {
  return (
    <div>
      <div className="inner-page-banner">
        <div className="opacity">
          <h1>
            <Typical
              loop={Infinity}
              steps={["Coding Academy in Tashkent", 20000]}
            />
          </h1>
        </div>
      </div>
    </div>
  );
}
