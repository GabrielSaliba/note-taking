import CancelButton from "../atoms/CancelButton";
import ConfirmButton from "../atoms/ConfirmButton";


interface ModalProps {
  id: string;
  title?: string;
  description?: string;
  callback?: () => void;
}

const Modal: React.FC<ModalProps> = ({id, title, description, callback}) => {

  return (
    <>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{description}</p>
          <div className="modal-action">
            <form method="dialog" className="gap-1 flex">
              <ConfirmButton icon callback={callback}/>
              <CancelButton icon/>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default Modal;