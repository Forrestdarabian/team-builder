import React, { useState } from "react";

function App2() {
  const [user, setUser] = useState({ name: "", email: "", role: "" });


  function handleSubmit(event) {
    event.preventDefault();
    console.log("Username: ", event.target.value);
  }

  function inputHandler(event) {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    setUser(updatedUser);
  }
  return (
    <div className="App">
      <form onSubmit={event => handleSubmit(event)}>
        <label>
        Name:
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={inputHandler}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={inputHandler}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            id="role"
            value={user.role}
            onChange={inputHandler}
          />
        </label>
        <button onClick={handleSubmit}>Submit!</button>
      </form>
    </div>
  );
}

export default App2;
