import React, { useEffect, useState } from 'react';
import './design.css'; 
import loginImage from '../assets/login.png'; 
import googleImage from "../assets/google.png";
import { useNavigate } from 'react-router-dom';
const SignUpUser = () => {
  const [role, setRole] = useState("Buyer")
  const [ name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [phoneNo,setPhoneNo] = useState("")
  const navigate = useNavigate()
  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role');
    if(role===null) {
      setRole("Buyer")
    }
    setRole(role)
  })
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/user/signup",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        password,
        phoneNo,
        role
      })
    })
    const data = await response.json()
    console.log(data)
    if(!response.ok){
      alert(data.error)
    }
    else{
      navigate("/login")
    }
  }
  return (
    <div className="signup">
      <div className="left">
        <img id="image1" src={loginImage}  />
      </div>

      <div className="right">
        <div id="ti">
        <h1 className="title">
          Sign up <span className="dot">.</span>
          </h1>
          <h1 id="se">(As {role} )</h1>
         
        
        
</div>
        <form className="form1" onSubmit={handleSubmit}>
          <div className="input1">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
           
        

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="phone" id="phone" placeholder="Phone Number" value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)}/>
          </div>
      

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
 
           
     </div>  
          <button type="submit" className="signup-button">Sign up</button>
          <div className="social-login">
  <p id="reg">Or register with</p>
  <div id="mg">
  <button className="gsi-material-button">
  <div className="gsi-material-button-state"></div>
  <div className="gsi-material-button-content-wrapper">
    <div className="gsi-material-button-icon">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
        <path fill="none" d="M0 0h48v48H0z" />
      </svg>
    </div>
    <span className="gsi-material-button-contents">Sign in with Google</span>
    <span style={{ display: "none" }}>Sign in with Google</span>
  </div>
</button>
<button className="microsoft-signin-button">
  <div className="microsoft-button-state"></div>
  <div className="microsoft-button-content-wrapper">
    <div className="microsoft-button-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="24" height="24">
        <rect width="10" height="10" fill="#F35325" />
        <rect x="12" width="10" height="10" fill="#81BC06" />
        <rect y="12" width="10" height="10" fill="#05A6F0" />
        <rect x="12" y="12" width="10" height="10" fill="#FFBA08" />
      </svg>
    </div>
    <span className="microsoft-button-contents">Sign in with Microsoft</span>
    <span style={{ display: "none" }}>Sign in with Microsoft</span>
  </div>
</button>
</div>
</div>

        </form>
      </div>
    </div>
  );
};

export default SignUpUser;
