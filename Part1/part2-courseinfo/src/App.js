import React from 'react';
import logo from './logo.svg';
import './App.css';

const Header = ({ header }) => (<h1>{header}</h1>)
const Content = ({ parts }) => (
  <>
    {
      parts.map(({ name, exercises }) => <div key={name}>{name}:{exercises} </div>)
    }
  </>
)

const Total = ({ parts }) => (<div>total exercises: {parts.reduce((init, { exercises }) => (init = + exercises), 0)}</div>)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const { name, parts } = course;
  return (
    <div>
      <Header header={name}></Header>
      <Content parts={parts} ></Content>
      <Total parts={parts} ></Total>
    </div>
  )
}

export default App;
