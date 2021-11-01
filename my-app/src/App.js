import UserInput from "./Components/User/UserInput";
import './App.css';
import UserList from "./Components/User/UserList";
import React, {useState} from 'react'


function App() {

const [userInputs, setUserInputs] = useState([{text: 'user1',age: 34, id: 1},{text: 'user2',age: 48, id: 2}])


const onAddUserInput = (enteredInput1, enteredInput2) => {
    setUserInputs(prevUserInputs => {
      const updateUserInputs = [...prevUserInputs];
      updateUserInputs.push({text: enteredInput1 ,age:enteredInput2, id: Math.random().toString()});
      console.log(updateUserInputs);
      return updateUserInputs;
    });
};


//create a function to retrieve the errormessage from UserInput

  //let content;
  // const errorHandler = (error) => {
  //   content = <Modal message={error}></Modal>
  // }


  return (
    <div>
      <section id="goal-form">
        <UserInput addUserInput ={onAddUserInput} />
      </section>
      <section id="goals">
        <UserList items={userInputs}/>
      </section>
      
    </div>
  );
}

export default App;