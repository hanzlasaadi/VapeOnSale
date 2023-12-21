import {React, useState} from 'react';


function Footer() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item) => {
    // Handle item click logic here
    console.log(`Clicked on ${item}`);
  };
  return (
    <div
    className="footer mb-2 p-3"
    style={{ marginTop: 100, backgroundColor: "black", color: "white" }}
  >










    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-6">
          <img
            src="https://ik.imagekit.io/p2slevyg1/vapelogo-removebg-preview.png?updatedAt=1699537221027"
            className="img-fluid"
          />
        </div>
        <div className="col-lg-2 col-md-6">
          <h5 className>CATEGORY</h5>
          <p className="mt-3">Disposables</p>
          <p className="text-white">E-Liquids</p>
          <p className="text-white">Pods</p>
        </div>
        <div className="col-lg-2 col-md-6">
          <h5 className="text-white">Supporting Links</h5>
          <p className="text-white mt-3">Term &amp; Conditions</p>
          <p className="text-white">Privacy Policy</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white">INFORMATION</h5>
          <p className="text-white mt-3">Contact Us</p>
          <p className="text-white">Wishlist</p>
          <p className="text-white">FAQ’s</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white">Subscribe</h5>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="form-control"
          />
          <p className="text-white">
            Join our newsletter now.Register now to get updates on
            promotions.
          </p>
        </div>
      </div>
      <hr style={{ color: "black" }} />
      <p className="text-white text-center m-0 p-0">
        Copyright © 2023 Vape On Sale. All Rights Reserved
      </p>
    </div>
  </div>
  )
}

export default Footer
