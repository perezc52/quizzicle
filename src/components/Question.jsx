import React from 'react'

export default function Question(props) {

    return (
        <div className='question'>
            <h1 className="question-text">{props.question}</h1>

            <div className="answer-choices">
                <div className="answer-choice right-aligned">
                    <input
                        type="radio"
                        id={props.shuffledAnswers[0]}
                        disabled={props.submitted ? true : false}
                        name={`question${props.questionNumber}`}
                        value={props.shuffledAnswers[0]}
                        onChange={props.onChange}
                        className="radioBtn"
                    />
                    <label
                        data-attribute-correct={props.answer === props.shuffledAnswers[0]}
                        className={`radioBtn-text ${props.submitted ? 'disabled' : ''}`}
                        htmlFor={props.shuffledAnswers[0]}>
                        {props.shuffledAnswers[0]}
                    </label>
                </div>
                <div className="answer-choice left-aligned">
                    <input
                        type="radio"
                        id={props.shuffledAnswers[1]}
                        disabled={props.submitted ? true : false}
                        name={`question${props.questionNumber}`}
                        value={props.shuffledAnswers[1]}
                        onChange={props.onChange}
                        className="radioBtn"
                    />
                    <label
                        data-attribute-correct={props.answer === props.shuffledAnswers[1]}
                        className={`radioBtn-text ${props.submitted ? 'disabled' : ''}`}
                        htmlFor={props.shuffledAnswers[1]}>
                        {props.shuffledAnswers[1]}
                    </label>
                </div>
                <div className="answer-choice right-aligned">
                    <input
                        type="radio"
                        id={props.shuffledAnswers[2]}
                        disabled={props.submitted ? true : false}
                        name={`question${props.questionNumber}`}
                        value={props.shuffledAnswers[2]}
                        onChange={props.onChange}
                        className="radioBtn"
                    />
                    <label
                        data-attribute-correct={props.answer === props.shuffledAnswers[2]}
                        className={`radioBtn-text ${props.submitted ? 'disabled' : ''}`}
                        htmlFor={props.shuffledAnswers[2]}>
                        {props.shuffledAnswers[2]}
                    </label>
                </div>
                <div className="answer-choice left-aligned">
                    <input
                        type="radio"
                        id={props.shuffledAnswers[3]}
                        disabled={props.submitted ? true : false}
                        name={`question${props.questionNumber}`}
                        value={props.shuffledAnswers[3]}
                        onChange={props.onChange}
                        className="radioBtn"
                    />
                    <label
                        data-attribute-correct={props.answer === props.shuffledAnswers[3]}
                        className={`radioBtn-text ${props.submitted ? 'disabled' : ''}`}
                        htmlFor={props.shuffledAnswers[3]}>
                        {props.shuffledAnswers[3]}
                    </label>
                </div>
            </div>
        </div>
    )
}