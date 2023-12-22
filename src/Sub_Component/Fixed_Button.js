import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { MdOutlineArrowUpward } from "react-icons/md";

function HelpBtn() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <div className="fixed z-10  bottom-10 right-10">
      <Button
        style={{
          border: 0,
          width: 60,
          height: 60,
          borderRadius: 50,
          backgroundColor: "black",
          margin: "0px 37px 20px 0px",
          position: "fixed",
        }}
        className="absolute bottom-0 right-5 "
        onClick={scrollToTop}
      >
        <h2
          style={{ marginTop: 6, padding: 3 }}
          className="  mt-2 ml-0  text-3xl"
        >
        <MdOutlineArrowUpward />
        </h2>
      </Button>

   
    </div>
  );
}

export default HelpBtn;
