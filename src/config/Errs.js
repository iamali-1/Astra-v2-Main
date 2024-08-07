import toast from "react-hot-toast";

export const Err = (err) => {
  if (err?.response?.status === 404) return toast.error("User not found");
  else if (err?.response?.status === 400) return toast.error(err?.response?.statusText);
  else if (err?.response?.status === 401) return toast.error(err?.response?.statusText);
};
