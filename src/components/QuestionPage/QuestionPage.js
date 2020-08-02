import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './QuestionPage.scss'
import { Redirect } from 'react-router-dom'

function QuestionPage({ initialData }) {

    let [questionCounter, setQuestionCounter] = useState(0)
  const [result, setResult] = useState({ id: undefined, pollResult: [] })
    

    const handleNext = (e, id, index) => {
        setResult({ id: id, pollResult: [...result.pollResult, e.target.textContent] })

        document.querySelector(`#option${index}`).classList.add('active')

        setTimeout(() => {
            setQuestionCounter(++questionCounter)
            if (questionCounter <= initialData.MAX_QUESTION_NUMBER) {
                document.querySelector(`#option${index}`).classList.remove('active')
            }
        }, 500);
    };


    return (
        <Container>
            <div className="QuestionPage">
                <header></header>
                <section className="main">
                    {questionCounter > initialData.MAX_QUESTION_NUMBER ? <Redirect to="/Farewell"/> : <section className="question-page-main mt-md-5">
                            <div className="question-page-main--title">
                                <p>{initialData.questions[questionCounter].question_title}</p>
                            </div>
                            <div className="question-page-main--options">
                                <Row style={{ width: '100%' }} className="d-md-flex justify-content-between">
                                    {initialData.questions[questionCounter].options.map((option, index) => {
                                        return (
                                            <Col key={index} md='3' sm='12'>
                                                <button className="question-page-main--button mt-md-5 " id={`option${index}`} onClick={(e) => handleNext(e, initialData.id, index)}>{option.option}</button>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </div>
                        </section>}
                </section>
                <footer >
                    <Row className='d-md-flex justify-content-between'>
                        <Col xs={12} md={6}>
                            <div className="footer-logo">
                                <img src={initialData.design_statics.logo_url} />
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="question-page-footer">
                                <div className="footer-header">
                                    <div className="footer-header--title">قدرت گرفته از</div>
                                    <button className='footer-header--title--logo'>Soally</button>
                                </div>
                                <div className="footer--subtitle">پلتفرم طراحی فرم‌های CRM</div>
                            </div>
                        </Col>
                    </Row>
                </footer>

            </div>
        </Container>
    )
}

export default QuestionPage
