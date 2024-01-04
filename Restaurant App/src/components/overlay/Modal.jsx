import { createPortal } from "react-dom";
import Cart from "./cart";
const Modal = () => {
  const Modaldiv = document.getElementById("modal");
  return (
    <div class="modal-dialog modal-dialog-centered">
      {createPortal(<Cart></Cart>, Modaldiv)}
    </div>
  );
};
export default Modal;
