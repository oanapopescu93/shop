import React from 'react'
import { translate } from '../../../translations/translate'
import Cell from './cell'

function List(props) {
    const {lang, itemList, template} = props

    function handleClick(id){
        if(props.handleClick && typeof props.handleClick === "function"){
            props.handleClick(id)
        }
    }

	return <>
        {(() => {
            if(template){
                return <>
                    {itemList.map(function(item, i){
                        return <div key={i} className='item'>
                            <Cell index={i+1} lang={lang} data={item} template={template} handleClick={(e)=>handleClick(e)}></Cell>
                        </div>
                    })}
                </>
            } else {
                return <p>{translate({lang: lang, info: "no_data"})}</p>
            }
        })()}        
    </>
}

export default List