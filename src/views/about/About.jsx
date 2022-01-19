import React from 'react'


export default function About() {
    return (
       <> 
            <h1 className='about-heading'>Our Devs</h1>
            <div className='about-container'>
                <div className='about-list'>
                    <section className='alan-sect'>
                    <div className='alan'></div>
                    <span className='dev-bio'>this is some text</span>
                    </section>
                    <section className='cristian-sect'>
                    <div className='cristian'></div>
                    <span className='dev-bio'>this is some text</span>
                    </section>
                    <section className='tanner-sect'>
                    <div className='tanner'></div>
                    <span className='dev-bio'>this is some text</span>
                    </section>
                    <section className='justin-sect'>
                    <div className='justin'></div>
                    <span className='dev-bio'>this is some text</span>
                    </section>
                </div>
            </div>
        </>
    )
}

     
