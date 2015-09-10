'use strict';

import React, { Component } from 'react';

import { Router, Route } from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';

import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';

import { devTools } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import YourSurveysContainer from './containers/YourSurveysContainer';
import SurveyBuilderContainer from './containers/SurveyBuilderContainer';
import App from './containers/App';
  
import rootReducer from './reducers/superSurvey';

var history = createHistory();
var createComposedStore = compose(devTools())(createStore);

var store = createComposedStore(rootReducer);

React.render((
  <div>
    <Provider store={store}>
    {() => 
      <Router history={history}>
        <Route component={App}>
          <Route path="/" component={YourSurveysContainer} />
          <Route path="survey-builder" component={SurveyBuilderContainer} />
          <Route path="survey-builder/:id" component={SurveyBuilderContainer} />
        </Route>
      </Router>
    }
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} visibleOnLoad={true} />
    </DebugPanel>
  </div>
), document.getElementById('shell'));