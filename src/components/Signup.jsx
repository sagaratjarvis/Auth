import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupData, setSignupData] = useState([]);
  const [isalert, IsAlert]=useState(false)

  const navigate=useNavigate()
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('signupData'));
    if (Array.isArray(storedData)) {
      setSignupData(storedData);
    }
  }, []);

  const SignupHandler = (e) => {
    e.preventDefault();
    const newUser = { name, email, password };
    const updatedData = [...signupData, newUser];
    const userData =JSON.parse(localStorage.getItem("signupData"))
    const user= userData.find((user)=>user.email===email )
    if(user){
      alert("Email is already taken")
    }else{
      localStorage.setItem('signupData', JSON.stringify(updatedData));
      
      
      setSignupData(updatedData);
      IsAlert(true)
      setTimeout(() => {
        IsAlert(false)
      }, 3000);
      navigate("/logged");
    }
  };

  return (
    <>
      {isalert && <Alert text={"Form Submitted"} />}
    <div className="container d-flex justify-content-center">
      <form className="container" onSubmit={SignupHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
            </>
  );
}

export default Signup;
