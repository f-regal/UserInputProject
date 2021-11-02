import React, {useState} from 'react';
import styles from './UserInput.module.css';
import Modal from '../Modal/Modal';


const UserInput = props => {

    const [EnteredUsername, setEnteredUsername] = useState('')
    const usernameHandler = (e) => {
        setEnteredUsername(e.target.value);
    }

    const [EnteredAge, setEnteredAge] = useState('')
    const ageHandler = (e) => {
        setEnteredAge(e.target.value);
    }

    const [ErrorMessage, setErrorMessage] = useState();
    const errorClickHandler = () => {
      setErrorMessage();
    }

    const formSubmitHandler = (e) => {
    e.preventDefault();

    if (EnteredUsername.trim().length === 0 && EnteredAge.trim().length === 0 ) {
      setErrorMessage({
        title: 'Invalid Message',
        message: 'please enter a valid name and age (non-empty values)'
      });  
      return;
     } 
     if (EnteredAge < 1) {
      setErrorMessage({
        title: 'Invalid Message',
        message: 'Please enter a valid age (>0)'
      }); 
      return;
    }
  
    props.addUserInput(EnteredUsername, EnteredAge);
    setEnteredUsername("");
    setEnteredAge(""); 
};

    return (  
      <div>
        <form onSubmit={formSubmitHandler}>
            <div className={styles['form-control']}>
              <label>Username</label>
              <input type="text" value={EnteredUsername} onChange={usernameHandler}/>
              <label>Age</label>
              <input type="text" value={EnteredAge} onChange={ageHandler}/>
            </div>
            <button className={styles.button} type="submit">Add User</button>
       </form>
       {ErrorMessage && <Modal error={ErrorMessage} onErrorOkay={errorClickHandler}/>}
       </div>
    );
};

export default UserInput;