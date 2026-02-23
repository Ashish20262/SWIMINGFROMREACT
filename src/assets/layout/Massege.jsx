import { Bounce, toast } from "react-toastify";

function Success(message) {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    theme: "dark",
    transition: Bounce,
  });
}

function Error(message) {
  toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    theme: "dark",
    transition: Bounce,
  });
}

export { Success, Error };
