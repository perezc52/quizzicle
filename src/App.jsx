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
  const [submitted, setSubmitted] = React.useState(false)

  React.useEffect(() => {
    getQuizQuestions()
  }, [])

  React.useEffect(() => {
    let finished = Object.values(formData).every(el => el !== "")
    setFinishedQuiz(finished)
  }, [formData])

  function getQuizQuestions() {
    fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => {
        setQuiz(data.results.map(el => {
          return {
            ...el,
            shuffledAnswers: shuffle([el.correct_answer, el.incorrect_answers[0], el.incorrect_answers[1], el.incorrect_answers[2]]),
            question: cleanupString(el.question),
          }
        }))
      })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const buttonText = document.querySelector('.quizBtn').textContent

    if(buttonText === "Check Answers") {
      if(finishedQuiz) {
        for(let i = 0; i < 5; i++) {
          if(quiz[i].correct_answer === formData[`question${i+1}`]) {
            setCorrect(prev => prev + 1)
          }
        }
        setSubmitted(true)
      }else {
        console.log("please fill out all answers")
      }
    }else if(buttonText === "Play Again"){
      reset()
    }else {
      console.log("unknown error")
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

  function reset() {
    setSubmitted(false)
    setFormData({
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
    })
    setFinishedQuiz(false)
    setCorrect(0)
    getQuizQuestions()
    const radioBtns = document.getElementsByTagName("input");
    for (let i = 0; i < radioBtns.length; i++) {
            if (radioBtns[i].type == "radio") {
                radioBtns[i].checked = false;
            }
    }
  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  function cleanupString(str) {
    let newStr = str
    console.log(newStr)
    newStr = str.replaceAll(/&quot;|&#039;/g, `'`)
    console.log(newStr)
    return newStr
  }

  const quizQuestionElements = quiz.map((question, index) => {
    return (
      <Question 
        key={index}
        questionNumber={index + 1}
        question={question.question}
        answer={question.correct_answer}
        otherAnswers={question.incorrect_answers}
        shuffledAnswers={question.shuffledAnswers}
        onChange={handleChange}
      />
    )
  })

  return (
    <div className='quiz-container'>
      <h1 className='title'>Quizzicle</h1>
      <form onSubmit={handleSubmit}>
        {quizQuestionElements}
        <button className='quizBtn'>{submitted ? "Play Again" : "Check Answers"}</button>
        {submitted ? <h4>You got {correct} / 5 correct answers!</h4> : <h4>Please fill out all answers</h4>}
      </form>
    </div>
  )
}

export default App
