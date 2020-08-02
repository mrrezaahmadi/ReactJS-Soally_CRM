import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './FarewellPage.scss'

function FarewellPage({ initialData }) {
    return (
        <Container className="FarewellPage">
                <div className="farewell-page">
                    <section className="main mt-md-5">
                        <div className="farewell-page--title">با تشکر از وقتی که صرف پاسخگویی به سوالات کردید. </div>
                        <div className="logo d-none d-md-block mt-md-5">
                            <img src={initialData.design_statics.logo_url} />
                        </div>

                    </section>
                    <footer>
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

export default FarewellPage



{/* <>
            <h1>result is:</h1>
            {initialData.questions.map((question, index) => {
                return (
                    <p key={index}>{question.question_title} {result.pollResult[index]}</p>
                )
            })}
        </> */}