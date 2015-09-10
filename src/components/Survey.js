import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Survey extends Component {
  deleteSurvey() {
    this.props.onSurveyDeleted(this.props.survey.id);
  }

  publishSurvey() {
    this.props.onSurveyPublished(this.props.survey.id);
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

Survey.propTypes = {
  onSurveyPublished: PropTypes.func.isRequired,
  onSurveyDeleted: PropTypes.func.isRequired
};

export default Survey;