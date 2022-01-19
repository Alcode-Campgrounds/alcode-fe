import React from 'react'


export default function About() {
    return (
       <> 
            <h1 className='about-heading'>Our Devs</h1>
            <div className='about-container'>

                <div className='about-list'>
                    <section className='alan-sect'>
                    <div className='alan'></div>
                    <div className='dev-bio'>this is some textContrary to popular belief</div>
                    </section>
                    <section className='cristian-sect'>
                    <div className='cristian'></div>
                    <div className='dev-bio'>this is some text</div>
                    </section>
                    <section className='tanner-sect'>
                    <div className='tanner'></div>
                    <div className='dev-bio'>this is some text</div>
                    </section>
                    <section className='justin-sect'>
                    <div className='justin'></div>
                    <div className='dev-bio'>this is some text</div>
                    </section>
                </div>
            </div>
        </>
    )
}

     
