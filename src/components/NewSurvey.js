'use strict';

import React, { Component, PropTypes } from 'react';

class NewSurvey extends Component {
  createNewSurvey() {
    var node = React.findDOMNode(this.refs.surveyTitle);
    var surveyTitle = node.value;
    this.props.onSurveyCreated(surveyTitle);
    node.value = '';
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

NewSurvey.propTypes = {
  onSurveyCreated: PropTypes.func.isRequired
};

export default NewSurvey;