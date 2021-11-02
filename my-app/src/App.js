import UserInput from "./Components/User/UserInput";
import './App.css';
import UserList from "./Components/User/UserList";
import React, {useState} from 'react'


function App() {

const [userInputs, setUserInputs] = useState([{text: 'John',age: 34, id: 1},{text: 'Mike',age: 48, id: 2}])


const onAddUserInput = (enteredInput1, enteredInput2) => {
    setUserInputs(prevUserInputs => {
      const updateUserInputs = [...prevUserInputs];
      updateUserInputs.push({text: enteredInput1 ,age:enteredInput2, id: Math.random().toString()});
      console.log(updateUserInputs);
      return updateUserInputs;
    });
};

  return (
    <div id="page">
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