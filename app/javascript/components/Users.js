import React from 'react';
const Users = ({ users }) => {
  return(
    <>
      <h1>Users</h1>
      <h2>{ users.length <= 0 ? "No Users" : ""}</h2>
      { users.map( (u) => (
        <div>
          <a href={`/users/${u.id}`}>{u.first_name}</a>
        </div>
      ))}
    </>
  )
}
export default Users;