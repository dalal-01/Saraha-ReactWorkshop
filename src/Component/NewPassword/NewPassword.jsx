import React,{useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NewPassword() {

  let [User,SetUser]=useState({
    email:"",  
    code:"",
    password:"", 
  });
  let[msgError,setMsgError]=useState('');

  let getUser=(e)=>{
    let myUser=  {...User }; 
    myUser[e.target.name]=e.target.value; 
    SetUser(myUser);
}

  let submitData = async (e)=>{
    e.preventDefault();
    let {data}= await axios.patch("http://localhost:3000/api/v1/auth/forgetpassword",User);
    //console.log(data,User)
    if(data.message == "Done")
    {
      GoToLogin();
    }
    else
    {
      setMsgError(data.message)
    }
    
  }


  let navigate = useNavigate();

    function GoToLogin(){
      let path ='/Login';
      navigate(path);
    }

  return (
    <>
      <div className="container text-center my-5">
        <div className="user my-3">
        <i className="fas fa-user-secret user-icon" />
        <h4 className="login">Set New Password</h4>
        </div>
  
  <div className="card p-5 w-50 m-auto">
    <form onSubmit={submitData}>
    {msgError? <div className="alert alert-danger">{msgError}</div>:""}
    <div className="">
        <label htmlFor="email" className="form-label fs-5 "></label>
        <input onChange={getUser} className="form-control my-1 " placeholder="Enter your email" type="email" id="email" name="email" />
    </div>

    <div className="">
        <label htmlFor="code" className="form-label fs-5 "></label>
      <input onChange={getUser} className="form-control my-1 " placeholder="Enter Code you received" type="text" id="text" name="code" />
    </div>

    <div className="">
        <label htmlFor="password" className="form-label fs-5 "></label>
      <input onChange={getUser} className="form-control my-1 " placeholder="Enter your new password" type="password" id="password" name="password" />
    </div>

    <button type="sumbit" className='my-3 btn btn-default-outline'>set New password</button>
    </form>
  </div>
  </div>
    </>
  )
}
