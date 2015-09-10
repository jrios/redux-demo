'use strict';

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import NewSurvey from '../components/NewSurvey';
import Survey from '../components/Survey';

class YourSurveys extends Component {
  render() {
    var surveys = this.props.surveys;

    var surveyComponents = surveys.map(survey => {
      return <Survey key={survey.id} survey={survey} onSurveyDeleted={this.props.onSurveyDeleted} onSurveyPublished={this.props.onSurveyPublished} />;
    });

    return (
      <table>
       <thead>
          <th>Title</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {surveyComponents}
        </tbody>
      </table>
    );
  }
}

export default YourSurveys;