import React from 'react'
import { render } from 'react-dom'
import owncss from './modules/own.css';
import muijs from '/node_modules/muicss/dist/js/mui.min.js'
import App from './modules/App'
import { Router, Route, useRouterHistory, IndexRedirect, Link } from 'react-router';
import { createHashHistory } from 'history';
import Official from './modules/official'
import Inquire from './modules/inquire'
import Childsite from './modules/childsite'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

render((
  <Router history={appHistory}>
    <Route path="/" component={Official}>
      <IndexRedirect to="/official"/>
    </Route>
    <Route path="/official" component={Official}/>
    <Route path="/inquire" component={Inquire}/>
    <Route path="/childsite" component={Childsite}/>
  </Router>
), document.getElementById('app'))
