import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./global.css";
import loader from "./img/loader.gif";

function App() {
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(10);
  const [textIndicator, setTextIndicator] = useState("Requisitar Ativação");
  const [loading, setLoading] = useState(true);
  const [noAuthorized, setNoAuthorized] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  const sendRequest = () => {
    return new Promise((resolve) => {
      setTextIndicator("Carregando...");
      setTimeout(resolve, 1000);
    });
  };

  const handleClick = () => {
    sendRequest().then(() => {
      setTextIndicator("por favor aguarde...");
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

  const getAuthorization = () => {
    return new Promise(() => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          setLoading(false);
        } else {
          setLoading(false);
          setNoAuthorized(true);
        }
      }, 1000);
    });
  };

  useEffect(() => {
    pageLoaded && getAuthorization();
    setPageLoaded(true);
  }, [pageLoaded]);

  return (
    <>
      {loading ? (
        <img src={loader} width="50" alt="" />
      ) : !noAuthorized ? (
        <>
          <button disabled={disabled} onClick={() => handleClick()}>
            {textIndicator}
          </button>
          {disabled && timer}
        </>
      ) : (
        "Não autorizado"
      )}
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
