import React from 'react'

export function LanguageCareer(props) {
    return (
        <div>
        <section id="career-wrapper">
        <div className="container">
          <h1>{props.name}</h1>
          <p>
           {props.info}
          </p>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-4 col-xs-12 col-12">
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://store.dji.bg/img/cms/robomaster/robomaster-s1/dji-robomaster-s1-dji-store-sofia-10.jpg"
                    alt=""
                  />
                </div>
                <div className="card-title">
                  <h5>Yangi kasbga 36 hafta</h5>
                </div>
                <div className="card-body">
                  <p>
                    CAT academiyasi bilan birgalikda, Full stack Web
                    developmentni JavaScript va Typescript orqali qurasiz.
                    Bizning zamonaviy va raqobatdosh o’quv dasturimiz jahonni
                    eng talabgir dasturchilariga aylantiradi.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4 col-xs-12 col-12">
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://www.tweakmywebsite.com.au/wp-content/uploads/2019/04/8-Benefits-of-Hiring-Website-Maintenance-Company.jpg"
                    alt=""
                  />
                </div>
                <div className="card-title">
                  <h5>Profi mentorlar</h5>
                </div>
                <div className="card-body">
                  <p>
                    CAT academiyasi mentorlarni bir nechta mahalliy va halqaro
                    proyektlarda tajriba ortirgan bo’lib, o’quvchilarga
                    nafaqat nazariy bilim balki o’z amaliyotlaridan misollar
                    taqdim etadilar
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4 col-xs-12 col-12">
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://englishfreetest.com/upload/news-image/2020-05-07/the-tenses-in-english-introduction-english-free-test.png"
                    alt=""
                  />
                </div>
                <div className="card-title">
                  <h5>Career Support </h5>
                </div>
                <div className="card-body">
                  <p>CAT Career center jamoasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}
