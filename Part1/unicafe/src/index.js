import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const Button = ({ update, type }) => {
    return <button onClick={() => update()}>{type}</button>
}

const Statistic = ({ type, number }) => {
    return (
        !!number &&
        <tr>
            <td>{type}</td>
            <td>{number}</td>
        </tr >

    )

}

const Statistics = ({ good, neutral, bad }) => {
    return (
        <>
            <h1>Statistics</h1>
            <table>
                <tbody>
                    <Statistic type="good" number={good}></Statistic>
                    <Statistic type="neutral" number={neutral}></Statistic>
                    <Statistic type="bad" number={bad}></Statistic>
                    {good && bad && neutral ?
                        <>
                            <Statistic type="average" number={good + bad * -1 / (good + neutral + bad)}></Statistic>
                            <Statistic type="positive" number={`${good / (good + neutral + bad) * 100}%`}></Statistic>
                        </>
                        :
                        <tr>
                            <td>
                                No feedback
                            </td>
                        </tr>
                    }

                </tbody>
            </table >
        </>
    )
}

const App = () => {
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })

    const update = (type) => {
        setFeedback((prevState) => ({ ...prevState, [type]: prevState[type] + 1 }))

    }

    const { good, neutral, bad } = feedback;

    return (
        <>
            <>
                <h1>Give feedbacks</h1>
                <Button update={() => update("good")} type="good"></Button>
                <Button update={() => update("neutral")} type="neutral"></Button>
                <Button update={() => update("bad")} type="bad"></Button>
            </>
            <Statistics good={good} bad={bad} neutral={neutral} ></Statistics>
        </>)
}

ReactDOM.render(<App />, document.getElementById('root'));