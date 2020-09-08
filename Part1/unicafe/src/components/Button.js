import React from 'react'

export const Button = ({ update, type }) => {
    return <button onClick={() => update()}>{type}</button>
}