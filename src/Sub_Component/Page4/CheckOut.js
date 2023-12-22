import React from "react";

function CheckOut() {
  return (
      <div className="flex ">
        <div className=" md:w-full lg:w-[900px]  ">
          <Left />
        </div>
        <div className=" lg:w-[700px] ">
          <Right />
        </div>
      </div>
  );
}

export default CheckOut;

// import React from "react";

// const CheckOut = () => {
//   return <div>checkout</div>;
// };

// export default CheckOut;
