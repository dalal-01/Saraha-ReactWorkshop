import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function Messages() {
    let [messages,setMsg] = useState([]);
    const userToken=localStorage.getItem("token");
    //let navigate = useNavigate();
    
    function deleteMsg (messageid){
      axios.delete(`http://localhost:3000/api/v1/message/ ${messageid}`,{
        headers:{
          authorization:`tariq__${userToken}`,
        },
        params:{
          authorization:`tariq__${userToken}`,
        },
      })

    }


    const getMsg = async()=>
    {
      if(userToken?.length){
        await axios.get("http://localhost:3000/api/v1/message",{
          headers:{
            authorization:`tariq__${userToken}`,
          },
         })
         .then((res)=>{
          
          setMsg(res.data.messageList
            );
         })
         .catch((error)=>{
          console.error(error);
         });
        } else {
        console.log("error");
        }
        
           
    };
  console.log("3",messages);

    useEffect ( ()=>{
      getMsg();
    },[messages]);
    
   
    return (
   <>
  <div className="container text-center my-5 py-5 ">
    <h4 className='fs-3 m-5'>Your Msg</h4>

    </div>
    <div className='row mt-5' >
      {messages.map( (msg,index) =>
          <div className=''  key={index}>
            <h3 className={`p-5`}>{msg.text}</h3>
      
            <button onClick={()=>deleteMsg(msg._id)}>deletee</button>
          </div>  
      )}
    </div>
  
  

  
   </>
    )
      }
    
