import Home from '../Home/Home';
import Navbar from '../navbar/Navbar';
import Notfound from '../Notfound/Notfound';
import Login from './../Login/Login';
import Register from './../Register/Register';
import { Routes, Route } from 'react-router-dom';
import User from '../User/User';

function App() {
  return (
  <>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Home/>}></Route>
      <Route path='Register' element={ <Register/>}></Route>
      <Route path='Login' element={ <Login/>}></Route>
      <Route path='User' element={  <User/>}></Route>
      <Route path='*' element={ <Notfound/>}></Route>
    </Routes>
  </>
  );
}

export default App;
