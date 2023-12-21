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
            zIndex: "2",
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
                      {/* <InputGroup.Text id="basic-addon1" className=" bg-dark text-white"><IoIosSearch className="text-2xl"/></InputGroup.Text> */}
                      <Form.Control
                        placeholder="Search"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                      <InputGroup.Text id="basic-addon1" className=" bg-dark text-white"><IoIosSearch className="text-2xl"/></InputGroup.Text>
                    </InputGroup>
                  {/* <div className=" w-1/2 md:w-5/12 border border-slate-300   mx-auto flex justify-between column"> */}
                    {/* <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                      <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup> */}
                    {/* <button className="ml-5 bg-dark text-white">
                      <h3>
                        <IoIosSearch className="hover:text-yellow-700" />
                      </h3>
                    </button> */}
                  {/* </div> */}
                </NavbarBrand>
                {/* <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                  className="focus:shadow-none hover:shadow-none text-black border-0 hover:scale-125"
                />
                <p className="text-sm font-medium hidden md:inline-block relative top-[5px]">
                  MENU
                </p> */}
                {/* <Navbar.Brand className="mt-0 mx-auto p-0 ">
                  <Link to="/">
                    <img
                      src="https://ik.imagekit.io/p2slevyg1/vapelogo-removebg-preview.png?updatedAt=1699537221027"
                      width="100px"
                      height="80px"
                    />
                  </Link>

                </Navbar.Brand> */}
                
                <Navbar.Brand
                  href="#"
                  className="flex flex-row  relative items-baseline relative top-[0px]"
                >

                  {/* trade account button */}
                  {/* <span id="trade" className="mr-8">
                  
                    <button className="text-sm bg-red-500 text-white w-32 p-2">Trade Account</button>
                  
                  </span> */}
                  {/* <span
                    className="m-2 text-3xl hover:scale-125 hover:text-black rounded-[0px] relative right-[8px]"
                    onClick={() => setLgShow(true)}
                  >
                    <IoIosSearch />
                  </span> */}

                  {/* <Modal
                    size="xl"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    className="rounded-[0px] mt-3 w-full"
                    style={{ borderRadius: "0" }}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Search />
                  </Modal>

                  <Badge
                    count={wish?.length}
                    color="#CF8D09"
                    showZero
                    className="md:block hidden"
                  >
                    <span className="m-2 text-2xl -top-6 font-light text-gray-800 hover:scale-125 hover:text-gray-800 relative">
                      <Link to="/wishlist" className="hover:text-black ">
                        <IoIosHeartEmpty className="absolute top-[27px] md:right-[-4px] hover:scale-125 md:block hidden" />
                      </Link>
                    </span>
                  </Badge> */}

                  {/* {!auth.user ? ( */}
                    <>
                      <span className="hidden md:inline-block   text-3xl hover:scale-125 " style={{marginRight:20}}>
                        <Link to="/Login" className="hover:text-black ">
                          <RxPerson />
                        </Link>
                      </span>
                    </>
                  {/* ) : ( */}
                    <>
                      <span className="hidden md:inline-block m-2 text-3xl" >
                
                      </span>
                    </>
                  {/* )} */}
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
