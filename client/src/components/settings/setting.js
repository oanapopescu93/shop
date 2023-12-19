import React from 'react'
import { useDispatch } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { changeCurrency } from '../../reducers/settings';
import { changeLanguage } from '../../reducers/settings';

function Setting(props) {
  const {title, array, id, template} = props
	let dispatch = useDispatch()  

  function handleSelect(choice){
    switch(template){
        case "currency":
            dispatch(changeCurrency(choice))
            break
        case "language":
            dispatch(changeLanguage(choice))
            break
        default:
    }		
  }

  return <div className={"settings_"+template}>
    <div className={template}>
      <DropdownButton title={title} id={id} onSelect={handleSelect}>
        {array.map(function(item, i){
          return <Dropdown.Item key={i} eventKey={item}><span>{item}</span></Dropdown.Item>
        })}
      </DropdownButton>
    </div>
  </div>
}

export default Setting