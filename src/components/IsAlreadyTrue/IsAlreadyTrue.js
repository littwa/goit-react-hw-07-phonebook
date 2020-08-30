import React from "react";
import isAlreadyCSS from "./isAlreadyTrue.module.css";

let IsAlreadyTrue = ({ onChangeIsAlready }) => {
 setTimeout(onChangeIsAlready, 3000);
 return <p className={isAlreadyCSS.p}> Contact already exists!</p>;
};

export default IsAlreadyTrue;
