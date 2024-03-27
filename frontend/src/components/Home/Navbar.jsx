import React from "react";
import img1 from "../../../assets/img1.png";
import Button from "../common/Button";

function Navbar() {
  return (
    <>
      <div className="flex justify-between">
        <img src={img1} alt="" />
        <ul className="flex gap-6 ">
          <li>Lab Test At Home</li>
          <li>Online Consultations</li>
          <li>Shope By Category</li>
          <li>Download Report</li>
          <li><Button name="Login/Signup" style="primary" /></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
