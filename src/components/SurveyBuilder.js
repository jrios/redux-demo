'use strict';

import React, { Component } from 'react';

class SurveyQuestionType extends Component {
  handleClick() {
    console.log('adding question' + this.props.questionType);
  }

  render() {
    return (
      <div className="survey-question">
        <span className="list-text">{this.props.questionType}</span>
        <button className="small u-pull-right" onClick={this.handleClick.bind(this)}>Add</button>
      </div>
    );
  }
}

class SurveyBuilder extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="survey-questions four columns">
            <span className="builder-title">Builder</span>
            <div className="survey-question-types">
              <SurveyQuestionType questionType="Text" />
              <SurveyQuestionType questionType="Comment Box" />
              <SurveyQuestionType questionType="Dropdown" />
              <SurveyQuestionType questionType="Multiple Choice" />
            </div>
          </div>
          <div className="eight columns">
            <h4>Bar</h4>
          </div>
        </div>
      </div>
    );
  }
}

export { SurveyQuestionType, SurveyBuilder };