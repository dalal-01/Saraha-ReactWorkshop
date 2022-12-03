import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login({setUserData}) {

  let [User,SetUser]=useState({
    password:"",
    email:"",   
  }
  );

let[msgError,setMsgError]=useState('');

let getUser=(e)=>{
    let myUser=  {...User }; 
    myUser[e.target.name]=e.target.value; 
    SetUser(myUser);
}

let navigate = useNavigate();

function GoToMsg(){
    let path ='/Messages';
    navigate(path);
}

let submbitrData = async (e)=>{
      e.preventDefault();
      let {data}= await axios.post("http://localhost:3000/api/v1/auth/signin",User);
      console.log(data);
      
      if(data.message=='login'){
          localStorage.setItem('token',data.loginToken);
          setUserData();
          GoToMsg();
      }
      else{
          setMsgError(data.message)
        }
}

return (
  <>
  
<div className="container text-center my-5">
  <div className="user my-3">
    <i className="fas fa-user-secret user-icon" />
    
    <h4 className="login">Login</h4>
  </div>
  
  <div className="card p-5 w-50 m-auto">
    <form onSubmit={submbitrData}>
{msgError? <div className="alert alert-danger">{msgError}</div>:""}
    <div className="">
        <label htmlFor="email" className="form-label fs-5 "></label>
        <input onChange={getUser} className="form-control my-1 " placeholder="Enter your email" type="email" id="email" name="email" />
    </div>

    <div className="">
        <label htmlFor="password" className="form-label fs-5 "></label>
      <input onChange={getUser} className="form-control my-1 " placeholder="Enter your password" type="password" id="password" name="password" />
    </div>

  <button type="sumbit" className='my-3 btn btn-default-outline'>Login</button>
    </form>
  </div>


</div>
</>
  )
}