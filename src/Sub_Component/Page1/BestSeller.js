import React from 'react';
import "./BestSeller.css";
import { Outlet, Link } from 'react-router-dom';
// import ProductPage2 from './ProductPage2';

function BestSeller() {
  return (
    <div>
       <div className="">
          <h1 className="text-3xl font-bold text-center p-5">Best Sellers</h1>
          <div className="card-group gap-4 px-5 mx-5">
            <div className="card border-0 rounded-3">
              <img
                src="https://ik.imagekit.io/2nuimwatr/xske-crystal-bar-600-einweg-vape-cherry-ice.jpg.pagespeed.ic.3ARlV_VdNy.webp?updatedAt=1699277267342"
                className="card-img-top rounded-3"
                alt="..."
              />
              
              <div className="card-body px-0">
                <h5 className="card-title p-0 text-xl-start font-bold fs-6">
                  Cherry Ice NIC Salt by SKE Crystal 10ml
                </h5>
              </div>
              <div className="bg-white" style={{ marginTop: "-10px" }}>
                <div className="d-flex justify-content-between align-items-center">
                <Link to="/ProductPage2"><button className="skewed-button">Retail Price: £4.32</button></Link>
                  <button className="skewed-button1">Trade Button</button>
                </div>
              </div>
            </div>
            <div className="card border-0 rounded-3">
              <img
                src="https://ik.imagekit.io/2nuimwatr/WhatsApp%20Image%202023-11-06%20at%206.09.14%20PM.jpeg?updatedAt=1699277277020"
                className="card-img-top rounded-3"
                alt="..."
              />
              <div className="card-body px-0">
                <h5 className="card-title p-0 text-xl-start font-bold fs-6">
                  Blue Fusion SKE Crystal Bar 600 Disposable Vape
                </h5>
              </div>
              <div className="bg-white" style={{ marginTop: "-10px" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="skewed-button">Retail Price: £4.32</button>
                  <button className="skewed-button1">Trade Button</button>
                </div>
              </div>
            </div>
            <div className="card border-0 rounded-3">
              <img
                src="https://ik.imagekit.io/2nuimwatr/WhatsApp%20Image%202023-11-06%20at%206.09.14%20PM%20(1).jpeg?updatedAt=1699277277466"
                className="card-img-top rounded-3"
                alt="..."
              />
              <div className="card-body px-0">
                <h5 className="card-title p-0 text-xl-start font-bold fs-6">
                  Vimto Bull Ice Crystal Bar 600 Disposable Vape
                </h5>
              </div>
              <div className="bg-white" style={{ marginTop: "-10px" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="skewed-button">Retail Price: £4.32</button>
                  <button className="skewed-button1">Trade Button</button>
                </div>
              </div>
            </div>
            <div className="card border-0 rounded-3">
              <img
                src="https://ik.imagekit.io/2nuimwatr/WhatsApp%20Image%202023-11-06%20at%206.09.14%20PM%20(2).jpeg?updatedAt=1699277268299"
                className="card-img-top rounded-3"
                alt="..."
              />
              <div className="card-body px-0">
                <h5 className="card-title p-0 text-xl-start font-bold fs-6">
                  Watermelon Ice Crystal Bar 600 Disposable Vape
                </h5>
              </div>
              <div className="bg-white" style={{ marginTop: "-10px" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="skewed-button">Retail Price: £4.32</button>
                  <button className="skewed-button1">Trade Button</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
    </div>
  )
}

export default BestSeller
