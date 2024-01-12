
import React from 'react';
import  { useState } from 'react'
function Stylee() {


const [a, setA]=useState('blue');

function chnsty(){
    setA('red');
}

  return (
    <div>style
    <h1 style={{backgroundColor:a}}>It's a HAPPY day!</h1>
    <button onClick={chnsty}>Change Color</button>

    </div>
  )
}

export default Stylee