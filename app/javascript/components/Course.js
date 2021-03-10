import React from 'react';

const Course = ({ course }) => {
  const { name, id } = course
  return (
    <>
      <h1>Course: {name}</h1>
      <hr />
      <a href={`/courses/${id}/enrollments`}></a>
    </>
  )
}

export default Course;