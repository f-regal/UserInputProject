import UserInput from "./Components/User/UserInput";
import './App.css';
import UserList from "./Components/User/UserList";
import React, {useState} from 'react'
import Modal from './Components/Modal/Modal'

function App() {

const [userInputs, setUserInputs] = useState([{text: 'user1',age: 34, id: 1},{text: 'user2',age: 48, id: 2}])
const [isValid, setIsValid] = useState(true);

let message;
const onAddUserInput = (enteredInput1, enteredInput2) => {
  // if (enteredInput1.trim.length === 0 && enteredInput2.trim.length === 0 ) {
  //   message = "please enter a valid name and age (non-empty values)"
  //   setIsValid(false);
  //   console.log(message);
  // } else if (parseInt(enteredInput2) < 0) {
  //   message = "Please enter a valid age (>0)"
  //   setIsValid(false)
  //   console.log(message);
  // } else {
    setUserInputs(prevUserInputs => {
      const updateUserInputs = [...prevUserInputs];
      updateUserInputs.push({text: enteredInput1 ,age:enteredInput2, id: Math.random().toString()});
      console.log(updateUserInputs);
      return updateUserInputs;
    });
  //}

  
};



// const [isValid, setIsValid] = useState(true);
// const InvalidMessage = (enteredInput1, enteredInput2) => {
//   if (enteredInput1.trim.length === 0 && enteredInput2.trim.length === 0 ) {
//     message = "please enter a valid name and age (non-empty values)"
//     setIsValid(false);
//   } else if (parseInt(enteredInput2.trim) < 0) {
//     message = "Please enter a valid age (>0)"
//     setIsValid(false)
//   }
// }




  return (
    <div>
      <section id="goal-form">
        {isValid === false && <Modal messageHandler={message} />}
        <UserInput addUserInput ={onAddUserInput}/>
      </section>
      <section id="goals">
        <UserList items={userInputs}/>
      </section>
      
    </div>
  );
}

export default App;