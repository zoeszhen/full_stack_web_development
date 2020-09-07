import React from 'react'


export const Statistic = ({ type, number }) => {
    return (
        <div>
            <div>{type}: {number}</div>
        </div >)
}