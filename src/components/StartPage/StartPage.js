import React from 'react'
import { Container } from 'reactstrap'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import "./StartPage.scss"

function StartPage({logo_url}) {
    return (
        <Container className="StartPage">
            <div className="start-page">
            <section className="main mt-md-5">
                        <div className="start-page--title">فرم نظرسنجی و ارتقا سطح خدمت رسانی </div>
                        <div className="logo d-none d-md-block mt-md-5">
                            <img src={logo_url} />
                        </div>

                    <Link to="/Questions">
                        <button className="start-page--button">شروع</button>
                    </Link>
                    </section>
                <footer className="footer">
                    <div className="footer-header">
                        <div className="footer-header--title">قدرت گرفته از</div>
                        <button className='footer-header--title--logo'>Soally</button>
                    </div>
                    <div className="footer--subtitle">پلتفرم طراحی فرم‌های CRM</div>
                </footer>
            </div>
        </Container>
    )
}

export default StartPage
