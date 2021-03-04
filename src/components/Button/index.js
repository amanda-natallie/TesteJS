import React, { useState } from "react";
import "./styles.css";
import Loader from "../Loader";

const Button = () => {
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(10);
  const [textIndicator, setTextIndicator] = useState("Requisitar Ativação");

  const sendRequest = () => {
    return new Promise((resolve) => {
      setTextIndicator("Carregando...");
      setTimeout(resolve, 1000);
    });
  };

  const handleClick = () => {
    sendRequest().then(() => {
      setTextIndicator("Por favor aguarde...");
      setDisabled(true);
      const cowntdown = setInterval(function () {
        setTimer((prev) => prev - 1);
      }, 1000);
      setTimeout(() => {
        setTextIndicator("Requisitar ativação");
        clearInterval(cowntdown);
        setDisabled(false);
        setTimer(10);
      }, 10000);
    });
  };

  return (
    <div className="wrapper">
      {disabled && (
        <>
          <Loader />
          <p className="timer">{timer}</p>
        </>
      )}
      <button disabled={disabled} onClick={() => handleClick()}>
        {textIndicator}
      </button>
    </div>
  );
};

export default Button;
