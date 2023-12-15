import React from 'react'
import {useDispatch} from 'react-redux'
import Cell from './cell'
import { Row } from 'react-bootstrap'

function List(props) {
    const {list, lang} = props
    let dispatch = useDispatch()

    return <Row>
        {list.map(function(item, i){
            return <Cell key={i} lang={lang} item={item}></Cell>
        })}
    </Row>
}

export default List