import React, { useEffect, useState } from 'react'
import B from './B'
import C from './C'

 

const A = () => {


    const [name,setname]= useState(1);

    const addelement = () =>{
        setname(name+1)
    }
    useEffect(() => {
        // Update the document title using the browser API
        console.log("dhsgfhg")
      },[name]);
    return (
    <div>
        <B name="vishal"/>
        <C></C>
        <div>{name}</div>
        <button onClick={addelement}>Add</button>
    </div>
  )
}

export default A