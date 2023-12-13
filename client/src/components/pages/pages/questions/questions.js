import React, {useState} from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { changePage } from '../../../../reducers/page'
import { translate } from '../../../../translations/translate'
import { capitalizeFirstLetter } from '../../../../utils/utils'

function QuestionList(props){
    const {list} = props
    const [index, setIndex] = useState({i:0, j: 0})
    let list_title = Object.getOwnPropertyNames(list)

    function handleDropdown(x){
        console.log('handleDropdown ', x)
        setIndex(x)
    }

    return <Row>
        <Col sm={2}>{index.i} {index.j}</Col>
        <Col sm={8}>
            {list_title.map(function(x, i){
                let title = capitalizeFirstLetter(x.split('_').join(' '))
                let sublist = list[x]
                return <div key={i} className="question_subcategory">
                    <h2>{title}</h2>
                    {sublist.map(function(item, j){
                        let question = item.question
                        let answer = item.answer
                        return <div key={j} className="question_box">
                            <div className="question_container">
                                <div className="question_title shadow_convex" onClick={()=>handleDropdown({i, j})}>{question}</div>
                            </div>
                            {(() => {
                                let open = ""
                                if(i === index.i && j === index.j){
                                    open = "open"
                                }
                                return <div box={j} className={"answer_container " + open}>{answer}</div>
                            })()}
                        </div>
                    })}
                </div>
            })}
        </Col>
        <Col sm={2}></Col>
    </Row>
}

function Questions(props){
    const {settings, home} = props
    let lang = settings.lang
    let questions = home.questions
    let dispatch = useDispatch()

    function handleBack(){
        dispatch(changePage('Home'))
    }

    return <div className="content_wrap">
        <div className="page_content">
            {questions && questions[0] && questions[0][lang] ? <QuestionList lang={lang} list={questions[0][lang]}></QuestionList> : <p>{translate({lang: lang, info: "under_construction111"})}</p>}
        </div>
        <div className="text_center">
            <Button type="button" onClick={()=>handleBack()} className="mybutton round button_transparent shadow_convex">
                {translate({lang: lang, info: "back"})}
            </Button>
        </div>
    </div>
}
export default Questions