import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (message, op) => {
    toast[op](message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
}

export default notify;