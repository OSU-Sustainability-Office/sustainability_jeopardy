export default class Question {
  // Parameters:
  //      text - String literal containing question text.
  //      answers - An array of answer objects. One, and only one, must be "correct."
  constructor (text, answers, pointValue) {
    this.questionText = text
    this.answers = answers.sort(() => Math.random() - 0.5)
    this.pointValue = pointValue

    // Ensure only one answer is correct.
    let correct = 0
    this.answers.forEach((answer) => {
      if (answer.isCorrect === true) correct++
    })
    if (correct !== 1) {
      throw new Error(
        "Question constructor called with invalid parameters. One, and only one, question must be 'correct'."
      )
    }
  }
}
