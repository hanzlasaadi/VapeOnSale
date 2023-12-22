import React from "react";
import Layout from "./Layout";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "../Sub_Component/Page1/Slider";
import NewArrivals from "../Sub_Component/Page1/NewArrivals";
import Blogs from "../Sub_Component/Page1/Blogs";
import BestSeller from "../Sub_Component/Page1/BestSeller";

function Home() {
  return (
    <Layout title={"Vape On Sale"}>
      <Slider />

      {/* categories */}
      <BestSeller />

      {/* see our products  */}
      <div className="">
        <div className="card rounded-0 bg-dark text-white mt-5">
          <img
            src="https://ik.imagekit.io/p2slevyg1/about.jpg?updatedAt=1701355425630"
            className="card-img"
            style={{ height: 540 }}
          />
          <div className="card-img-overlay  md:block hidden d-flex justify-content-center align-items-center">
            <Container className="text-white mt-5">
              <Col lg={12} sm={12} className="mx-auto">
                <Row>
                  <h1 className="text-5xl md:grids-col-12 text-center font-bold">
                    VAPE ON SALE
                  </h1>
                </Row>
                <Row>
                  <p className="text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eius ipsum esse numquam placeat harum praesentium cum earum
                    illo unde! Amet quidem ipsam dolorem? consequuntur
                    laudantium, adipisci nulla est non dignissimos It has roots
                    in a piece classical Latin literaturefrom 45 BC, making it
                    over 2000 years old. Richard looked up consectetur
                  </p>
                </Row>

                <Row>
                  <button className="w-64 mx-auto rounded-none bg-[#e60000] text-xl p-2">
                    See Our Products
                  </button>
                </Row>
              </Col>
            </Container>
          </div>
        </div>
      </div>
      <NewArrivals  />
      <Container class="mt-5">
        <Row>
          <Col lg={6} sm={12}>
            <img src="https://www.vapeshop.co.uk/cdn/shop/files/Pineapple_Ice_Lost_Mary_BM600_Disposable_Vape.jpg?v=1701174608&width=800" />
          </Col>

          <Col lg={6} sm={12} style={{ background: "#c0e6fa" }}>
            <div className="text-center">
              <p className=" mt-5">LOST MARY BM600 DISPOSABLE VAPE</p>
              <h1 className="text-2xl font-bold mt-3">
                PINEAPPLE ICE LOST MARY BM600
              </h1>
              <p className="leading-relaxed text-sm mt-3">
                Taking the 2nd spot is everyone's go to Pineapple Lost Mary
                BM600! This mini <br />
                matchbox style vape is loaded with exotic pineapple flavour, a
                hint of refreshing <br />
                ice menthol, and 20mg of nicotine salt for satisfying cravings.
                The Lost Mary <br />
                BM600 Disposable Vape offers a hassle-free and enjoyable vaping
                experience, delivering
                <br />
                consistent throat hits without the typical harshness of freebase
                nicotine. Ideal for
                <br />
                MTL vapers transitioning from smoking, it's prefilled, activated
                by drawing, and boasts
                <br />
                a 360mAh battery for around 600 puffs of tropical bliss.
                <br />
                Coming in as runner ups are Strawberry Ice, Blueberry Sour
                Raspberry, and Menthol.
              </p>

              <h1 className="text-2xl font-bold mt-4">KEY FEATURES:</h1>
              <p className="leading-loose">
                PINEAPPLE, ICE MENTHOL FLAVOUR
                <br />
                360MAH INTERNAL BATTERY
                <br />
                CONTAINS 2ML OF E-LIQUID
                <br />
                CONTAINS 20MG OF SALT NICOTINE
                <br />
                APPROXIMATELY 600 PUFFS
                <br />
                DRAW ACTIVATED
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Blogs />

      {/* google map */}
      <div className="container-fluid mt-5 pt-5">
        <div className="row">
          <div className="col-lg-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4586.815628089254!2d-4.143417784553991!3d50.37222688589544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c93b54a3f3287%3A0xf69cd75f84c13907!2squickfix%20mobiles%20and%20accesories!5e0!3m2!1sen!2s!4v1699367730780!5m2!1sen!2s"
              width="100%"
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
