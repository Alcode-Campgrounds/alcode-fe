import React from 'react'
import { Loader } from '../../components/loader/Loader'
import { useEffect, useState } from 'react'


export default function About() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {setLoading(false)},[])
    console.log('loading', loading)
    return (
       <> 
       { loading ? <Loader /> : 
         (<div className='loading-container'>
            <h1>All about Alan, yo</h1>
        </div>)}
        </>
    )
}

     
