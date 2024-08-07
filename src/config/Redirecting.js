import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Redirecting = ({ path = "/" }) => {
  const [count, setCount] = useState(5);
  let router = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 && router(path);

    return () => clearInterval(interval);
  }, [count]);

  return <>Loading... - {count} second</>;
};

export default Redirecting;
