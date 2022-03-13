import { createClient } from 'pexels';
import React, { useEffect } from 'react'

const pexelsKey = process.env.REACT_APP_PEXELS_KEY;
const client = createClient(pexelsKey);
const pexelsUrl= "https://api.pexels.com/v1/"



export function HttpRequest(path){

    
  return (
    
        fetch(pexelsUrl + path, {
            
                headers: {
                  Authorization: pexelsKey,
                },
              }
            )
            .then((res)=>res.json())
        )

   
  
}

export default HttpRequest