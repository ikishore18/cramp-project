import React, { useState } from "react";
function Stateexample (){
let [Data,setData]=useState(10);
function header(){
  setData(Data+10)
}
return(
  <>
  <p>{Data}</p>
  <button onClick={header}>increment</button>
  </>
)
}

export default Stateexample