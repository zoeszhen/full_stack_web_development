import React from 'react'


export const Statistic = ({ type, number }) => {
    return (
        <tr>
            <td>{type}</td>
            <td>{number}</td>
        </tr >)
}