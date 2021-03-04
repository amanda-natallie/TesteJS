import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";

import "./global.css";
import Loader from "./components/Loader";
import Button from "./components/Button";

function App() {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  const getAuthorization = useCallback(() => {
    return new Promise(() => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          setLoading(false);
          setAuthorized(true);
        } else {
          setLoading(false);
          setAuthorized(false);
        }
      }, 2000);
    });
  }, []);

  useEffect(() => {
    getAuthorization();
  }, [getAuthorization]);

  return loading ? <Loader /> : !authorized ? "Não autorizado" : <Button />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
