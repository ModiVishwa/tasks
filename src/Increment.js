import React from 'react'
import { useState } from 'react'
function Increment() {

    const[num, setNum]=useState(10);
    function incre(){
        setNum(num+1);
    }

  return (
    <div>
       
   <button onClick={incre}>Increment</button>
   <p>VALUE IS INCREMENTED...{num}!</p>
    </div>
  )
}

export default Increment