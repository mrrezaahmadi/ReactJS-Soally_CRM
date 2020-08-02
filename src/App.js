import React from 'react';
import { Button, Container } from 'reactstrap'
import './App.scss'


function App() {
  return (
    <Container>
      <div className="start-page">
        <section className="main">
          <div className="start-page--title">فرم نظرسنجی و ارتقا سطح خدمت رسانی </div>
          <div className="logo">logo placeholder</div>
          <button className="start-page--button">شروع</button>
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
  );
}

export default App;
