import React, { Component } from 'react';

import { connect } from 'react-redux';

import SurveyQuestionType from '../components/SurveyQuestionType';

import { questionAdded } from '../actions/surveyBuilderActions';

class SurveyBuilderContainer extends Component {
  renderBuilder() {
    var isBuildingExistingSurvey = this.props.params.id !== undefined;
    if(isBuildingExistingSurvey) {
      return <h1>Building existing survey</h1>;
    }
    return <h1>Building new survey</h1>;
  }

  render() {
    var { dispatch } = this.props;
    return (
      <div>
        <div className="row">
          <div className="survey-questions four columns">
            <span className="builder-title">Builder</span>
            <div className="survey-question-types">
              <SurveyQuestionType questionType="Text" onAdd={() => dispatch(questionAdded("Text"))} />
              <SurveyQuestionType questionType="Comment Box" onAdd={() => dispatch(questionAdded("CommentBox"))} />
            </div>
          </div>
          <div className="eight columns">
            {this.renderBuilder()}
          </div>
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    surveys: state.surveys
  }
}

export default connect(select)(SurveyBuilderContainer);
