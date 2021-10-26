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

    const [ErrorMessage, setErrorMessage] = useState('');

    const formSubmitHandler = (e) => {
    e.preventDefault();
    const message1 = "please enter a valid name and age (non-empty values)"
    const message2 = "Please enter a valid age (>0)"
   
    if (EnteredUsername.trim().length === 0 && EnteredAge.trim().length === 0 ) {
      setErrorMessage(message1)
      console.log(ErrorMessage); 
    } else if (EnteredAge < 1) {
      setErrorMessage(message2)
      console.log(ErrorMessage); 
    } 

    
    props.addUserInput(EnteredUsername, EnteredAge);
    props.onError(ErrorMessage);
    
    setEnteredUsername("");
    setEnteredAge(""); 
};

    

    return (  
        <form onSubmit={formSubmitHandler} className={styles.form1}>
            <div className={styles['form-control']}>
            <label>Username</label>
            <input type="text" value={EnteredUsername} onChange={usernameHandler}/>
            <label>Age</label>
            <input type="text" value={EnteredAge} onChange={ageHandler}/>
            </div>
            <button type="submit">Add User</button>
      </form>
    );
};

export default UserInput;