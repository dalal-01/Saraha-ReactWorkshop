import React,{useState  , useEffect} from 'react'
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';
import style from './Users.module.css'

export default function Users() {

  let [users,setUsers] = useState([]);
  let [search,setSearch] = useState("");
  let navigate = useNavigate();

  async function getUsers ()
  {
      let {data} = await axios.get("http://localhost:3000/api/v1/auth/allusers")
      setUsers(data.users)     
  }
  useEffect ( ()=>{
    getUsers();
  },[])
  
  function sendUserMessage(id,name)
  {
    navigate({
      pathname:'/SendMessage',
      search:`?id=${id}&name=${name}`,
    })
  }

  return (
    <>
      <div className="container">
      <div className='row mt-5 justify-content-around' >
        <div className="div m-3">
        <input onChange={(e)=>{setSearch(e.target.value)}} className="form-control m-auto w-75" type="text" placeholder="Search"/> 
      </div>
    
    {users.filter((val)=>{
      if(search == ""){
        return val;
    } else
      if(val.userName.toLowerCase().includes(search.toLowerCase())){
        return val;
    }
      }).map( (user,index) =>
        <div className={`d-flex col-md-5 my-3 p-2  ${style.head}`}  key={index}>
          <div className=" col-md-4 "><i className={` ${style.i} fa-solid fa-user fa-2x `}></i></div>
          <h3 className="col-md-1">{user.userName} <div className="col-md-1 fs-5 text-muted">{user.email}</div></h3>
          <div onClick={()=>sendUserMessage(user._id,user.userName)} className={`col-md-6 mt-2 ${style.msg}`}><i className="fa-solid fa-envelope fa-2x"></i></div>
        </div>  
      )}

      </div>
      </div>
    </>
  )
}

