import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Modal} from "react-bootstrap"

import { changePopup } from "../../reducers/popup"

import Default from "./default"

function Popup(props){
    const {lang, date, currency, socket, home} = props
    let open = useSelector(state => state.popup.open)
    let title = useSelector(state => state.popup.title)
    let template = useSelector(state => state.popup.template)
    let data = useSelector(state => state.popup.data)
    let size = useSelector(state => state.popup.size)
    let sticky = useSelector(state => state.popup.sticky)
    let dispatch = useDispatch()

  	function closeModal(){
        if(template !== "isMinor"){ //prevents modal from closing without making a choice
            dispatch(changePopup(false))
        }
	}

    return <Modal id="myModal" className={"mymodal " + template} show={open} onHide={closeModal} size={size} centered> 
            {title !== "" ? <Modal.Header>
                {!sticky ? <div className="closeButton closeButtonHeader" onClick={closeModal}>
                    <span>X</span>
                </div> : null}                
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header> : null}  
            <Modal.Body>
                {title === "" && !sticky ? <div className="closeButton" onClick={closeModal}>
                    <span>X</span>
                </div> : null}
                {(() => {					
                    switch (template) {  
                        case "error":
                        default:
                            if(typeof data === "string"){
                                return <Default lang={lang} text={data}></Default>
                            }
                            return null
                            
                    }
                })()}
            </Modal.Body>
    </Modal>
}
export default Popup