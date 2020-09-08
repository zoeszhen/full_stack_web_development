import React, { useState } from 'react'
import { Statistics } from "./components/Statistics"
import { Button } from './components/Button'

const App = () => {
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })

    const update = (type) => {
        setFeedback((prevState) => ({ ...prevState, [type]: prevState[type] + 1 }))

    }

    const { good, neutral, bad } = feedback;

    return (
        <>
            <Statistics good={good} bad={bad} neutral={neutral} ></Statistics>
            <>
                <Button update={() => update("good")} type="good"></Button>
                <Button update={() => update("neutral")} type="neutral"></Button>
                <Button update={() => update("bad")} type="bad"></Button>
            </>
        </>)
}

export default App