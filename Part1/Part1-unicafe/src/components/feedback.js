import React, { useState } from 'react'


export const Feedback = () => {
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })

    const update = (type) => {
        setFeedback((prevState) => ({ ...prevState, [type]: prevState[type] + 1 }))

    }

    return (
        <div>
            <div>good: {feedback.good}</div>
            <div>neutral: {feedback.neutral}</div>
            <div>bad: {feedback.bad}</div>
            <div>
                <button onClick={() => update("good")}>good</button>
                <button onClick={() => update("neutral")}>neutral</button>
                <button onClick={() => update("bad")}>bad</button>
            </div>
        </div >)
}