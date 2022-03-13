import React from 'react'
import './card.css'

import {FcLike} from 'react-icons/fc'

import { Link } from 'react-router-dom'



export  function Card({photo}) {
    
   
    
 


    return (
        <div className='card_container'>
       <Link to={'/photo/' + photo.id} >
            <div className='card_img' >
            <img src={photo.src.large} 
            alt={photo.type}
           
                
            />
            
            </div>
            
            </Link>
        </div>
    )
}
