function ModalContainer(){
    return(
        <div className="modal-container">
            <div className="modal-heading-and-text-container">
                <div className="modal-heading-container">
                    <h2>Are you sure absolutely sure?</h2>
                </div>

                <div className="modal-text-container">
                    <p>This action cannot be undone. This will permanently delete your account and remove your data from our servers</p>
                </div>
            </div>

            <div className="modal-buttons-container">
                <div className="modal-cancel-button-container">
                    <button>Cancel</button>
                </div>

                <div className="modal-continue-button-container">
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default ModalContainer