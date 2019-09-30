import React from 'react'

const Courses = ({courses}) => {
  const listCourses = () => 
    courses.map(course => <Course key={course.id} course={course}/>)

  return (
    <div>
      {listCourses()}
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
    </div>
  )
}
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  const { parts } = props

  const rows = () => 
    parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)

  return (
    <div>
      {rows()}
      <Total parts={parts}/>
    </div>
  )
}
const Part = ({name, exercises}) => {
  return (
    <p>
      {name} {exercises}
   </p>
  )
}

const Total = ({parts}) => {
  return (
    <strong>total of {parts.reduce((acc, {exercises}) => acc + exercises, 0)} exercises</strong>
  )
}

export default Courses