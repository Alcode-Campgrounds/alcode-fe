import React from 'react'
import { useState, useEffect } from 'react'
import { Loader } from '../../components/loader/Loader'


export default function Contact() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {setLoading(false)},[])
    console.log('loading', loading)
    return (
        <> 
        { loading ? <Loader /> : 
          (<div className='loading-container'>
             <h1>Contact</h1>
         </div>)}
         </>
     )
 }
 
      
