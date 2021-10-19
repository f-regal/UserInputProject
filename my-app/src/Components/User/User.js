import React from 'react';
import styles from './User.module.css';

const User = props => {
    return (  
        <form className={styles.form1}>
            <div className={styles['form-control']}>
            <label>Username</label>
            <input type="text"/>
            <label>Age</label>
            <input type="text"/>
            </div>
            <button  type="submit">Add User</button>
      </form>
    );
};

export default User;