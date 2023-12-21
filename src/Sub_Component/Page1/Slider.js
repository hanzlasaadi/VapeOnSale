import Carousel from "react-bootstrap/Carousel";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import {Container, Col, Row, Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import video from "./smoke1.mp4";
import "../../styles.css";
import SmallNavbar from "./SmallNavbar";

function Slider() {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsSmallScreen(mediaQuery.matches);
    const listener = () => setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addListener(listener);
    return () => mediaQuery.removeListener(listener);
  }, []);
  // const [navSize, setnavSize] = useState("4rem");
  // const [navColor, setnavColor] = useState("transparent");
  // const [textColor, setText]=useState('#fff');
  // const [topNav, setTopNav]=useState(40);

  // const listenScrollEvent = () => {
  //   window.scrollY > 10 ? setnavColor("#ffff") : setnavColor("transparent");
  //   window.scrollY > 10 ? setnavSize("5rem") : setnavSize("4rem");
  //   window.scrollY > 10 ? setText('#000'): setText('#fff');
  //   window.scrollY > 10 ? setTopNav(0): setTopNav(40);

  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent);
  //   return () => {
  //     window.removeEventListener("scroll", listenScrollEvent);
  //   };
  // }, [])
  return (
    <div>

    <SmallNavbar />   
      {/* {isSmallScreen ? (
          <img
            className="h-2/5"
            src="https://baroque.pk/cdn/shop/files/mobile_banner_11_2_1780x.jpg?v=1689677401"
            
            alt="Small image"
          />
        ) : (
          <img
            src="https://baroque.pk/cdn/shop/files/main_website_banner_11_1780x.jpg?v=1689676894"
            alt="Large image"
          />
        )} */}

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
            <Col sm={12} md={6} >
              <div className="text-white ml-4">
                <h1 className="text-3xl lg: -mt-72 font-bold sm: -mt-50">Good come to those who Vape</h1>
                <p className=" sm:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 
                  Illum, numquam dolorum elit quisquam doloremque a adipisci
                  facere corporis error mollitia veniam exercitationem
                  <br />
                  quaerat ipsum perferendis ab nemo eligendi iusto unde
                  deserunt.
                </p>

                <Button variant="dark" className="bg-[#e60000] rounded-none w-48 mt-3  text-xl border-0">Shop Now</Button>
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
        {/* <div className="absolute text-white">
          <div className="">
            <h1 className="text-4xl -mt-72">Good come to those who Vape</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Illum, numquam dolorum elit quisquam doloremque a adipisci facere
              corporis error mollitia veniam exercitationem
              <br />
              quaerat ipsum perferendis ab nemo eligendi iusto unde deserunt.
            </p>
          </div>
          <img
            className="-mt-72 h-96 w-96 float-right lg:grid-cols-6"
            src="https://ik.imagekit.io/p2slevyg1/vape.png?updatedAt=1701348339702"
          />
        </div> */}
      </div>

      {/* 
     <Card  style={{border:0}}>
       <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://aik.com.pk/cdn/shop/files/aik-atelier-wedding-festive-22-banner-2023-1.jpg?v=1686660812&width=1620"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  "
          src="https://www.bareeze.com/media/wysiwyg/Home_page_banner_formal_1600x651.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bareeze.com/media/wysiwyg/home/Home_page_banner_Shawl_1600x651.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
     </Carousel> 
     
      <Card.ImgOverlay className='p-0'>
        
      
      </Card.ImgOverlay>
    </Card>  */}
    </div>
  );
}

export default Slider;
