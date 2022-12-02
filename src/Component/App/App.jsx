import Home from '../Home/Home';
import Navbar from '../navbar/Navbar';
import Notfound from '../Notfound/Notfound';
import Login from './../Login/Login';
import Register from './../Register/Register';
import { Routes, Route } from 'react-router-dom';
import User from '../User/User';
import SendMessage from '../SendMessage/SendMessage';
import Messages from '../messages/Messages';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
function App() {
  let[loginData,setLoginData]=useState(null);

  function setUserData(){
    let token=localStorage.getItem('token');
    let decode =jwtDecode(token);
    setLoginData(decode);
    console.log(loginData);
  }
  useEffect( ()=>{
    if(localStorage.getItem('token'))
    setUserData();
  },[])
  return (
  <>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Home/>}></Route>
      <Route path='Register' element={ <Register/>}></Route>
      <Route path='Login' element={ <Login setUserData={setUserData}/>}></Route>
      <Route path='User' element={  <User/>}></Route>
      <Route path='Messages' element={<Messages />}></Route>
      <Route path='*' element={ <Notfound/>}></Route>
      <Route path='SendMessage' element={<SendMessage />}></Route>
    </Routes>
   
  
  </>
  );
}

export default App;
