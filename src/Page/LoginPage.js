import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleChangeName = (event) => {
    setUserName(event.target.value);
  };

  const handleChangePassword = (event) => {
    setUserPassword(event.target.value);
  };

  ///submitUserLogin Function
  const submitUserLogin = () => {
    console.log(userName);
    console.log(userPassword);

    try {
        const response = axios.post('url', body)

    } 
    catch (error) {


    } 
    finally {
    }
  };

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
              value={userName}
              onChange={handleChangeName}
              /* onChange={(e) => setUserName(e.target.value)}*/
            />
          </div>
          <div className="inputgroup">
            <label>Password</label>
            <input
              type="text"
              className="formcontrol"
              placeholder="Enter password"
              value={userPassword}
              onChange={handleChangePassword}
              /*onChange={(e) => setUserPassword(e.target.value)} */
            />
          </div>
          <div className="submitaction">
            <button className="submitbtn" onClick={() => submitUserLogin()}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
