import { toast } from "react-toastify";

export function showToastSuccess({ msg, position, autoClose }) {
  toast.success(msg, {
    position,
    autoClose,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

export function showToastError({ msg, position, autoClose }) {
  toast.error(msg, {
    position,
    autoClose,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}
