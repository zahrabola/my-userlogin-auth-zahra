import React from "react";
import { useNavigate } from "react-router-dom";

const Hompage = () => {

    const navigate = useNavigate();



  return (
    <div>
      <div className="homescreen">
        <header>
          <h3>System Name</h3>
          <a onClick={() => navigate('/')}> Log Out</a>
        </header>
        <div className="pagecontent">
          <div className="usercard">
            <img alt="useravatar" />
            <h3>First Name , Last Name</h3>
            <div className="usermeta">
              <p>
                <span>UserName</span>
                <span>Test username</span>
              </p>
              <p>
                <span>Email</span>
                <span>Test@gmail.com</span>
              </p>
              <p>
                <span>Gender: </span>
                <span>gender</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      homepage
    </div>
  );
};

export default Hompage;
