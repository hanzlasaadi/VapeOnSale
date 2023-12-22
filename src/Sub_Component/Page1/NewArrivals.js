import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function NewArrivals() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="mt-5">
        <h1 className="text-3xl font-bold text-center">New Arrivals</h1>

        <Carousel responsive={responsive}>
          <div className="p-5">
            <img
              src="https://www.vapeshop.co.uk/cdn/shop/files/sikary-s600-disposable-peach-ice.png?height=1000&v=1700139412&width=1000"
              className="card-img-top border"
              alt="..."
              height="300px"
            />
            <div className="card-body">
              <h5 className="card-title mt-3">
                PEACH ICE SIKARY S600 DISPOSABLE VAPE
              </h5>
              <p className="text-danger ">£4.49</p>
            </div>
          </div>
          <div className="p-5">
            <img
              src="https://www.vapeshop.co.uk/cdn/shop/files/sikary-s600-disposable-bull-ice.png?height=500&v=1700140481&width=500"
              className="card-img-top border"
              alt="..."
              height="300px"
            />
            <div className="card-body">
              <h5 className="card-title mt-3">
                BULL ICE SIKARY S600 DISPOSABLE VAPE
              </h5>
              <p className="text-danger">£4.49</p>
            </div>
          </div>
          <div className="p-5">
            <img
              src="https://www.vapeshop.co.uk/cdn/shop/files/sikary-s600-disposable-kiwi-passion-fruit.png?height=500&v=1700140480&width=500"
              className="card-img-top border"
              alt="..."
              height="300px"
            />
            <div className="card-body">
              <h5 className="card-title mt-3">
                KIWI PASSION SIKARY S600 DISPOSABLE VAPE
              </h5>
              <p className="text-danger">£4.49</p>
            </div>
          </div>
          <div className="p-5">
            <img
              src="https://www.vapeshop.co.uk/cdn/shop/files/sikary-s600-disposable-vanilla-tobacco.png?height=500&v=1700139423&width=500"
              className="card-img-top border"
              alt="..."
              height="300px"
            />
            <div className="card-body">
              <h5 className="card-title mt-3">
                TRIPLE MANGO SIKARY S600 DISPOSABLE VAPE
              </h5>
              <p className="text-danger">£4.49</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default NewArrivals;
