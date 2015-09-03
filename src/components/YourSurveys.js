'use strict';

import React, { Component, PropTypes } from 'react';

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
      <div>
        <span>{survey.title}</span>
        <div className="actions">
          <a onClick={this.deleteSurvey.bind(this)} href="#">Delete</a>
          {!survey.published ? <a onClick={this.publishSurvey.bind(this)} href="#">Publish</a> : ''}
        </div>
      </div>
    );
  }
}

class YourSurveys extends Component {
  renderSurveys() {
    var surveyComponents = this.props.surveys.map(survey => {
      return <Survey survey={survey} />;
    });

    return {surveyComponents};
  }

  renderNoSurveys() {
    return <p>You have no surveys!</p>;
  }

  render() {
    var hasSurveys = this.props.surveys.length > 0;
    return (
      <div>
        <h2>Your Surveys</h2>
        {hasSurveys ? this.renderSurveys() : this.renderNoSurveys()}
      </div>
    );
  }
}

YourSurveys.propTypes = {
  surveys: PropTypes.array.isRequired
};

export default YourSurveys;