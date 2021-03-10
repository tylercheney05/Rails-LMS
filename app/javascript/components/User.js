import React from "react";
// import '../../../node_modules/semantic-ui-css/semantic.min.css';
// import { Button, Icon } from 'semantic-ui-react'
import AppContainer, {AppSubtitle} from './userStyles';

const styles = {
  title: {
    color: 'blue',
    backgroundColor: 'yellow',
    fontSize: '8px'
  }
}

const User = ({ user, full_name, courses }) => {
  const { id } = user;
  return (
    <>
      <div className="user-card"> 
        {/* in line style */}
        <h1 style={{color: 'green', backgroundColor: 'red', fontSize: '30px'}}>{full_name}</h1>
        {/* <Button color='facebook'>
          <Icon name='facebook' /> Facebook
        </Button> */}
        {/* styles as a module */}
        <h1 style={styles.title}>{full_name}</h1>
        {/* Styled components */}
        <AppSubtitle>{full_name}</AppSubtitle>
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