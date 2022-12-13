import Home from '../Home/Home';
import Navbar from '../navbar/Navbar';
import Notfound from '../Notfound/Notfound';
import Login from './../Login/Login';
import Register from './../Register/Register';
import { Routes, Route,Navigate } from 'react-router-dom';
import Users from '../Users/Users';
import SendMessage from '../SendMessage/SendMessage';
import Messages from '../messages/Messages';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import Protocol from '../Protocol/Protocol';
import NewPassword from '../NewPassword/NewPassword';

function App() {
  let[loginData,setLoginData]=useState(null);

  function setUserData(){
    let token=localStorage.getItem('token');
    let decode =jwtDecode(token);
    setLoginData(decode);
  }
  useEffect( ()=>{
    if(localStorage.getItem('token'))
    setUserData();
  },[])

function logout(){
    localStorage.removeItem('token');
    setLoginData(null);
    Navigate('/Home'); 
  }

  return (
  <>
    <Navbar  loginData={loginData} logout={logout}/>
    <Routes>
      <Route path='/' element={ <Home/>}></Route>
      <Route path='Users' element={ <Users/>}></Route>
      <Route  element={<Protocol loginData={loginData} />}  >
        <Route path='Messages' element={<Messages />}></Route>
      </Route>

      <Route path='NewPassword' element={ <NewPassword/>}></Route>
      <Route path='*' element={ <Notfound/>}></Route>
      <Route path='Login' element={ <Login setUserData={setUserData}/>}></Route>
      <Route path='Register' element={ <Register/>}></Route>
      <Route path='SendMessage' element={<SendMessage />}></Route>
    </Routes>
   
  
  </>
  );
}

export default App;