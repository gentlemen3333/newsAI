import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  const history = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 && history("/");
    return () => clearInterval(interval);
  }, [count, history]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        backgroundColor: "black",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "50px",
      }}
    >
      <p>Redirecting you in {count} seconds</p>
    </div>
  );
};

export default LoadingToRedirect;
