import modalImg from "../assets/Group.png";
import { useNavigate } from "react-router-dom";
const Modal = () => {
  const navigate = useNavigate();
  return (
    <div>
      <dialog id="my_modal_5" className="modal  sm:modal-middle">
        <div className="modal-box">
          <div className="flex flex-col justify-center items-center gap-4">
            <img src={modalImg} alt="" className="h-20" />
            <h3 className="font-bold text-lg">Congratulations!</h3>
            <p className="">Payment Successful.</p>
          </div>
          <div className="modal-action justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-outline hover:bg-[#731fb8]"
                onClick={() => navigate("/")}
              >
                Back to Home
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
