import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const formValidation = () => {
    let isValid = true;

    if (!userName) {
      toast.warn("Username is required");
      isValid = false;
    }

    if (!userPassword) {
      toast.warn("User password is required");
      isValid = false;
    }

    return isValid;
  };



  ///submitUserLogin Function
  const submitUserLogin = async () => {
    console.log(userName);
    console.log(userPassword);

    try {
      if (formValidation()) {
        // before submit - check validation
        const requestBody = {
          username: userName,
          password: userPassword,
        };
        const response = await axios.post(
          "https://dummyjson.com/auth/login",
          requestBody
        );
        if (response) {
          console.log(response.data);
          // store data and navigate to homepage
          //data will go to the homepage
          
     navigate("/home", { state: { userData: response.data } });

     
        }
      }
    } catch (error) {
      ////login error in case of invalid user login username and password
      // we will use Toaster to show the error to user
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage;
