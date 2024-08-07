import { useLocation } from "react-router-dom";

export const useActive = () => {
  const pathname = useLocation().pathname;

  const isActive = (x) => {
    return pathname === x ? true : false;
  };

  return { isActive };
};
