import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
       <>   
            <div className='hero-container'>
            <div  className='hero-img' style={{ backgroundImage: 'url(../hero.jpg)'}}></div>
            <section className='hero-txt'>YOUR GO-TO APP WHEN YOU WANT TO GET OUTSIDE</section>
            <section className='hero-subtxt'>Over 100,000 campsites to choose from on your next big adventure</section>
            
            <Link to="/signup">
            <button className='hero-btn'>Lets go!</button>
            </Link>
            </div>
        </>
        )
    }