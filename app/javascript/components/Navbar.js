import React from 'react';

const Navbar = ()=> (
  <nav>
    <ul>
      <li>
        <a href="/courses">Courses</a>
      </li>
      <li>
        <a href="/courses/new">Add Course</a>
      </li>
      <li>
        <a href="/users">Users</a>
      </li>
      <li>
        <a href="users/new">Add User</a>
      </li>
    </ul>
  </nav>
)

export default Navbar;