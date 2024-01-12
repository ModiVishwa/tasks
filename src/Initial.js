import {useState} from 'react'
import {useEffect} from 'react'

function Initial() {

const[count, setCount]=useState(0);

useEffect(()=>{
    const interval=setInterval(()=>{
        setCount(count+1);

    },1000);

},)
 
  return (
    <div>
        <h1>the counter value is :{count}</h1>
    </div>
  )
}

export default Initial