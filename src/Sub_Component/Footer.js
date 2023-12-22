import { React, useState } from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div class="footer-dark bg-[#EBEBEB] mt-5">
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-md-3 item">
                <h3>ABOUT US</h3>
                <ul>
                  <li>
                    <a href="#">Batter Safety</a>
                  </li>
                  <li>
                    <a href="#">Battery Policy</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Price Match</a>
                  </li>
                  <li>
                    <a href="#">Deals</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-6 col-md-3 item">
                <h3>SHOP</h3>
                <ul>
                  <li>
                    <a href="#">Disposables</a>
                  </li>
                  <li>
                    <a href="#">Eliquids</a>
                  </li>
                  <li>
                    <a href="#">Vape Kits</a>
                  </li>
                  <li>
                    <a href="#">Tanks</a>
                  </li>
                  <li>
                    <a href="#">Deals</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 item text">
                <h3>Vape On Sale</h3>
                <p>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                  quis tristique lectus. Aliquam in arcu eget velit pulvinar
                  dictum vel in justo.
                </p>
              </div>
              <div class="col item social">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                <FaInstagram />
                </a>
                <a href="#">
                <FaSnapchat />
                </a>
                <a href="#">
                <FaTwitter />
                </a>
              </div>
            </div>
            <p class="copyright ">
              {" "}
              Copyright © 2023 Vape On Sale. All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </>
    // <div
    //   className="footer mb-2 p-3"

    // >
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-2 col-md-6">
    //         <img
    //           src="https://ik.imagekit.io/p2slevyg1/vapelogo-removebg-preview.png?updatedAt=1699537221027"
    //           className="img-fluid"
    //         />
    //       </div>
    //       <div className="col-lg-2 col-md-6">
    //         <h5 className>CATEGORY</h5>
    //         <p className="mt-3">Disposables</p>
    //         <p className="text-white">E-Liquids</p>
    //         <p className="text-white">Pods</p>
    //       </div>
    //       <div className="col-lg-2 col-md-6">
    //         <h5 className="text-white">Supporting Links</h5>
    //         <p className="text-white mt-3">Term &amp; Conditions</p>
    //         <p className="text-white">Privacy Policy</p>
    //       </div>
    //       <div className="col-lg-3 col-md-6">
    //         <h5 className="text-white">INFORMATION</h5>
    //         <p className="text-white mt-3">Contact Us</p>
    //         <p className="text-white">Wishlist</p>
    //         <p className="text-white">FAQ’s</p>
    //       </div>
    //       <div className="col-lg-3 col-md-6">
    //         <h5 className="text-white">Subscribe</h5>
    //         <input
    //           type="text"
    //           placeholder="Enter Your Email"
    //           className="form-control"
    //         />
    //         <p className="text-white">
    //           Join our newsletter now.Register now to get updates on promotions.
    //         </p>
    //       </div>
    //     </div>

    //     <hr style={{ color: "black" }} />
    //     <p className="text-white text-center m-0 p-0">
    //       Copyright © 2023 Vape On Sale. All Rights Reserved
    //     </p>
    //   </div>
    // </div>
  );
}

export default Footer;
