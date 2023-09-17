import { signIn, signOut, useSession } from "next-auth/react"
import Modal from "../molecules/Modal";

export const Header = () => {
  const { data: sessionData } = useSession();
  const modalId = "headerModal"

  const handleModal = () => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    modal.showModal();
  }

  return (

    <div className="navbar bg-primary text-primary-content">
      <Modal id={modalId} callback={() => void signOut()} title="Sair" description="Tem certeza que deseja sair?" />

      <div className="flex-1 pl-5 text-3xl font-bold">
        {sessionData?.user?.name ? `Notes` : ""}
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown-end dropdown">
          {sessionData?.user ? (
            <div className="flex text-center gap-4">
              <p className="self-center">Olá, {sessionData?.user?.name?.split(" ")[0]}</p>
              <label className="btn-ghost btn-circle avatar btn relative top-0.5" tabIndex={0} onClick={handleModal}>
                <div className="w-10 rounded-full">
                  <img src={sessionData?.user?.image ?? ""} alt={sessionData?.user?.name ?? ""} />
                </div>
              </label>
            </div>
          ) : (
            <button className="btn-ghost rounded-btn btn" onClick={() => void signIn()}> Entrar </button>
          )}
        </div>
      </div>
    </div>
  )
}