'use strict';

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import NewSurvey from '../components/NewSurvey';

class Survey extends Component {
  deleteSurvey() {
    console.log('deleting survey ' + this.props.survey.title);
  }

  publishSurvey() {
    console.log('publishing survey ' + this.props.survey.title);
  }

  render() {
    var survey = this.props.survey;
    return (
      <tr>
        <td><Link to={`/survey-builder/${survey.id}`}>{survey.title}</Link></td>
        <td>
          <ul className="survey-actions">
            <li className="survey-action"><a href="#" onClick={this.deleteSurvey.bind(this)}><img alt="Delete your survey" src="/public/images/ic_delete_black_24px.svg" /></a></li>
            {!survey.published ? 
              <li className="survey-action">
                <a href="#" onClick={this.publishSurvey.bind(this)}><img alt="Publish your survey" src="/public/images/ic_publish_black_24px.svg" /></a>
              </li> : null
            }
          </ul>
        </td>
      </tr>
    );
  }
}

var surveys = [
  {
    id: 1,
    title: 'Stub Survey',
    published: true
  },
  {
    id: 2,
    title: 'Stub Survey 2'
  }
];

class YourSurveys extends Component {
  renderSurveys() {
    var surveyComponents = surveys.map(survey => {
      return <Survey key={survey.id} survey={survey} />;
    });

    return (
      <div className="row">
        <div className="twelve columns">
          <table>
           <thead>
              <th>Title</th>
              <th>Actions</th>
            </thead>
            <tbody>
              {surveyComponents}
            </tbody>
          </table>
        </div>
        <div className="twelve columns">
          <NewSurvey />
        </div>
      </div>
    );
  }

  renderNoSurveys() {
    return (
      <div className="row">
        <div className="twelve columns">
          <p>You have no surveys!</p>
          <NewSurvey />
        </div>
      </div>
    );
  }

  render() {
    var hasSurveys = surveys.length > 0;
    return (
      <div className="row">
        <h3>Your Surveys</h3>
       {hasSurveys ? this.renderSurveys() : this.renderNoSurveys()}
      </div>
    );
  }
}


export default YourSurveys;