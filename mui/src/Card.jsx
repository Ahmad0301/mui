import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

function Card({children}) {
    const {name, age, SetName,SetAge}= useContext(AppContext)
    const update = ()=>{
        SetName("muhammadahmad");
        SetAge(20);
    }
  return (
    <div style={{
        color:"black",
        border:"1px solid black",

    }}>
        this is age{age}
        <br/>
        this is name:{name}
        <br/>
        <button onClick={update}>update</button>
      {children}
    </div>
  )
}

export default Card