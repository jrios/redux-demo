import cuid from 'cuid';
import { combineReducers } from 'redux';

var initialState = {
  surveys: []
};

function yourSurveys(state = initialState, action) {
  switch(action.type) {
    case 'SURVEY_CREATED':
      let survey = {
        id: state.surveys.reduce((maxId, survey) => Math.max(survey.id, maxId), 0) + 1,
        title: action.title,
        published: false
      };
      var surveys = [survey, ...state.surveys];
      return Object.assign({}, state, { surveys: surveys });
    case 'SURVEY_DELETED':
      var surveys = state.surveys.filter(survey => survey.id !== action.id);
      return Object.assign({}, state, { surveys: surveys });
    case 'SURVEY_PUBLISHED':
      var surveys = state.surveys.map(survey => {
        if(survey.id === action.id) {
          return Object.assign({}, survey, { published: !survey.published });
        } else {
          return survey;
        }
      })
      return Object.assign({}, state, { surveys: surveys });
    default:
      return state;
  }
}

function surveyBuilder(state = initialState, action) {
  return state;
}

const rootReducer = combineReducers({
  yourSurveys,
  surveyBuilder
});

export default rootReducer;