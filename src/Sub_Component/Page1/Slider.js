import { Container, Col, Row, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import video from "./smoke1.mp4";
import "../../styles.css";
import SmallNavbar from "./SmallNavbar";

function Slider() {
  return (
    <div>
      <SmallNavbar />

      <div className="">
        <video
          id="smokeVedio"
          muted
          autoPlay
          loop
          src={video}
          className=" relative top-0 w-full object-cover"
        ></video>

        <Container className="absolute fluid ">
          <Row>
            <Col sm={12} md={6}>
              <div className="text-white ml-4">
                <h1 className="text-3xl lg: -mt-72 font-bold sm: -mt-50">
                  Good come to those who Vape
                </h1>
                <p className=" sm:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, numquam dolorum elit quisquam doloremque a adipisci
                  facere corporis error mollitia veniam exercitationem
                  <br />
                  quaerat ipsum perferendis ab nemo eligendi iusto unde
                  deserunt.
                </p>

                <Button
                  variant="dark"
                  className="bg-[#e60000] rounded-none w-48 mt-3  text-xl border-0"
                >
                  Shop Now
                </Button>
              </div>
            </Col>

            <Col>
              <img
                id="img1"
                className=" w-96 float-right md:block hidden "
                src="https://ik.imagekit.io/p2slevyg1/vape.png?updatedAt=1701348339702"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Slider;
