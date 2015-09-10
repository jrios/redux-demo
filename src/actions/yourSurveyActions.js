function surveyCreated(surveyTitle) {
  return {
    type: "SURVEY_CREATED",
    title: surveyTitle
  }
}

function surveyDeleted(surveyId) {
  return {
    type: "SURVEY_DELETED",
    id: surveyId
  }
}

function surveyPublished(surveyId) {
  return {
    type: "SURVEY_PUBLISHED",
    id: surveyId
  }
}

export { surveyCreated, surveyDeleted, surveyPublished };