import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className='hero-container'>
                <div className='hero-img' style={{ backgroundImage: 'url(../assets/hero.jpg)' }} alt='campers by a lake with a tent and a cozy fire'></div>
                <section className='hero-txt'>YOUR GO-TO APP WHEN YOU WANT TO GET OUTSIDE</section>
                <section className='hero-subtxt'>Let us help you plan your next big adventure</section>

                <Link to="/signup">
                    <button className='hero-btn'>Lets go!</button>
                </Link>
            </div>
        </>
    )
}