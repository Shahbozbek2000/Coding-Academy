import React from "react";

export function AboutText() {
  return (
    <div>
      <div className="about-text">
        <div className="container">
          <div className="title">
            <h2>
            Bizning eng bosh maqsadimiz, yaxshi kasbga ega
            bo’lishga yordam berishdir.
            </h2>
          </div>
          <img src="https://partycakesnthings.com/wp-content/uploads/2020/04/Blog-Pintar-New-Website--2048x1365.jpg" alt="" />
          <div className="about-tab-wrapper clearfix">
            <ul className="nav nav-tabs float-left">
              <li className="active">
                <a data-toggle="tab" href="#history">
                  Bizning tarix
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#vision">
                  Vision
                </a>
              </li>
            </ul>
            <div className="tab-content float-left">
              <div id="history" className="tab-pane fade in active">
                <p>
                  Coding Academy in Tashkent 2020chi yil mart oyida Shahzod
                  Yovqochev tomonidan tashkil topgan. O’quv markazini
                  ochilishidan asosiy maqsad O’zbekistonda dasturlashni yanada
                  rivojlantirish, va aholimizga yaxshi daromadli kasblarni
                  egallashiga qo’ldan kelgancha yordam berishdir.
                </p>
              </div>
              <div id="vision" className="tab-pane fade">
                <p>
                Barcha O’zbekiston Fuqorolari zamonaviy va sifatli ta’lim olishlari 
                kerak, va biz shuning uchun harakat qilamiz, va shuning uchun
                har kuni ishga shoshilamiz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
