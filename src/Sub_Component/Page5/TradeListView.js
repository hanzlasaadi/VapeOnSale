import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Outlet, Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";

function TradeListView() {
  return (
    // <div class="pt-[5rem]">
    //   <div className="container-fluid">
    //     <div className="row">
    //       <div className="col-lg-3 bg-light">
    //         <div className="p-4">
    //           <div className="fs-5 fw-bold d-flex justify-between ">
    //             <div class="d-flex">
    //               <span>
    //                 <img
    //                   width="20px"
    //                   style={{ marginRight: 9 }}
    //                   src="https://ik.imagekit.io/p2slevyg1/filter.png?updatedAt=1699433217621"
    //                 />
    //               </span>{" "}
    //               Filter
    //             </div>
    //             <div>
    //               <span className="float-end" style={{ fontSize: 10 }}>
    //                 <button
    //                   className="border-bottom border-dark border-end-0 bg-light border-top-0 border-start-0 rounded-0 p-1 m-0"
    //                   style={{ fontSize: 12 }}
    //                 >
    //                   Clear All
    //                 </button>
    //               </span>
    //             </div>
    //           </div>
    //           <p className="fs-6 fw-bold mt-5">
    //             Types
    //             <span className="float-end" style={{ fontSize: 10 }}>
    //               <button
    //                 className="border-bottom border-dark border-end-0 bg-light border-top-0 border-start-0 rounded-0 p-1 m-0"
    //                 style={{ fontSize: 12 }}
    //               >
    //                 Clear
    //               </button>
    //             </span>
    //           </p>
    //           <div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckDefault"
    //                 defaultChecked
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckDefault"
    //               >
    //                 Disposables Vape Kits
    //               </label>
    //             </div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckChecked"
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckChecked"
    //               >
    //                 Eliquids
    //               </label>
    //             </div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckChecked"
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckChecked"
    //               >
    //                 Vape Kits
    //               </label>
    //             </div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckChecked"
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckChecked"
    //               >
    //                 Coils
    //               </label>
    //             </div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckChecked"
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckChecked"
    //               >
    //                 Prefilled Pods
    //               </label>
    //             </div>
    //           </div>
    //           <br />
    //           {/* ---price--- */}
    //           <p className="fs-6 fw-bold">
    //             Price Range
    //             <span className="float-end" style={{ fontSize: 10 }}>
    //               <button
    //                 className="border-bottom border-dark border-end-0 bg-light border-top-0 border-start-0 rounded-0 p-1 m-0"
    //                 style={{ fontSize: 12 }}
    //               >
    //                 Clear
    //               </button>
    //             </span>
    //           </p>
    //           <div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckDefault"
    //                 defaultChecked
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckDefault"
    //               >
    //                 £0-£10
    //               </label>
    //             </div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckChecked"
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckChecked"
    //               >
    //                 £10-£25
    //               </label>
    //             </div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckChecked"
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckChecked"
    //               >
    //                 £25-£50
    //               </label>
    //             </div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckChecked"
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckChecked"
    //               >
    //                 £50-£75
    //               </label>
    //             </div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckChecked"
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckChecked"
    //               >
    //                 £150-£200
    //               </label>
    //             </div>
    //           </div>
    //           <br />
    //           {/* ---brands---  */}
    //           <p className="fs-6 fw-bold">
    //             Brands
    //             <span className="float-end" style={{ fontSize: 10 }}>
    //               <button
    //                 className="border-bottom border-dark border-end-0 bg-light border-top-0 border-start-0 rounded-0 p-1 m-0"
    //                 style={{ fontSize: 12 }}
    //               >
    //                 Clear
    //               </button>
    //             </span>
    //           </p>
    //           <div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckDefault"
    //                 defaultChecked
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckDefault"
    //               >
    //                 Lost Marry
    //               </label>
    //             </div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckChecked"
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckChecked"
    //               >
    //                 Elf-Bar
    //               </label>
    //             </div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckChecked"
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckChecked"
    //               >
    //                 Hayati Pro
    //               </label>
    //             </div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckChecked"
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckChecked"
    //               >
    //                 Aspire
    //               </label>
    //             </div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckChecked"
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckChecked"
    //               >
    //                 ETO
    //               </label>
    //             </div>
    //           </div>
    //           <br />
    //           {/* ---flavour----  */}
    //           <p className="fs-6 fw-bold">
    //             Flavour
    //             <span className="float-end" style={{ fontSize: 10 }}>
    //               <button
    //                 className="border-bottom border-dark border-end-0 bg-light border-top-0 border-start-0 rounded-0 p-1 m-0"
    //                 style={{ fontSize: 12 }}
    //               >
    //                 Clear
    //               </button>
    //             </span>
    //           </p>
    //           <div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckDefault"
    //                 defaultChecked
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckDefault"
    //               >
    //                 Desserts
    //               </label>
    //             </div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckChecked"
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckChecked"
    //               >
    //                 Drink
    //               </label>
    //             </div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckChecked"
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckChecked"
    //               >
    //                 Sweets
    //               </label>
    //             </div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckChecked"
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckChecked"
    //               >
    //                 Fruits
    //               </label>
    //             </div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckChecked"
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckChecked"
    //               >
    //                 Menthol
    //               </label>
    //             </div>
    //             <div className="form-check">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 defaultValue
    //                 id="flexCheckChecked"
    //               />
    //               <label
    //                 className="form-check-label"
    //                 htmlFor="flexCheckChecked"
    //               >
    //                 Tobacoo
    //               </label>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col-lg-9">
    //         <div className="d-flex justify-content-center mt-5">

    //           <InputGroup className="mb-3 w-50">
    //             <Form.Control
    //               aria-label="Text input with dropdown button"
    //               placeholder="Search"
    //             />

    //             <DropdownButton
    //               variant="outline-dark"
    //               title="All"
    //               id="input-group-dropdown-2"
    //               align="end"
    //               class="bg-black text-white"
    //             >
    //               <Dropdown.Item href="#">Disposables</Dropdown.Item>
    //               <Dropdown.Item href="#">Eliquids</Dropdown.Item>
    //               <Dropdown.Item href="#">Kits</Dropdown.Item>
    //               <Dropdown.Item href="#">Tanks</Dropdown.Item>
    //               <Dropdown.Item href="#">Coils</Dropdown.Item>
    //               <Dropdown.Item href="#">Pods</Dropdown.Item>
    //             </DropdownButton>
    //           </InputGroup>
    //         </div>

    //         <div className=" mt-2">
    //           {/* <h2 className="text-center font-semibold  fs-5">Wholesale Crystal Bar</h2> */}
    //         </div>

    //         <div className="mt-4">
    //           <Table>
    //             <thead>
    //               <tr>
    //                 <th>Name</th>
    //                 <th>Variant</th>
    //                 <th>Stock</th>
    //                 <th>Quantity</th>
    //                 <th>Order</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               <tr>
    //                 <td className="d-flex col ">
    //                   <img
    //                     width={50}
    //                     src="https://ik.imagekit.io/p2slevyg1/c2.jpeg?updatedAt=1701355717698"
    //                   />
    //                   <p className="ml-2">
    //                     SKE CRYSTAL - Apple <br /> Peach
    //                   </p>
    //                 </td>
    //                 <td className="col-lg-2">
    //                   <InputGroup style={{ fontSize: 12 }}>
    //                     <Form.Select
    //                       aria-label="Default select example"
    //                       class="border  border-slate-500 p-1"
    //                       style={{
    //                         width: 141,
    //                         marginLeft: -80,
    //                         fontSize: 12,
    //                         height: 27,
    //                       }}
    //                     >
    //                       <option className="">10mg 1017 in stock</option>
    //                       <option value="1">20mg 1256 in stock</option>
    //                     </Form.Select>
    //                     <button
    //                       style={{ height: 27, fontSize: 12 }}
    //                       className="btn btn-dark p-1"
    //                       id="button-addon2"
    //                     >
    //                       £4.32+VAT
    //                     </button>
    //                   </InputGroup>
    //                 </td>
    //                 <td>
    //                   <p className="fs-6 p-2 font-bold text-success">
    //                     In Stock
    //                   </p>
    //                 </td>
    //                 <td className="p-2" style={{marginTop:0}}>
    //                 <div class="flex justify-start items-center">
    //                   <span className="card-text fw-bold text-gray-700 px-2 pb-1 mx-1 bg-white rounded-full">
    //                     +
    //                   </span>
    //                   <span className="card-text fw-bold text-gray-700 px-2 pb-1 mx-1 bg-white rounded-full">
    //                     1
    //                   </span>
    //                   <span className="card-text fw-bold text-gray-700 px-2 pb-1 mx-1 bg-white rounded-full">
    //                     -
    //                   </span>

    //                 </div>
    //                 </td>
    //                 <td>
    //                   <button
    //                     class="btn btn-danger text-white rounded-full"
    //                     style={{ fontSize: 14 }}
    //                   >
    //                     Add to Order
    //                   </button>
    //                 </td>
    //               </tr>

    //               {/* <tr>
    //                 <td className="d-flex col ">
    //                   <img
    //                     width={50}
    //                     src="https://ik.imagekit.io/p2slevyg1/c2.jpeg?updatedAt=1701355717698"
    //                   />
    //                   <p className="ml-2">
    //                     SKE CRYSTAL - Apple <br /> Peach
    //                   </p>
    //                 </td>
    //                 <td className="">
    //                   <InputGroup style={{ fontSize: 12 }}>
    //                     <Form.Select
    //                       aria-label="Default select example"
    //                       class="border  border-slate-500 p-1"
    //                       style={{
    //                         width: 141,
    //                         marginLeft: -80,
    //                         fontSize: 12,
    //                         height: 27,
    //                       }}
    //                     >
    //                       <option className="">10mg 1017 in stock</option>
    //                       <option value="1">20mg 1256 in stock</option>
    //                     </Form.Select>
    //                     <button
    //                       style={{ height: 27, fontSize: 12 }}
    //                       className="btn btn-dark p-1"
    //                       id="button-addon2"
    //                     >
    //                       £4.32+VAT
    //                     </button>
    //                   </InputGroup>
    //                 </td>
    //                 <td>
    //                   <p className="fs-6 p-2 font-bold text-success">
    //                     In Stock
    //                   </p>
    //                 </td>
    //                 <td>@mdo</td>
    //                 <td>
    //                   <button
    //                     class="btn btn-danger text-white rounded-full"
    //                     style={{ fontSize: 14 }}
    //                   >
    //                     Add to Order
    //                   </button>
    //                 </td>
    //               </tr> */}
    //               {/* <tr>
    //                 <td className="d-flex col">
    //                   <img
    //                     width={50}
    //                     src="https://ik.imagekit.io/p2slevyg1/c2.jpeg?updatedAt=1701355717698"
    //                   />
    //                   <p className="ml-2">
    //                     SKE CRYSTAL - Apple <br /> Peach
    //                   </p>
    //                 </td>
    //                 <td className="">
    //                   <InputGroup style={{ fontSize: 12 }}>
    //                     <Form.Select
    //                       aria-label="Default select example"
    //                       class="border  border-slate-500 p-1"
    //                       style={{
    //                         width: 141,
    //                         marginLeft: -80,
    //                         fontSize: 12,
    //                         height: 27,
    //                       }}
    //                     >
    //                       <option className="">10mg 1017 in stock</option>
    //                       <option value="1">20mg 1256 in stock</option>
    //                     </Form.Select>
    //                     <button
    //                       style={{ height: 27, fontSize: 12 }}
    //                       className="btn btn-dark p-1"
    //                       id="button-addon2"
    //                     >
    //                       £4.32+VAT
    //                     </button>
    //                   </InputGroup>
    //                 </td>
    //                 <td>
    //                   <p className="fs-6 p-2 font-bold text-success">
    //                     In Stock
    //                   </p>
    //                 </td>
    //                 <td>@fat</td>
    //                 <td>
    //                   <button
    //                     class="btn btn-danger text-white rounded-full"
    //                     style={{ fontSize: 14 }}
    //                   >
    //                     Add to Order
    //                   </button>
    //                 </td>
    //               </tr> */}

    //               {/* <tr>
    //                 <td className="d-flex col">
    //                   <img
    //                     width={50}
    //                     src="https://ik.imagekit.io/p2slevyg1/c2.jpeg?updatedAt=1701355717698"
    //                   />
    //                   <p className="ml-2">
    //                     SKE CRYSTAL - Apple <br /> Peach
    //                   </p>
    //                 </td>
    //                 <td className="">
    //                   <InputGroup style={{ fontSize: 12 }}>
    //                     <Form.Select
    //                       aria-label="Default2 select example2"
    //                       class="border  border-slate-500 p-1"
    //                       style={{
    //                         width: 141,
    //                         marginLeft: -80,
    //                         fontSize: 12,
    //                         height: 27,
    //                       }}
    //                     >
    //                       <option className="">10mg 1017 in stock</option>
    //                       <option value="1">20mg 1256 in stock</option>
    //                     </Form.Select>
    //                     <button
    //                       style={{ height: 27, fontSize: 12 }}
    //                       className="btn btn-dark p-1"
    //                       id="button-addon2"
    //                     >
    //                       £4.32+VAT
    //                     </button>
    //                   </InputGroup>
    //                 </td>
    //                 <td>
    //                   <p className="fs-6 p-2 font-bold text-success">
    //                     In Stock
    //                   </p>
    //                 </td>
    //                 <td>@fat</td>
    //                 <td>
    //                   <button
    //                     class="btn btn-danger text-white rounded-full"
    //                     style={{ fontSize: 14 }}
    //                   >
    //                     Add to Order
    //                   </button>
    //                 </td>
    //               </tr> */}
    //             </tbody>
    //           </Table>
    //         </div>
    //         {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 m-5">
    //         {project.map((item, index) => (
    //           <div key={index} class="d-flex flex-col justify-center">
    //             <Link to="/singleProduct" class="text-black no-underline">
    //               <img
    //                 src={item.image}
    //                 className="card-img-top card rounded-0"
    //                 style={{
    //                   width: "200px",
    //                   height: "200px",
    //                   backgroundColor: backgroundColor,
    //                   transition: "background-color 0.3s ease",
    //                 }}
    //                 onMouseOver={() => setBackgroundColor("orange")}
    //                 onMouseOut={() => setBackgroundColor("initial")}
    //               />
    //               <div className="card-body">
    //                 <p className="card-title py-2">{item.name}</p>
    //                 <p
    //                   className="card-text fw-bold"
    //                   style={{ color: "#fe0101" }}
    //                 >
    //                   {item.price}
    //                 </p>
    //               </div>{" "}
    //             </Link>
    //           </div>
    //         ))}
    //       </div> */}
    //       </div>
    //     </div>
    //   </div>
    //   <Outlet />
    // </div>

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
          <div className="col-lg-9 ">
            <div class="flex pt-5 justify-between items-baseline">
              <p></p>
              <p class="text-center text-3xl font-bold ">
                Wholesale Crystal Bar
              </p>
              <div class="flex">
                <div class="mx-2">
                  <IoGrid class="text-3xl m-1  bg-[#c5c1c1] rounded-md p-1" />
                  <Link to="/trade">
                    <p class="text-[12px] ">Grid View</p>
                  </Link>
                </div>
                <div>
                  <FaListUl class="text-3xl m-1  bg-[#c5c1c1] rounded-md p-1" />
                  <Link to="/listView">
                    <p class="text-[12px]">List View</p>
                  </Link>
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

            <div className="mt-4">
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Variant</th>
                    <th>Stock</th>
                    <th>Quantity</th>
                    <th>Order</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="d-flex col ">
                      <img
                        width={50}
                        src="https:ik.imagekit.io/p2slevyg1/c2.jpeg?updatedAt=1701355717698"
                      />
                      <p className="ml-2">
                        SKE CRYSTAL - Apple <br /> Peach
                      </p>
                    </td>
                    <td className="col-lg-2">
                      <InputGroup style={{ fontSize: 12 }}>
                        <Form.Select
                          aria-label="Default select example"
                          class="border  border-slate-500 p-1"
                          style={{
                            width: 141,
                            marginLeft: -80,
                            fontSize: 12,
                            height: 27,
                          }}
                        >
                          <option className="">10mg 1017 in stock</option>
                          <option value="1">20mg 1256 in stock</option>
                        </Form.Select>
                        <button
                          style={{ height: 27, fontSize: 12 }}
                          className="btn btn-dark p-1"
                          id="button-addon2"
                        >
                          £4.32+VAT
                        </button>
                      </InputGroup>
                    </td>
                    <td>
                      <p className="fs-6 p-2 font-bold text-success">
                        In Stock
                      </p>
                    </td>
                    <td className="p-2" style={{ marginTop: 0 }}>
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
                      </div>
                    </td>
                    <td>
                      <button
                        class="btn btn-danger text-white rounded-full"
                        style={{ fontSize: 14 }}
                      >
                        Add to Order
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="d-flex col ">
                      <img
                        width={50}
                        src="https:ik.imagekit.io/p2slevyg1/c2.jpeg?updatedAt=1701355717698"
                      />
                      <p className="ml-2">
                        SKE CRYSTAL - Apple <br /> Peach
                      </p>
                    </td>
                    <td className="col-lg-2">
                      <InputGroup style={{ fontSize: 12 }}>
                        <Form.Select
                          aria-label="Default select example"
                          class="border  border-slate-500 p-1"
                          style={{
                            width: 141,
                            marginLeft: -80,
                            fontSize: 12,
                            height: 27,
                          }}
                        >
                          <option className="">10mg 1017 in stock</option>
                          <option value="1">20mg 1256 in stock</option>
                        </Form.Select>
                        <button
                          style={{ height: 27, fontSize: 12 }}
                          className="btn btn-dark p-1"
                          id="button-addon2"
                        >
                          £4.32+VAT
                        </button>
                      </InputGroup>
                    </td>
                    <td>
                      <p className="fs-6 p-2 font-bold text-success">
                        In Stock
                      </p>
                    </td>
                    <td className="p-2" style={{ marginTop: 0 }}>
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
                      </div>
                    </td>
                    <td>
                      <button
                        class="btn btn-danger text-white rounded-full"
                        style={{ fontSize: 14 }}
                      >
                        Add to Order
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="d-flex col ">
                      <img
                        width={50}
                        src="https:ik.imagekit.io/p2slevyg1/c2.jpeg?updatedAt=1701355717698"
                      />
                      <p className="ml-2">
                        SKE CRYSTAL - Apple <br /> Peach
                      </p>
                    </td>
                    <td className="col-lg-2">
                      <InputGroup style={{ fontSize: 12 }}>
                        <Form.Select
                          aria-label="Default select example"
                          class="border  border-slate-500 p-1"
                          style={{
                            width: 141,
                            marginLeft: -80,
                            fontSize: 12,
                            height: 27,
                          }}
                        >
                          <option className="">10mg 1017 in stock</option>
                          <option value="1">20mg 1256 in stock</option>
                        </Form.Select>
                        <button
                          style={{ height: 27, fontSize: 12 }}
                          className="btn btn-dark p-1"
                          id="button-addon2"
                        >
                          £4.32+VAT
                        </button>
                      </InputGroup>
                    </td>
                    <td>
                      <p className="fs-6 p-2 font-bold text-success">
                        In Stock
                      </p>
                    </td>
                    <td className="p-2" style={{ marginTop: 0 }}>
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
                      </div>
                    </td>
                    <td>
                      <button
                        class="btn btn-danger text-white rounded-full"
                        style={{ fontSize: 14 }}
                      >
                        Add to Order
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="d-flex col ">
                      <img
                        width={50}
                        src="https:ik.imagekit.io/p2slevyg1/c2.jpeg?updatedAt=1701355717698"
                      />
                      <p className="ml-2">
                        SKE CRYSTAL - Apple <br /> Peach
                      </p>
                    </td>
                    <td className="col-lg-2">
                      <InputGroup style={{ fontSize: 12 }}>
                        <Form.Select
                          aria-label="Default select example"
                          class="border  border-slate-500 p-1"
                          style={{
                            width: 141,
                            marginLeft: -80,
                            fontSize: 12,
                            height: 27,
                          }}
                        >
                          <option className="">10mg 1017 in stock</option>
                          <option value="1">20mg 1256 in stock</option>
                        </Form.Select>
                        <button
                          style={{ height: 27, fontSize: 12 }}
                          className="btn btn-dark p-1"
                          id="button-addon2"
                        >
                          £4.32+VAT
                        </button>
                      </InputGroup>
                    </td>
                    <td>
                      <p className="fs-6 p-2 font-bold text-success">
                        In Stock
                      </p>
                    </td>
                    <td className="p-2" style={{ marginTop: 0 }}>
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
                      </div>
                    </td>
                    <td>
                      <button
                        class="btn btn-danger text-white rounded-full"
                        style={{ fontSize: 14 }}
                      >
                        Add to Order
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default TradeListView;
