import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import App2 from './Form.js'


function App() {
  const [user, setUser] = useState("");
  const handleChange = event => {
    setUser(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <div className="App">
       {console.log(user)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          New User? Join Here!
          <br/>
          <input type="text" onChange={event => handleChange(event)} />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

  
export default App;
