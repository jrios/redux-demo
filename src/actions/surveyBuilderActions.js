function questionAdded(questionType) {
  return {
    type: 'QUESTION_ADDED',
    questionType: questionType
  }
}

export { questionAdded };