import React, { Component } from 'react';
import { connect } from 'react-redux';

import YourSurveys from '../components/YourSurveys';
import NewSurvey from '../components/NewSurvey';

import { surveyCreated, surveyPublished, surveyDeleted } from '../actions/yourSurveyActions';

class YourSurveysContainer extends Component {
  renderSurveys(surveys) {
    var { dispatch } = this.props;

    return (
      <div className="row">
        <div className="twelve columns">
          <YourSurveys surveys={surveys} onSurveyPublished={surveyId => dispatch(surveyPublished(surveyId))} onSurveyDeleted={surveyId => dispatch(surveyDeleted(surveyId))} />
        </div>
        <div className="twelve columns">
          <NewSurvey onSurveyCreated={title => dispatch(surveyCreated(title))} />
        </div>
      </div>
    );
  }

  renderNoSurveys() {
    var { dispatch } = this.props;

    return (
      <div className="row">
        <div className="twelve columns">
          <p>You have no surveys!</p>
          <NewSurvey onSurveyCreated={title => dispatch(surveyCreated(title))} />
        </div>
      </div>
    );
  }

  render() {
    var surveys = this.props.surveys;
    var hasSurveys = surveys.length > 0;

    return (
      <div className="row">
        <h3>Your Surveys</h3>
       {hasSurveys ? this.renderSurveys(surveys) : this.renderNoSurveys()}
      </div>
    );
  }
}

function select(state) {
  return {
    surveys: state.yourSurveys.surveys
  };
}

export default connect(select)(YourSurveysContainer);