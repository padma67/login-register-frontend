import React from "react";
const Login = () => {
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [result, setresult] = React.useState("");

  function check() {
    fetch("https://login-register-node.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setpassword("");
        setemail("");
        setresult(data);
      });
  }

  return (
    <div>
    <div style={{position:"absolute",left:"155px",top:'125px',width:"45%",height:"155px",backgroundColor:"pink"}}>
      <h2>Login </h2>
      <label>E-mail</label>

      <input
        type="text"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      ></input>
      <br />
      <label>Password</label>
      <input
        type="text"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      ></input>
      <br />
      <button type="submit" onClick={() => check()}>
        Login
      </button>
      <h3>{result.message}</h3></div>
    </div>
  );
};

export default Login;
