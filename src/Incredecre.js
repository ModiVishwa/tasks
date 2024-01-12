import React from 'react'
import { useState } from 'react'
function Incredecre() {

    const [num,setNum]=useState(0);
    
        function inc(){
            setNum(num+1);
        };
        function decr(){
            if (num<=0){
                return setNum(0);
            }else {
                return setNum(num-1);
            }
        };
    

  return (

    <div style={{fontSize:20}}>
        <button className="id"onClick={inc}>+</button>
        <button className="id2"onClick={decr}>-</button>
        <p>{num}</p>
    </div>
  )
}

export default Incredecre