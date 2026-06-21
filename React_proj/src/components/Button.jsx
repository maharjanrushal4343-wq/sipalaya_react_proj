// import React from 'react'
import { FiArrowRight } from "react-icons/fi";

const Button = (props) => {
  return (
    <button className={props.className}>
      {props.text}
      <FiArrowRight />
    </button>
  );
};

export default Button;
