import React, {useState} from 'react';
import StartPage from './components/StartPage/StartPage'
import QuestionPage from './components/QuestionPage/QuestionPage'
import FarewellPage from './components/FarawellPage/FarewellPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {

  const [result, setResult] = useState({ id: undefined, pollResult: [] })


  const initialData = {
    id: 1,
    organization_name: 'Tap30',
    organization_name_fa: 'تپسی',
    design_statics: {
      logo_url: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGru99VZdwbGw/company-logo_200_200/0?e=2159024400&v=beta&t=zejZRsZxJ0xgLz1K5-UzmoaaYoSDdqNz0-N8NoQUkRk',
      background_url: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    },
    MAX_QUESTION_NUMBER: 3,
    questions: [
      {
        question_title: 'حالت چطوره؟',
        options: [
          {
            option_number: 1,
            option: 'خوبه'
          }, {
            option_number: 2,
            option: 'بد نیستم'
          }, {
            option_number: 3,
            option: "هی میگذره"
          }
        ]
      }, {
        question_title: 'آیا از زمان انتظار برای پیدا شدن سفیر تپ‌سی راضی هستید؟ ',
        options: [
          {
            option_number: 1,
            option: 'راضی ام'
          }, {
            option_number: 2,
            option: 'نه ولی اوکیه'
          }, {
            option_number: 3,
            option: 'آشغاله'
          }
        ]
      }, {
        question_title: 'مشکل چی بود؟',
        options: [
          {
            option_number: 1,
            option: 'کولر نداشت'
          }, {
            option_number: 2,
            option: 'صدای موسیقی زیاد بود'
          }, {
            option_number: 3,
            option: 'چی بگم والا!'
          }
        ]
      }, {
        question_title: 'میخوای بری؟',
        options: [
          {
            option_number: 1,
            option: 'اره'
          }, {
            option_number: 2,
            option: 'نه'
          }, {
            option_number: 3,
            option: 'به تو چه!'
          }
        ]
      }
    ],
    result: {...result}
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/Questions">
          <QuestionPage initialData={initialData} setResult={setResult} result={result} />
        </Route>
        <Route exact path="/Farewell">
          <FarewellPage initialData={initialData} />
        </Route>
        <Route path="/">
          <StartPage design_statics={initialData.design_statics} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
