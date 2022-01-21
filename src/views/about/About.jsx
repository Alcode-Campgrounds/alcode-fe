import React from "react";

export default function About() {
  return (
    <>
      <div>
        <a className='about-heading'  href="https://github.com/Alcode-Campgrounds" >
          About Us
        </a>
      </div>

      <div className="about-container">
        <div className="about-list">
          <section className="alan-sect">
                <div className="alan"></div>
                <p className='bio-txt'>Hi, I'm Alan "Verbose Beast Mode" Willoughby!</p>  
          <div className="dev-bio">
              <a className="social-links-github" href="https://github.com/satyadvaya" >
                
              </a>
              <a className="social-links-linkedIn"
                href="https://www.linkedin.com/in/alan-willoughby/"
              >
              </a>
              <a
                className="social-links-email"
                href="mailto:satyadvaya@gmail.com?subject=Inquiry"
              >
              </a>
            </div>
          </section>
          <section className="cristian-sect">

            <div className="dev-bio">
              <a
                className="social-links-github"
                href="https://github.com/cristi className='social-links'n-montes"
              >
              </a>
              <a
                className="social-links-linkedIn"
                href="https://www.linkedin.com/in/cristianmontesmujica/"
              >
              </a>
              <a
                className="social-links-email"
                href="mailto:cmontesmujica@gmail.com?subject=Inquiry"
              >
              </a>
            </div>
            <aside className='bio-txt'>Hi, I'm Cristian Montes!</aside>
            <div className="cristian"></div>
            
          </section>
          <section className="tanner-sect">
          
            <div className="tanner"></div>
            <aside className='bio-txt'>Hi, I'm Tanner Meck!</aside>
            <div className="dev-bio">
              <a className="social-links-github" href="https://github.com/tannermeck">
              </a>
              <a
                className="social-links-linkedIn"
                href="https://www.linkedin.com/in/tanner-meck/"
              >
              </a>
              <a
                className="social-links-email"
                href="mailto:t.meck@students.clark.edu?subject=Inquiry"
              >
              </a>
            </div>
          </section>
          <section className="justin-sect">
            <div className="dev-bio">
              <a
                className="social-links-github"
                href="https://github.com/justin-w-soto"
                >
              </a>
              <a
                className="social-links-linkedIn"
                href="https://www.linkedin.com/in/justinwsoto/"
                >
              
              </a>
              <a
                className="social-links-email"
                href="mailto:justinwsoto@gmail.com?subject=Inquiry"
                >
              </a>
            </div>
                  <p className='bio-txt'>Hi, I'm Justin Soto!</p>
            <div className="justin"></div>
          </section>
        </div>
      </div>
    </>
  );
}
