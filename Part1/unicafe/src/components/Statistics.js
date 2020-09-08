import React from 'react'
import { Statistic } from './Statistic'


export const Statistics = ({ good, neutral, bad }) => {
    return (
        <table>
            <tbody>
                <Statistic type="good" number={good}></Statistic>
                <Statistic type="neutral" number={neutral}></Statistic>
                <Statistic type="bad" number={bad}></Statistic>
                {good && bad && neutral ?
                    <Statistic type="average" number={good + bad * -1 / (good + neutral + bad)}></Statistic> :
                    <div>No feedback</div>
                }
            </tbody>
        </table >)
}