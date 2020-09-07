import React, { useState } from 'react'


export const Feedback = () => {
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })

    const update = (type) => {
        setFeedback((prevState) => ({ ...prevState, [type]: prevState[type] + 1 }))

    }

    const { good, neutral, bad } = feedback;

    return (
        <div>
            <div>good: {good}</div>
            <div>neutral: {neutral}</div>
            <div>bad: {bad}</div>
            <div>average: {good + bad * -1 / (good + neutral + bad)}</div>
            <div>
                <button onClick={() => update("good")}>good</button>
                <button onClick={() => update("neutral")}>neutral</button>
                <button onClick={() => update("bad")}>bad</button>
            </div>
        </div >)
}