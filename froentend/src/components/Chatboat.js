import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import axios from "axios"


export default function Chatboat() {
  const [chats, setChats] = useState([]);
  const [current, setCurrent] = useState("");
  function updateScroll(){
    var element = document.getElementById("yourDivID");
    element.scrollTop = element.scrollHeight;
}

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData=async(text)=>{
    console.log(localStorage.getItem("tresorUser"))
    const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("tresorUser")}`,
        },
      }
    const resp=await axios.post("/query",{text},config)
    console.log(resp.data)
    setChats((state)=>[...state,{isboat:true,text:resp.data}])
    updateScroll()

  }


  useEffect(() => {
      fetchData("hello")
   
   
  }, [])

 

  const handleChange = (e) => {
    e.preventDefault();
    setCurrent(e.target.value);
    console.log(current);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(current);

    setChats((state) => [...state, { isboat: false, text: current }]);
    
    fetchData(current)
    setCurrent("");
    updateScroll()

    
 
   
  };
  return (
    <>
      <div className="chatboat-container">
        <section className="name-section">
          <h3>Cool-Dude</h3>
        </section>
        <section className="chats-container" id="yourDivID">
          {chats.map((ele, id) => (
         <Chat text={ele.text} key={id} id={id} sender={ele.isboat} />
          ))}
        </section>
        <br />
        <section className="input-container">
          <input
            type="text"
            name="userInput"
            onChange={handleChange}
            value={current}
            placeholder="start typing"
          />

          <button onClick={handleSubmit}>Send</button>
        </section>
      </div>
    </>
  );
}
