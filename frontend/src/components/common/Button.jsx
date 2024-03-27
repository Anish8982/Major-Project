import React from "react";

// Assuming primary is a CSS class you intend to conditionally apply
const primary = "text-m rounded-md cursor-pointer hover:bg-purple-800 bg-purple-500  text-white flex items-center justify-center px-3 py-2 transition-all duration-100"; // Corrected "bg-gren-200" to "bg-green-200"

const Button = ({ name, className, style }) => {
  // Apply the `primary` class if `style` prop is "primary", else use `className`
  const buttonClass = style === "primary" ? primary : className;
  return (

    <button className={buttonClass}>
      {name}
      <div className=" "></div>
          </button>
  );
};

export default Button;
