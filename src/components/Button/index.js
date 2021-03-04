import React, { useState, useCallback } from "react";
import "./styles.css";
import Loader from "../Loader";

const Button = () => {
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(10);
  const [textIndicator, setTextIndicator] = useState("Requisitar Ativação");
  const [error, setError] = useState(undefined);

  const sendRequest = useCallback(() => {
    return new Promise((resolve) => {
      setTextIndicator("Carregando...");
      setTimeout(resolve, 1000);
    });
  }, []);

  const handleClick = useCallback(async () => {
    try {
      await sendRequest();
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
    } catch (error) {
      setError("Um erro ocorreu ao processar seu pedido: " + error);
    }
  }, [sendRequest]);

  return (
    <div className="wrapper" id="wrapper">
      {error && <p>error</p>}
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
