import React from 'react'
import { Loader } from '../../components/loader/Loader'
import { useEffect, useState } from 'react'


export default function About() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {setLoading(false)},[])
     if (loading) {<Loader />} 
    console.log('loading', loading)
    return (
        <div>
            <h1>All about Alan, yo</h1>
        </div>
    )
}

     
