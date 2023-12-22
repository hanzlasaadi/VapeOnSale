import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { RxPerson, RxDashboard } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Modal from "react-bootstrap/Modal";
import Menu from "./Menu";
import "../styles.css";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";


import { toast } from "react-toastify";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Badge } from "antd";

import { NavbarBrand } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';


function NavigationBar() {

  

  

  const [navSize, setnavSize] = useState("4rem");
  const [navColor, setnavColor] = useState("transparent");
  const [topNav, setTopNav] = useState(40);
  const [lgShow, setLgShow] = useState(false);

  const navigate = useNavigate();


  // const handleLogout = () => {
  //   setAuth({
  //     ...auth,
  //     user: null,
  //     token: "",
  //   });
  //   localStorage.removeItem("auth");
  //   toast.success("Logout Successfully");
  // };

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#ffffff") : setnavColor("#ffffff");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("4rem");
    window.scrollY > 10 ? setTopNav(0) : setTopNav(0);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div>
      <div>
        <nav
          className="fixed w-100 mx-0 drop-shadow-md"
          style={{
            backgroundColor: navColor,
            height: navSize,
            zIndex: "1000",
          }}
        >
          {[false].map((expand) => (
            <Navbar
              key={expand}
              expand={expand}
              id="navbar"
              className=" p-3 bg-white"
            >
              <Container fluid>
                <Link to="/">
                  <img
                    src="https://ik.imagekit.io/p2slevyg1/vapelogo-removebg-preview.png?updatedAt=1699537221027"
                    width="200px"
                    height="80px"
                  />
                </Link>
                <NavbarBrand>
                <InputGroup className="w-96">
                      
                      <Form.Control
                        placeholder="Search"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                      <InputGroup.Text id="basic-addon1" className=" bg-dark text-white"><IoIosSearch className="text-2xl"/></InputGroup.Text>
                    </InputGroup>
                  
                </NavbarBrand>
               
                
                <Navbar.Brand
                  href="#"
                  className="flex flex-row  relative items-baseline relative top-[0px]"
                >

               
                    <>
                      <span className="hidden md:inline-block   text-3xl hover:scale-125 " style={{marginRight:20}}>
                        <Link to="/Login" className="hover:text-black ">
                          <RxPerson />
                        </Link>
                      </span>
                    </>
                 
                    <>
                      <span className="hidden md:inline-block m-2 text-3xl" >
                
                      </span>
                    </>
                 
                  <Badge count="0" color="#e60000" showZero>
                    <span className="m-2 text-3xl -top-6 font-light text-gray-900 hover:scale-125   hover:text-gray-800 relative">
                      <Link to="/viewCart" className="hover:text-black " >
                        <AiOutlineShoppingCart className="absolute top-[29px] md:right-[-7px] right-[-4px]   hover:scale-125 " />
                      </Link>
                    </span>
                  </Badge>
                </Navbar.Brand>
                <Navbar.Offcanvas
                  className="bg-dark  "
                  id={"menuWidth"}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="start"
                >
                  <Offcanvas.Header
                    className="hover:text-amber-600 text-light text-white"
                    closeButton
                  >
                    <Offcanvas.Title className="ml-2 mt-1 mb-7  font-sans text-lg font-medium w-75"></Offcanvas.Title>
                  </Offcanvas.Header>

                  <Offcanvas.Body className="p-0 m-0">
                    <Nav className="justify-content-end flex-grow-1 p-0 m-0">
                      <Menu />
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </nav>
      </div>
      <Outlet />



    
    </div>
  );
}

export default NavigationBar;
