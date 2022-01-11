import React, { useEffect, useState } from 'react'

export default function CampFinder() {
    const [ setSearchResults] = useState([])

    useEffect(() => {
        const getResults = async () => {
            const apiSearchResults = await fetchResults()
            setSearchResults(apiSearchResults)
        }
        getResults()
    }, [])

    const fetchResults = async () => {
        const res = await fetch ( "some env thing");
         const data = await res.json()
            console.log(data)

    }

    return (
        <div>
            <h1>Search campgrounds ya dingus</h1>

        </div>
    )
}
