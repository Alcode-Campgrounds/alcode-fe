import React from 'react'


export default function About() {
    return (
       <> 
            <h1 className='about-heading'>Our Devs</h1>
            <div className='about-container'>
                <div className='about-list'>
                    <section className='alan-sect'>
                    <div className='alan'></div>
                    <p className='dev-bio'>this is some text</p>
                    </section>
                    <section className='cristian-sect'>
                    <div className='cristian'></div>
                    <p className='dev-bio'>this is some text</p>
                    </section>
                    <section className='tanner-sect'>
                    <div className='tanner'></div>
                    <p className='dev-bio'>this is some text</p>
                    </section>
                    <section className='justin-sect'>
                    <div className='justin'></div>
                    <p className='dev-bio'>this is some text</p>
                    </section>
                </div>
            </div>
        </>
    )
}

     
