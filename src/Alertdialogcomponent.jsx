import AlertModal from "./Alertcomponent.jsx"
import ActionContent from "./Questioncomponent.jsx"


function AlertDialogue(){
    
    return(
        <div className="alert-and-question-container">
            <AlertModal />

            <ActionContent />
        </div>
    )
}

export default AlertDialogue