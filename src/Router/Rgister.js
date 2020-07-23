import React from "react";
const Register = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [status, setstatus] = React.useState("");

  function add() {
    fetch("https://login-register-node.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setName("");
        setstatus(data.message);
        setPassword("");
        setEmail("");
      });
  }

  return (
    <div>
      <h2>Registration</h2>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />
      <label>E-mail</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <br />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      <button type="submit" onClick={() => add()}>
        Register
      </button>
      <h3>{status}</h3>
    </div>
  );
};

export default Register;