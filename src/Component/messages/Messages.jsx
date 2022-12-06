import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Mssg.module.css";
import { Link } from "react-router-dom";

export default function Messages() {
  let [messages, setMsg] = useState([]);
  let [Msg,SetM] = useState(false);
  const userToken = localStorage.getItem("token");
  //let navigate = useNavigate();

  const deleteMsg = (messageid) => {
    axios.delete(`http://localhost:3000/api/v1/message/${messageid}`, {
      headers: {
        authorization: `tariq__${userToken}`,
      },
      params: {
        authorization: `tariq__${userToken}`,
      },
    });
  };

  const getMsg = async () => {
    if (userToken?.length) {
      await axios
        .get("http://localhost:3000/api/v1/message", {
          headers: {
            authorization: `tariq__${userToken}`,
          },
        })
        .then((res) => {
          SetM(true);
          setMsg(res.data.messageList);
          if(res.data.messageList != null);
        });
    }
  };

  useEffect(() => {
    getMsg();
  }, [messages]);


  return(<>
  
  
  {Msg?<>
    <div className="container text-center p-5 ">
       <div className="row">
         {messages.map((msg, index) => (
          <div className={`col-md-12 ${styles.box} m-5`} key={index}>
           <div className="col-md-1 text-muted">
            <h4>
             <i className={` fa-solid fa-envelope-open`}></i>Your Msg
            </h4>
       </div>
         <h4 className={`p-5 ${styles.head}`}>{msg.text}</h4>
         <button
         className={` ${styles.b}  `}
        onClick={() => deleteMsg(msg._id)}
         >
         Delete
       </button>
    </div>))}
</div>
</div></>
:''}
  
  {!Msg?
  <>
  <div className="container text-center p-5">
         <div className="row">
              <div className={`col-md-12 ${styles.box}`}>
              <div className="col-md-1 text-muted">
                <h4>
                  <i className={`fa-solid fa-envelope-open`}></i>
                </h4>
              </div>
              <h4 className={`p-5 `}>You don't have any message yet!</h4>
              <button
                className={` ${styles.b}`}>
                  <Link to='/Users' className={` ${styles.sendmsg}`}>Send Message</Link>
              </button>
            </div>
            </div>
        </div>
      </>
  
  
  :''}
  
  </>)
}