import React from "react";

const LoginPage = () => {
  return (
    <div className="loginscreen">
      <div className="loginform">
        <div className="leftpart" />
          <div className="rightpart">
            <h3>Login Account</h3>
            <div className="inputgroup">
              <label>UserName</label>
              <input
                type="text"
                className="formcontrol"
                placeholder="Enter username"
              />
            </div>
            <div className="inputgroup">
              <label>Password</label>
              <input
                type="text"
                className="formcontrol"
                placeholder="Enter password"
              />
            </div>
            <div className="submitaction">
            <button className="submitbtn">Login</button>
          </div>
          </div>
         
      
      </div>
    </div>
  );
};

export default LoginPage;
