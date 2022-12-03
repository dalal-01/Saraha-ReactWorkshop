import React,{useState  , useEffect} from 'react'
import { Link ,  useNavigate  } from 'react-router-dom';
import axios from 'axios';
import style from './Home.module.css';

export default function Home() {
 
  let [users,setUsers] = useState([]);
  let [search,setSearh] = useState("");
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
<div className="container text-center my-5 py-5 ">
  <h4>Sarahah allows you to receive constructive feedback from your friends and co-workers</h4>
  <div className="buttons d-flex justify-content-center align-items-center  flex-column">
    <Link to="/Login" className="btn btn-default-outline my-4"><i className="fas fa-user" /> Login</Link>
    <Link to="/Register" className="btn btn-default-outline"><i className="far fa-edit" /> Register</Link>
  </div>


  <div className='row mt-5' >

  <div className="div m-3">
  <input onChange={(e)=>{setSearh(e.target.value)}} className="form-control me-2" type="text" placeholder="Search"/> 
  </div>

    {users.filter((val)=>{
      if(search == ""){
        return val;
      } else
       if(val.userName.toLowerCase().includes(search.toLowerCase())){
            return val;
      }
    }).map( (user,index) =>
        <div className={`d-flex flex-row m-3  p-2 ${style.head}`}  key={index}>
        <div className=" col-md-4 "><i className={` ${style.i} fa-solid fa-user fa-2x  `}></i></div>
       <h3 className="col-md-1">{user.userName} <div className="col-md-1 fs-5 text-muted">{user.email}</div></h3>
       
       <div onClick={()=>sendUserMessage(user._id,user.userName)} className={`col-md-6 mt-2 ${style.msg}`}><i className="fa-solid fa-envelope fa-2x"></i></div>

        </div>  
    )}
  </div>
</div>

 </>
  )
}
