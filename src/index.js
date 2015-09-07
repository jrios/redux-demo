'use strict';

import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';

import YourSurveys from './components/YourSurveys';
import { SurveyBuilder } from './components/SurveyBuilder';
import App from './containers/App';

React.render((
  <Router history={history}>
    <Route component={App}>
      <Route path="/" component={YourSurveys} />
      <Route path="survey-builder" component={SurveyBuilder} />
      <Route path="survey-builder/:id" component={SurveyBuilder} />
    </Route>
  </Router>
), document.getElementById('shell'));