import React, { useState } from 'react'
import { Statistics } from "./components/Statistics"

const App = () => {
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })

    const update = (type) => {
        setFeedback((prevState) => ({ ...prevState, [type]: prevState[type] + 1 }))

    }

    const { good, neutral, bad } = feedback;

    return (
        <>
            <Statistics good={good} bad={bad} neutral={neutral} ></Statistics>
            <div>
                <button onClick={() => update("good")}>good</button>
                <button onClick={() => update("neutral")}>neutral</button>
                <button onClick={() => update("bad")}>bad</button>
            </div>
        </>)
}

export default App