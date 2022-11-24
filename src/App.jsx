import React from 'react'
import './App.css'
import Question from './Question'

function App() {

  const [formData, setFormData] = React.useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  })
  const [quiz, setQuiz] = React.useState([])
  const [correct, setCorrect] = React.useState(0)
  const [finishedQuiz, setFinishedQuiz] = React.useState(false)

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => setQuiz(data.results))
  }, [])

  React.useEffect(() => {
    let finished = Object.values(formData).every(el => el !== "")
    setFinishedQuiz(finished)
    console.log(finishedQuiz)
  }, [formData])

  function handleSubmit(event) {
    event.preventDefault()
    if(finishedQuiz) {
      for(let i = 0; i < 5; i++) {
        if(quiz[i].correct_answer === formData[`question${i+1}`]) {
          setCorrect(prev => prev + 1)
        }
      }
      console.log("Checking answers...")
    }else {
      console.log("please fill out all answers")
    }
  }

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  const quizQuestionElements = quiz.map((question, index) => {
    return (
      <Question 
        key={index}
        questionNumber={index + 1}
        question={question.question}
        answer={question.correct_answer}
        otherAnswers={question.incorrect_answers}
        onChange={handleChange}
      />
    )
  })

  return (
    <div className='quiz-container'>
      <form onSubmit={handleSubmit}>
        {quizQuestionElements}
        <button>Check Answers</button>
        {finishedQuiz && <h4>You got {correct} / 5 correct answers!</h4>}
      </form>
    </div>
  )
}

export default App
