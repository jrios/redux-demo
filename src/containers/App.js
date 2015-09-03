'use strict';

import React, { Component } from 'react';
import NewSurvey from '../components/NewSurvey';
import YourSurveys from '../components/YourSurveys';

var surveys = [
  {
    title: 'Stub Survey'
  },
  {
    title: 'Stub Survey 2'
  }
];

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="eight columns">
          <NewSurvey />
        </div>
        <div className="four columns">
          <YourSurveys surveys={surveys} />
        </div>
      </div>
    );
  }
};