import React from 'react'
const Header = ({ header }) => (<h1>{header}</h1>)
const Content = ({ parts }) => (
    <>
        {
            parts.map(({ name, exercises }) => <div key={name}>{name}:{exercises} </div>)
        }
    </>
)

const Total = ({ parts }) => (<div><b>total exercises: {parts.reduce((init, { exercises }) => (init = + exercises), 0)}</b></div>)
export const Course = ({ course }) => (
    <>
        <Header header={course.name}></Header>
        <Content parts={course.parts} ></Content>
        <Total parts={course.parts} ></Total>
    </>
)