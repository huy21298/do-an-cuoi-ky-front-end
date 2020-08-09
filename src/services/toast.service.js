import { toast } from "react-toastify";

export function showToastSuccess(msg, position = "top-right", autoClose = 2000) {
  toast.success(msg, {
    position,
    autoClose,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

export function showToastError(msg,  autoClose = 2000, position = "top-right") {
  toast.error(msg, {
    position,
    autoClose,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}
