import React from "react";
import {increament,decrement,selectcount, increment} from './logic'
import {useSelector,useDispatch} from "react-redux";
function Counter (){
    const count =useSelector(selectcount);
    const dispatch=useDispatch();
    return(
        <>
        <P>{count}</P>
        <button onClick={()=>dispatch(increment)}></button>
        </>
    )
}