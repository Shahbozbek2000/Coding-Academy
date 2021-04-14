import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function fullstack() {
  return (
    <div>
      <Head>
        <title>Full-Stack Page</title>
      </Head>
      
      <div id="theme-main-banner" className="banner-two">
        <div data-src="https://www.witszen.com/wp-content/uploads/2018/07/Web-Design-Company-1-2000x1200.jpg">
          <div className="camera_caption">
            <div className="container">
              <h5 className="wow fadeInUp animated">Web Development</h5>
              <h1 className="wow fadeInUp animated" data-wow-delay="0.2s">
                CAT kurslari studentlarga butun hayoti davomida yuqori darajada
                dasturchilar bo'lishiga ko'mak beradi
              </h1>
              <Link href="/">
                <a
                  className="tran3s hvr-trim wow fadeInUp
                        animated p-bg-color button-one"
                  data-wow-delay="0.3s"
                >
                  Batafsil
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div data-src="https://cdn.hintword.com/articles/images/1564516961273159.jpeg">
          <div className="camera_caption">
            <div className="container">
              <h5 className="wow fadeInUp animated">Web Development</h5>
              <h1 className="wow fadeInUp animated" data-wow-delay="0.2s">
                CAT kurslari studentlarga butun hayoti davomida yuqori darajada
                dasturchilar bo'lishiga ko'mak beradi
              </h1>
              <Link href="/">
                <a
                  className="tran3s hvr-trim wow fadeInUp
                        animated p-bg-color button-one"
                  data-wow-delay="0.3s"
                >
                  Batafsil
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section id="career-wrapper">
        <div className="container">
          <h1>O'z kareerangni dasturchi sifatida boshla</h1>
          <p>
            Unumli ta'lim nafaqat yaxshi o'quv materiallariga bog'liq, Balki
            o'qiyotgan va o'qitayotgan insonlarni bir-biri bilan bog'lashdir.
            2020-yil, Mart oyidan buyon CAT dasturchilar akademiyasi yuqori
            malakali va iqtidorli yoshlarni bir joyga to'plash bilan juda yuqori
            natijalarga erishdi
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
                    proyektlarda tajriba ortirgan bo’lib, o’quvchilarga nafaqat
                    nazariy bilim balki o’z amaliyotlaridan misollar taqdim
                    etadilar
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

      <section className="tabs-wrapper">
        <div className="tabs">
          <input type="radio" id="tab1" name="tab-control" checked />
          <input type="radio" id="tab2" name="tab-control" />
          <input type="radio" id="tab3" name="tab-control" />
          <input type="radio" id="tab4" name="tab-control" />

          <ul>
            <li title="Features">
              <label htmlFor="tab1" role="button">
                <br />
                <span>Programming Fundamentals</span>
              </label>
            </li>
            <li title="Delivery Contents">
              <label htmlFor="tab2" role="button">
                <br />
                <span>Javascript</span>
              </label>
            </li>
            <li title="Shipping">
              <label htmlFor="tab3" role="button">
                <br />
                <span>Front-End frameworks</span>
              </label>
            </li>
            <li title="Returns">
              <label htmlFor="tab4" role="button">
                <br />
                <span>Students Projects</span>
              </label>
            </li>
          </ul>

          <div className="slider">
            <div className="indicator"></div>
          </div>

          <div className="content">
            <section>
              <h2>Features</h2>Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ea dolorem sequi, quo tempore in eum obcaecati
              atque quibusdam officiis est dolorum minima deleniti ratione
              molestias numquam. Voluptas voluptates quibusdam cum?
            </section>
            <section>
              <h2>Delivery Contents</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              quas adipisci a accusantium eius ut voluptatibus ad impedit nulla,
              ipsa qui. Quasi temporibus eos commodi aliquid impedit amet,
              similique nulla.
            </section>
            <section>
              <h2>Shipping</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              nemo ducimus eius, magnam error quisquam sunt voluptate labore,
              excepturi numquam! Alias libero optio sed harum debitis! Veniam,
              quia in eum.
            </section>
            <section>
              <h2>Returns</h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              dicta vero rerum? Eaque repudiandae architecto libero
              reprehenderit aliquam magnam ratione quidem? Nobis doloribus
              molestiae enim deserunt necessitatibus eaque quidem incidunt.
            </section>
          </div>
        </div>
      </section>

      <div className="service-version-one">
        <div className="container">
          <h2>Kareerangizni mustahkam bazalari</h2>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-service">
                <i className="flaticon-diamond tran3s"></i>
                <p>Service Offering</p>
                <h6>
                <Link href='/'>
                  <a className="tran3s">
                    Raqobatdosh bilim
                  </a>
                </Link>
                </h6>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-service">
                <i className="flaticon-round-chart tran3s"></i>
                <p>Business Services</p>
                <h6>
                <Link href='/'>
                  <a className="tran3s">
                    Jahon yetakchi kompaniyalari
                    <br />
                    foydalanadigan metodika
                  </a>
                </Link>
                </h6>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-service">
                <i className="flaticon-notepad tran3s"></i>
                <p>Technical Service</p>
                <h6>
                <Link href='/'> 
                  <a  className="tran3s">
                    Proffesional Rezumelar <br />
                    tayyorlash darslaris
                  </a>
                </Link>
                </h6>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-service">
                <i className="flaticon-drawing tran3s"></i>
                <p>Content Creation</p>
                <h6>
                <Link href='/'>
                  <a  className="tran3s">
                    Koreiara mentorlar ko’magi
                  </a>
                </Link>
                </h6>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-service">
                <i className="flaticon-computer tran3s"></i>
                <p>Design &amp; Devlopment</p>
                <h6>
                <Link href='/'>
                  <a className="tran3s">
                    Jahon ish bozoriga qadamlar
                  </a>
                </Link>
                </h6>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="single-service">
                <i className="flaticon-business tran3s"></i>
                <p>SEO &amp; SMM</p>
                <h6>
                <Link href='/'>
                  <a  className="tran3s">
                    Suhbatga tayyorgarlik
                  </a>
                </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-team-styleOne">
        <div className="container">
          <div className="title">
            <h2>Mentorlar bilan tanishing</h2>
          </div>
          <div className="row">
            <div className="col-md-4 col-xs-6">
              <div className="single-team-member">
                <div className="image">
                  <img
                    src="https://expertnov.ru/800/600/https/howyoutube.ru/wp-content/uploads/2018/11/Image1542350522757.jpeg"
                    alt=""
                    style={{ height: "350px", objectFit: "cover" }}
                  />
                  <div className="opacity tran3s">
                    <ul className="tran3s">
                      <li>
                        <a href="" className="tran3s">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="tran3s">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="tran3s">
                          <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="tran3s">
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <h6>Muhammad Amin</h6>
                <p>Senior Teacher</p>
              </div>
            </div>

            <div className="col-md-4 col-xs-6">
              <div className="single-team-member">
                <div className="image">
                  <img
                    src="https://www.laparent.com/wp-content/uploads/2016/11/MarkRobots.jpeg"
                    style={{ height: "350px", objectFit: "cover" }}
                  />
                  <div className="opacity tran3s">
                    <ul className="tran3s">
                      <li>
                        <a href="" className="tran3s">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="tran3s">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="tran3s">
                          <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="tran3s">
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h6>Isroil</h6>
                <p>Senior Teacher</p>
              </div>
            </div>
            <div className="col-md-4 col-xs-6 hidden-sm">
              <div className="single-team-member">
                <div className="image">
                  <img
                    src="https://cdn2.onboard.org/uploads/job/header_image/3258/Software_Engineer.jpg"
                    style={{ height: "350px", objectFit: "cover" }}
                    alt=""
                  />
                  <div className="opacity tran3s">
                    <ul className="tran3s">
                      <li>
                        <a href="" className="tran3s">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="tran3s">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="tran3s">
                          <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" className="tran3s">
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h6>Shahbozbek No'monjonov</h6>
                <p>Junior Teacher</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-plan-one">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12 wow fadeInLeft">
              <div className="theme-title">
                <h6>Bizning narxlar</h6>
                <h2>
                  O'zingizga mos keladigan
                  <br />
                  to'lov planini tanlang
                </h2>
                <p>O'z joyingizni bron qilish</p>
              </div>
              <ul className="nav nav-tabs">
                <li className="active">
                  <a data-toggle="tab" href="#monthly">
                    Oylik
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#yearly">
                    To'liq kurs
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-xs-12 wow fadeInRight">
              <div className="tab-content">
                <div id="monthly" className="tab-pane fade in active">
                  <div className="clearfix">
                    <div className="float-left left-side">
                      <span style={{ letterSpacing: "3px" }}>549000</span>
                      <h6>Business</h6>
                      <Link href="/">
                        <a href="#">+</a>
                      </Link>
                    </div>
                    <div className="right-side float-left">
                      <h4>Oylik to'lov</h4>
                    </div>
                  </div>
                </div>
                <div id="yearly" className="tab-pane fade">
                  <div className="clearfix">
                    <div className="float-left left-side">
                      <span style={{ letterSpacing: "2px" }}>4000000</span>
                      <h6>Business</h6>
                      <Link href="/">
                        <a>+</a>
                      </Link>
                    </div>
                    <div className="right-side float-left">
                      <h4>To'liq kurs</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
