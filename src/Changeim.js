import React from 'react'
import { useState } from 'react'
import img1 from "./ch1.jpg"
import img2 from "./ch2.jpg"

function Changeim() {

    const [image,setImage]=useState(img1);

function changeimg(){
    setImage(img2)
}

  return (
    <div>
        <img src={image} alt='img1'/>
        <button onClick={changeimg}>Change image</button>
    </div>

  )
}

export default Changeim