import React from 'react';

const Course = ({ course }) => {
  const { name } = course
  return (
    <>
      <h1>Course: {name}</h1>
    </>
  )
}

export default Course;