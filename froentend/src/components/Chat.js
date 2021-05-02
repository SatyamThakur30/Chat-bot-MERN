import React from "react";

export default function Chat({ text, sender,id }) {
  return (
    <div
      className="individual-chat"
      id={`${id}`}
      style={{
        float: `${sender ? "left" : "right"}`,
        display: "block",
        clear: "both",
        backgroundColor: `${sender ? "blue" :"red"}`,
       
      }}
    >
      <p style={{color:"white",marginBottom:"10px",fontSize:"20px",fontWeight:"600"}}>{sender?"Cool dude":"You"}</p>
      <p style={{fontSize:"medium"}}>{text}</p>
    </div>
  );
}
