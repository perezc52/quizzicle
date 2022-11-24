import React from 'react'

export default function Question(props) {
    return (
        <div className='question'>

            <h1 className="question-text">{props.question}</h1>

            <input
                type="radio"
                id={props.answer}
                name={`question${props.questionNumber}`}
                value={props.answer}
                onChange={props.onChange}
            />
            <label htmlFor={props.answer}>{props.answer}</label>

            <input
                type="radio"
                id={props.otherAnswers[0]}
                name={`question${props.questionNumber}`}
                value={props.otherAnswers[0]}
                onChange={props.onChange}
            />
            <label htmlFor={props.otherAnswers[0]}>{props.otherAnswers[0]}</label>

            <input
                type="radio"
                id={props.otherAnswers[1]}
                name={`question${props.questionNumber}`}
                value={props.otherAnswers[1]}
                onChange={props.onChange}
            />
            <label htmlFor={props.otherAnswers[1]}>{props.otherAnswers[1]}</label>

            <input
                type="radio"
                id={props.otherAnswers[2]}
                name={`question${props.questionNumber}`}
                value={props.otherAnswers[2]}
                onChange={props.onChange}
            />
            <label htmlFor={props.otherAnswers[2]}>{props.otherAnswers[2]}</label>
        </div>
    )
}