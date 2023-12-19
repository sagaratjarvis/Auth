import React, { useState } from 'react';
import AlertComponent from './Alert';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  const [alertText, setAlertText] = useState("");

  const navigate= useNavigate()

  

  const loginHandler = (e) => {
    e.preventDefault();
    const storedUserData = JSON.parse(localStorage.getItem('signupData'));

    const user = storedUserData.find((user) => user.email === email && user.password === password);
    if (user) {
      setIsAlert(true);
      setAlertText("User Authenticated");
      setTimeout(() => {
        setIsAlert(false)
      }, 3000);
      navigate("./logged")
    } else {
      setIsAlert(true);
      setAlertText("Invalid Credentials");
      setTimeout(() => {
        setIsAlert(false)
      }, 3000);
    }
  };

  return (
    <>
    {/* <Icon/> */}
      {isAlert && <AlertComponent text={alertText} />}
      <div className="container d-flex justify-content-center align-items-center">
        <form className='form-container' onSubmit={loginHandler}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
          </div>
         
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Home;
