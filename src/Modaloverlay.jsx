
import ModalContainer from "./modal.jsx"

function ModalOverlay({ onClose }){
        
    return(
        <div className="modal-overlay-container" onClick = {onClose}>
            <div onClick = {(e) => e.stopPropagation()}>
            <ModalContainer />

                <i onClick = {onClose} class="fa-solid fa-xmark"></i>
           </div>
        </div>

    )
}

export default ModalOverlay