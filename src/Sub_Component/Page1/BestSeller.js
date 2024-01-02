import React from "react";
import "./BestSeller.css";
import { data } from "../../data/data.js";
import { Link, Outlet } from "react-router-dom";
// import ProductPage2 from './ProductPage2';

function BestSeller() {
  const project = data;

  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold text-center p-5">Best Sellers</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mx-5">
          {project.map((item, index) => (
            <div
              key={index}
              class="d-flex flex-col justify-center items-center"
            >
              <img
                src={item.image}
                className="card-img-top rounded-3"
                alt="..."
              />

              <div className="card-body px-0">
                <h5 className="card-title py-2 text-xl-start font-bold fs-6">
                  {item.name}
                </h5>
              </div>
              <div className="bg-white">
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/productPage2">
                    <button className="skewed-button">
                      <b>Retail Price: {item.price}</b>
                    </button>
                  </Link>
                  <Link to="/trade">
                  <button className="skewed-button1">
                    <b>Trade Button</b>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default BestSeller;
