import React from 'react'


export const Statistics = ({ good, neutral, bad }) => {
    return (
        <div>
            <div>good: {good}</div>
            <div>neutral: {neutral}</div>
            <div>bad: {bad}</div>
            <div>average: {good + bad * -1 / (good + neutral + bad)}</div>
        </div >)
}