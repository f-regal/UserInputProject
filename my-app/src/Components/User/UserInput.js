import React, {useState} from 'react';
import styles from './UserInput.module.css';


const UserInput = props => {

    const [EnteredUsername, setEnteredUsername] = useState('')
    const usernameHandler = (e) => {
        setEnteredUsername(e.target.value);
    }

    const [EnteredAge, setEnteredAge] = useState('')
    const ageHandler = (e) => {
        setEnteredAge(e.target.value);
    }

    const formSubmitHandler = (e) => {
    e.preventDefault();

    //props.InvalidMessageHandler(EnteredUsername, EnteredAge)
    props.addUserInput(EnteredUsername, EnteredAge);

    
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