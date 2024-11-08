function ActionContent(){
    return(
        <div className="question-container">
            <div className="heading-and-text-container">
                <div className="heading-container">
                    <h2>Are you sure absolutely sure?</h2>
                </div>

                <div className="text-container">
                    <p>This action cannot be undone. This will permanently delete your account and remove your data from our servers</p>
                </div>
            </div>

            <div className="buttons-container">
                <div className="cancel-button-container">
                    <button>Cancel</button>
                </div>

                <div className="continue-button-container">
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default ActionContent