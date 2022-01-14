import React from 'react'
import { useState, useEffect } from 'react'
import { Loader } from '../../components/loader/Loader'

export default function Home() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {setLoading(false)},[])
    console.log('loading', loading)
    return (
       <> 
       { loading ? <Loader /> : 
         (<div className='loading-container'>
            <h2>Landing Page</h2>
        </div>)}
        </>
        )
    }