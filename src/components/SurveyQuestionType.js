'use strict';

import React, { Component } from 'react';

class SurveyQuestionType extends Component {
  handleClick() {
    var questionType = this.props.questionType;
    this.props.onAdd(questionType);
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

export default SurveyQuestionType;