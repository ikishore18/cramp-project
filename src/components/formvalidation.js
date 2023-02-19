import React, { useState } from "react";
function Validation(){
    const[name,setname]=useState('');
    const[password,setpassword]=useState('');
    const[nameerr,setnameerr]=useState(false);
    const[passwordErr,setpasswordErr]=useState(false);

    function Validate(){
        if(name.trim().length===0){
            setnameerr(true)

        }else{
            setnameerr(false)

        }
        if(password.trim().length===0){
            setpasswordErr(true)

        }else{
            setpasswordErr(false)

        }

    }

    return(
        <>
        <p>User Name </p>
        <input 
        type={'text'}
        value={name}
        onChange={(e)=>setname(e.target.value)}
        />
        {nameerr && <small>* Enter Name</small>}
        <p>Password</p>
        <input 
        type={'password'}
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        />
        {passwordErr && <small>* Enter Password</small>}
        <br></br>
        <button onClick={Validate}>Login</button>
        </>

    )
}
export default Validation