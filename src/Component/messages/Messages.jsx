import React from 'react'

export default function Messages() {
    let [messages,setMsg] = useState([]);
    //let navigate = useNavigate();
  
    async function getMsg()
    {
        let {data} = await axios.get("localhost:3000/api/v1/message/");
        setMsg(data);   
    }
    useEffect ( ()=>{
      getMsg();
    },[]);
    
   
    return (
   <>
  <div className="container text-center my-5 py-5 ">
    <h4 className='fs-3 m-5'>Your Msg</h4>

    </div>
    <div className='row mt-5' >
      {messages.map( (msg,index) =>
          <div className=''  key={index}>
            <h3 className={`p-5 ${style.head}`}>{msg.Messages}</h3>
          </div>  
      )}
    </div>
  
  

  
   </>
    )
}
