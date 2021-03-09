import React from 'react';
import React from "react";
const User = ({ user, full_name, courses }) => {
  const { id } = user;
  return (
    <>
      <div className="user-card"> 
        <h1>{full_name}</h1>
        <hr />
        <h4>Courses</h4>
        <ul>
          { courses.map( (c) => (
            <li>
              <a href={`/courses/${c.id}`}>{c.name}</a>
            </li>
          ))}
        </ul>
        <a href={`/users/${id}`} data-method="delete">
          User delete
        </a>
      </div>
    </>
  )
}
export default User;