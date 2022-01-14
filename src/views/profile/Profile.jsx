import React from 'react'
import { useState, useEffect } from 'react'
import { Loader } from '../../components/loader/Loader'

export default function Profile() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {setLoading(false)},[])
    console.log('loading', loading)
    return (
       <> 
       { loading ? <Loader /> : 
         (<div className='loading-container'>
            <h2>This is your life</h2>
        </div>)}
        </>
        )
    }
