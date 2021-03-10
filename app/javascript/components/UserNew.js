import React from 'react';
const UserNew = ({ user }) => {
  const { first_name, last_name, errors } = user
  const defaultFName = first_name ? first_name : ""
  const defaultLName = last_name ? last_name : ""
  return(
    <>  
      <h1>Add User</h1>
      { errors && errors }
      <form action="/users" method="post">
        <input
          placeholder="First Name"
          type="text"
          defaultValue={defaultFName}
          name="user[first_name]"
        /><br/>
        <input
          placeholder="Last Name"
          type="text"
          defaultValue={defaultLName}
          name="user[last_name]"
        />
        <button type="submit">Add</button>
      </form>
    </>
  )
}
export default UserNew;