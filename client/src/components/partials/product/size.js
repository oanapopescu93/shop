import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'

function Size(props){
    let item = props.item 
    let size_list = item.size
    const [size, setSize] = useState(item.size_chosen ? item.size_chosen : size_list[0])

    function change(new_size){
        let payload = {...item}
        setSize(new_size)
        payload.size_chosen = new_size
        props.update(payload)
    }

    return <>
        {size ? <div className="input-group list_size">
            <DropdownButton title={size} id="language_button" onSelect={change}>
                {size_list.map(function(item, i){
                    return <Dropdown.Item key={i} eventKey={item}><span>{item}</span></Dropdown.Item>
                })}
            </DropdownButton>
        </div> : null}
    </>
}

export default Size