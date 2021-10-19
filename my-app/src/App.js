import User from "./Components/User/User";
import './App.css';
import UserList from "./Components/User/UserList";

function App() {
  return (
    <div>
      <section id="goal-form">
        <User/>
      </section>
      <section id="goals">
        <UserList/>
      </section>
      
    </div>
  );
}

export default App;