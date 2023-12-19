import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'

function Color(props){
    let item = props.item 
    let color_list = item.color
    const [color, setColor] = useState(item.color_chosen ? item.color_chosen : color_list[0])

    function change(new_color){
        let payload = {...item}
        setColor(new_color)
        payload.color_chosen = new_color
        props.update(payload)
    }

    return <>
        {color ? <div className="input-group list_color">            
            <DropdownButton title={color} id="language_button" onSelect={change}>
                {color_list.map(function(item, i){
                    return <Dropdown.Item key={i} eventKey={item}><span>{item}</span></Dropdown.Item>
                })}
            </DropdownButton>
        </div> : null}
    </>
}

export default Color