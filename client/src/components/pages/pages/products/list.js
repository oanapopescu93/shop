import React from 'react'
import Cell from './cell'
import { Row } from 'react-bootstrap'

function List(props) {
    const {list, lang} = props

    return <div className="products_list_container">
        <div className="products_list">
            <Row>
                {list.map(function(item, i){
                    return <Cell key={i} lang={lang} item={item}></Cell>
                })}
            </Row>
        </div>
    </div>
}

export default List