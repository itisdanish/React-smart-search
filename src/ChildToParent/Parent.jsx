import { useState } from "react";
import Child from "./Child";

const Parent = () => {
const [message,setMessage]=useState('')


const handleData = (childData)=>{
  setMessage(childData)
}

  return (
    <>
      <h1>Parent component</h1>
      <h2>Child Data : {message}</h2>
      <Child sendData = {handleData}/>
    </>
  );
};

export default Parent;
