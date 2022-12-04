import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {

   let [User,SetUser]=useState({
    userName:"",
    email:"",
    password:"",
    cpassword:"",
    
  }
   );
   let [msgError, setMsgError] = useState('');
   let [loading,setLoading] = useState(false);

let getUser=(e)=>{
   let myUser=  {...User }; 
   myUser[e.target.name]=e.target.value; 
   SetUser(myUser);
}


let navigate = useNavigate();
function GoToLogin(){
   let path ='/Login';
   navigate(path);
   }

let submitData = async (e)=>{
      e.preventDefault();
      let {data}= await axios.post("http://localhost:3000/api/v1/auth/signUp",User);
      console.log(data);

   if(data.message=='done'){
      setLoading(true);
      GoToLogin();
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
    <h4 className="login">Register</h4>
      </div>

      <div className="card p-5 w-50 m-auto">
         <form onSubmit={submitData}>
         {msgError? <div className="alert alert-danger">{msgError}</div>:""}

   <div className="">
      <label htmlFor="userName" className="form-label fs-5 "></label>
       <input onChange={getUser} className="form-control my-1 " placeholder="Enter your userName" type="text" id="userName" name="userName" />
    </div>


   <div className="">
       <label htmlFor="email" className="form-label fs-5 "></label>
       <input onChange={getUser} className="form-control my-1 " placeholder="Enter your email" type="email" id="email" name="email" />
    </div>


   <div className="">
       <label htmlFor="password" className="form-label fs-5 "></label>
      <input onChange={getUser} className="form-control my-1" placeholder="Enter your password" type="password" id="password" name="password" />
   </div>

   <div className="">
      <label htmlFor="cpassword" className="form-label fs-5 "></label>
      <input onChange={getUser}  className="form-control my-1 " placeholder="Enter your cpassword" type="password" id="cpassword" name="cpassword" />
  </div>
      <button type="submit" className='my-3  btn btn-default-outline'>
         {loading?<i className="fa-solid fa-spinner fa-spin"></i>:"Register"}
      </button>
         </form>
      </div>

   </div>
</>
)
}
