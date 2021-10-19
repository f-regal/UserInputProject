import UserInput from "./Components/User/UserInput";
import './App.css';
import UserList from "./Components/User/UserList";

const data =['item1', 'item2']

function App() {
  return (
    <div>
      <section id="goal-form">
        <UserInput/>
      </section>
      <section id="goals">
        <UserList inputs={data}/>
      </section>
      
    </div>
  );
}

export default App;