import React, { useEffect, useState } from "react";
import axios from "axios";
function Album(){
    const[loading,setload]=useState(true)
    const[show,setData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((res)=>{
            setData(res.data);
            setload(false)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return(
        <>
        {loading && <p>Loading....</p>}
        {show.length > 0 && show.map((ele)=>{
            return<>
            <img src={ele.thumbnailUrl}/>
            <p>{ele.title}</p>
            </>
        })}
        </>
    )
}
export default Album