import React from 'react'
import { useState, useEffect } from 'react'


export const Loader = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {setLoading(false)},[])
    console.log('loading', loading)
    return (
        <> 
            { loading ? <Loader /> : 
                (
                <div className='loading-container'> 
                    <span className='loader'></span>
                </div>
            )}
         </>
    
    )
}

