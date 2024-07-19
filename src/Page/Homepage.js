import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = (props) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /*
   useEffect(() => {
    setUserData(props.location.state.userData);
  }, [props.location.userData]);


  useEffect(() => {
 if (props.location && props.location.state) {
      setUserData(props.location.state.userData);
      console.log(props.location.state.userData);
    }
}, [props.location]);
*/

  useEffect(() => {
    if (props.location && props.location.state) {
      setUserData(props.location.state.userData);
      console.log("userData:", userData);
      setIsLoading(false);
      console.log("userData:", props.location.state?.userData);
    }
  }, [props.location, userData]);

  return (
    <div>
      <div className="homescreen">
        <header>
          <h3>System Name</h3>
          <a href="/" onClick={() => navigate("/")}>
            {" "}
            Log Out
          </a>
        </header>
        <div className="pagecontent">
          {isLoading ? (
            <p>Loading user data...</p>
          ) : userData ? ( 
            <div className="usercard">
              <img src={userData.image} alt="useravatar" />
              <h3>
                {userData.firstName} {userData.lastName}
              </h3>
              <div className="usermeta">
                <p>
                  <span>UserName</span>
                  <span>{userData.username}</span>
                </p>

                <p>
                  <span>Email</span>
                  <span>{userData.email}</span>
                </p>

                <p>
                  <span>Gender: </span>
                  <span>{userData.gender}</span>
                </p>
              </div>
            </div>
          ) : (
            <p>Error fetching user data.</p> 
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;

/* 


*/
