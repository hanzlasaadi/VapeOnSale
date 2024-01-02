import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { data } from "../../data/datavape.js";
import Button from "react-bootstrap/esm/Button";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";

function TradeGridView() {
  const project = data;
  //   const [backgroundColor, setBackgroundColor] = useState("initial");

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       const colors = ["red", "green", "blue", "yellow"];
  //       const randomColor = colors[Math.floor(Math.random() * colors.length)];
  //       setBackgroundColor(randomColor);
  //     }, 5000);

  //     return () => {
  //       clearInterval(intervalId);
  //     };
  //   }, []);

  return (
    <div class="pt-[5rem]">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 bg-[#e3e3e3]">
            <div className="p-4">
              <div className="fs-5 fw-bold d-flex justify-between ">
                <div class="d-flex">
                  <span>
                    <img
                      width="20px"
                      style={{ marginRight: 9 }}
                      src="https://ik.imagekit.io/p2slevyg1/filter.png?updatedAt=1699433217621"
                    />
                  </span>{" "}
                  Filter
                </div>
                <div>
                  <span className="float-end" style={{ fontSize: 10 }}>
                    <button
                      className="border-bottom border-dark border-end-0 bg-[#e3e3e3] border-top-0 border-start-0 rounded-0 p-1 m-0"
                      style={{ fontSize: 12 }}
                    >
                      Clear All
                    </button>
                  </span>
                </div>
              </div>
              <p className="fs-6 fw-bold mt-5">
                Types
                <span className="float-end" style={{ fontSize: 10 }}>
                  <button
                    className="border-bottom border-dark border-end-0 bg-[#e3e3e3] border-top-0 border-start-0 rounded-0 p-1 m-0"
                    style={{ fontSize: 12 }}
                  >
                    Clear
                  </button>
                </span>
              </p>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDefault"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Disposables Vape Kits
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Eliquids
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Vape Kits
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Coils
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Prefilled Pods
                  </label>
                </div>
              </div>
              <br />
              {/* ---price--- */}
              <p className="fs-6 fw-bold">
                Price Range
                <span className="float-end" style={{ fontSize: 10 }}>
                  <button
                    className="border-bottom border-dark border-end-0 bg-[#e3e3e3] border-top-0 border-start-0 rounded-0 p-1 m-0"
                    style={{ fontSize: 12 }}
                  >
                    Clear
                  </button>
                </span>
              </p>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDefault"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    £0-£10
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    £10-£25
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    £25-£50
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    £50-£75
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    £150-£200
                  </label>
                </div>
              </div>
              <br />
              {/* ---brands---  */}
              <p className="fs-6 fw-bold">
                Brands
                <span className="float-end" style={{ fontSize: 10 }}>
                  <button
                    className="border-bottom border-dark border-end-0 bg-[#e3e3e3] border-top-0 border-start-0 rounded-0 p-1 m-0"
                    style={{ fontSize: 12 }}
                  >
                    Clear
                  </button>
                </span>
              </p>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDefault"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Lost Marry
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Elf-Bar
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Hayati Pro
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Aspire
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    ETO
                  </label>
                </div>
              </div>
              <br />
              {/* ---flavour----  */}
              <p className="fs-6 fw-bold">
                Flavour
                <span className="float-end" style={{ fontSize: 10 }}>
                  <button
                    className="border-bottom border-dark border-end-0 bg-[#e3e3e3] border-top-0 border-start-0 rounded-0 p-1 m-0"
                    style={{ fontSize: 12 }}
                  >
                    Clear
                  </button>
                </span>
              </p>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDefault"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Desserts
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Drink
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Sweets
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Fruits
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Menthol
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Tobacoo
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* right  */}
          <div className="col-lg-9 bg-[#efeaea]">
            <div class="flex pt-5 justify-between items-baseline">
              <p></p>
              <p class="text-center text-3xl font-bold ">
                Wholesale Crystal Bar
              </p>
              <div class="flex">
                <div class="mx-2">
                  <IoGrid class="text-3xl m-1  bg-[#c5c1c1] rounded-md p-1" />
                  <p class="text-[12px] ">Grid View</p>
                </div>
                <div>
                  <FaListUl class="text-3xl m-1  bg-[#c5c1c1] rounded-md p-1" />
                <Link to="/listView"><p class="text-[12px]">List View</p></Link>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <InputGroup className="w-50">
                <Form.Control
                  aria-label="Text input with dropdown button"
                  placeholder="Search"
                />

                <DropdownButton
                  variant="outline-dark"
                  title="All"
                  id="input-group-dropdown-2"
                  align="end"
                  class="bg-black text-white"
                >
                    <Dropdown.Item href="#">Disposables</Dropdown.Item>
                  <Dropdown.Item href="#">Eliquids</Dropdown.Item>
                  <Dropdown.Item href="#">Kits</Dropdown.Item>
                  <Dropdown.Item href="#">Tanks</Dropdown.Item>
                  <Dropdown.Item href="#">Coils</Dropdown.Item>
                  <Dropdown.Item href="#">Pods</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-1 m-5 ">
              {project.map((item, index) => (
                <div key={index} class="d-flex flex-col justify-center">
                  {/* <Link to="/singleProduct" class="text-black no-underline"> */}
                  <div class="relative">
                    <img
                      src={item.image}
                      className="card-img-top card rounded-lg"
                      style={{
                        width: "200px",
                        height: "200px",
                      }}
                      alt=""
                    />
                    <p class="absolute top-[15px] left-[130px] font-semibold text-green-600">
                      In Stock
                    </p>
                  </div>
                  <div className="card-body">
                    <p className="card-title py-2 w-75 text-wrap  text-center font-bold text-gray-700">
                      {item.name}
                    </p>
                    <div class="flex justify-start items-center">
                      <span className="card-text fw-bold text-gray-700 px-2 pb-1 mx-1 bg-white rounded-full">
                        +
                      </span>
                      <span className="card-text fw-bold text-gray-700 px-2 pb-1 mx-1 bg-white rounded-full">
                        1
                      </span>
                      <span className="card-text fw-bold text-gray-700 px-2 pb-1 mx-1 bg-white rounded-full">
                        -
                      </span>
                      <span className="card-text fw-bold px-2">
                        {item.price}
                      </span>
                    </div>
                    <div class="my-2 w-75">
                      <Form.Select aria-label="Default select example">
                        <option>10mg 1017 in stock</option>
                        <option value="1">20mg 1256 in stock</option>
                      </Form.Select>
                      <div className="d-grid gap-2 mt-2 mb-4">
                        <button className="btn btn-danger">Add To Order</button>
                      </div>
                    </div>
                  </div>{" "}
                  {/* </Link> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default TradeGridView;