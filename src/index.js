import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./global.css";
import Loader from "./components/Loader";
import Button from "./components/Button";

function App() {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);

  const getAuthorization = () => {
    return new Promise(() => {
      setTimeout(() => {
        if (1 > 0.5) {
          setLoading(false);
        } else {
          setLoading(false);
          setAuthorized(false);
        }
      }, 2000);
    });
  };

  useEffect(() => {
    pageLoaded && getAuthorization();
    setPageLoaded(true);
  }, [pageLoaded]);

  return (
    <>{loading ? <Loader /> : !authorized ? "Não autorizado" : <Button />}</>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
