'use strict';

import React, { Component, PropTypes } from 'react';

class NewSurvey extends Component {
  createNewSurvey(event) {
    var surveyTitle = React.findDOMNode(this.refs.surveyTitle).value;
    console.log('creating new survey ' + surveyTitle);
  }

  render() {
    return (
      <div>
        <label htmlFor="survey-title">Title</label>
        <input id="survey-title" className="u-full-width" ref="surveyTitle" type="text" />
        <button className="u-pull-right" onClick={this.createNewSurvey.bind(this)}>Create survey</button>
      </div>
    );
  }
}

export default NewSurvey;