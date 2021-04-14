import Head from "next/head";
import { Accordion } from "../careerComponents/Accordion";
import { CareerDevelopment } from "../careerComponents/careerDevelopment";

export default function Career() {
  return (
    <section id="part-2">
      <Head>
        <meta name="keywords" content="Career page in Coding Academy" />
        <title>Career page</title>
      </Head>
      <div className="inner-page-banner">
        <div className="opacity">
          <h1>Company Story</h1>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>/</li>
            <li>About us</li>
          </ul>
        </div>
      </div>
      <main className="career-info">
        <div className="container">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            nisi mollitia delectus magni dicta quos quidem, ducimus aut dolorum
            aliquid officia, illo iure exercitationem beatae fugiat praesentium
            perspiciatis voluptatem rerum repudiandae{" "}
          </h2>
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12 col-md-6 col-12">
              <div className="career-left">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam nisi mollitia delectus magni dicta quos quidem,
                  ducimus aut dolorum aliquid officia, illo iure exercitationem
                  beatae fugiat praesentium perspiciatis voluptatem rerum
                  repudiandae
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12 col-md-6 col-12">
              <div className="career-right">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam nisi mollitia delectus magni dicta quos quidem,
                  ducimus aut dolorum aliquid officia, illo iure exercitationem
                  beatae fugiat praesentium perspiciatis voluptatem rerum
                  repudiandae
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    <CareerDevelopment/>
    <Accordion/>
    </section>
  );
}
