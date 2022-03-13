import React, { useEffect, useState } from 'react'
import HttpRequest from '../Helpers/HttpRequest'
import './suggested.css'

const Suggested = () => {
    const [suggested, setSuggested]= useState([])

    useEffect(()=>{
        HttpRequest('collections/featured')
        .then((data) =>{
            console.log(data)
            setSuggested(data.collections)
        })

    },[])
  return (
    <div className='suggestion_div'>
    {suggested.map((item)=>(
        
        <div key={item.id} className='suggested_div'>{item.title}</div>
    ))}
    </div>
  )
}

export default Suggested