import React from 'react'


export const Statistics = ({ good, neutral, bad }) => {
    return (
        <div>
            <div>good: {good}</div>
            <div>neutral: {neutral}</div>
            <div>bad: {bad}</div>
            {good && bad && neutral ?
                <div>average: {good + bad * -1 / (good + neutral + bad)}</div> :
                <div>No feedback</div>
            }
        </div >)
}