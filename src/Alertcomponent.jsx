import { useState } from "react"
import ModalOverlay from "./modaloverlay.jsx"

function AlertModal(){
    const [isModalVisible, setModalVisible] = useState(false)

    const handleViewDocsClick = () => {
        setModalVisible(true)
    }

    const handleCloseModal = () => {
        setModalVisible(false)
    }

    return(
        <div className="alert-container">
            <div className="alert-dialog-and-text">
                <div className="alert-heading">
                    <h1>Alert Dialog</h1>
                </div>

                <div className="dialog-text">
                    <p>A modal dialog that interrupts the user with important content and expects a response</p>
                </div>
            </div>

            <div className="alert-container-button">
                <button onClick={handleViewDocsClick}>
                    View docs
                </button>
            </div>

            {/* Render ModalOverlay as an overlay on top */}
            {isModalVisible && <ModalOverlay onClose={handleCloseModal} />}
        </div>
    )
}

export default AlertModal