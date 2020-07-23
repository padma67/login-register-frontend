import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Login from "./Login";
import Register from "./Rgister";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
            
              <div style={{position:"absolute",border:"1px solid blue",backgroundColor:"skyblue"}} ><Link to="/Register">Register</Link></div>
              <div style={{border:"1px solid blue",marginLeft:"155px",width:"55px",backgroundColor:"pink"}} ><Link to="/Login">Login</Link></div>
        </nav>

        <Switch>
          <Route path="/Register" component={Register} />

          <Route path="/Login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;