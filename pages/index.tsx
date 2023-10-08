import React, {ChangeEvent, useEffect, useState} from 'react'

function index() {
  const [serverMsg, setServerMsg]=useState("Loading");
  const [serverArr, setServerArr]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:8081/").then(
      response=>response.json()
    ).then(
      data => {
        setServerMsg(data.message);
        setServerArr(data.testArr);
      }
    )
  }, [])

  return (
    <div className='index'>
      <div>{serverMsg}</div>
      <div>
        {serverArr.map((msg)=>(
          <div key={msg}>{msg}</div>
        ))}
      </div>
    </div>
  )
}

export default index