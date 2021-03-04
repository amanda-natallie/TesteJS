import React from "react";
import "./styles.css";

const Loader = ({ timer = "" }) => <div className="loader">{timer}</div>;

export default Loader;
