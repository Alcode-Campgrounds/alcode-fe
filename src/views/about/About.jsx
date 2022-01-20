import React from "react";

export default function About() {
  return (
    <>
      <div>
        <a className='about-heading'  href="https://github.com/Alcode-Campgrounds" alt="Contact Us">
          About Us
        </a>
      </div>

      <div className="about-container">
        <div className="about-list">
          <section className="alan-sect">
            <figure>
                <div className="alan"></div>
              <figcaption>
                  Alan<br/>
                  does stuff
              </figcaption>
            </figure>

          <div className="dev-bio">
              <a className="social-links-github" href="https://github.com/satyadvaya">
                
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
          <figure>
            <div className="cristian"></div>
              <figcaption>
                  Cristian<br/>
                  does stuff
              </figcaption>
            </figure>
          </section>
          <section className="tanner-sect">

          <figure>
            <div className="tanner"></div>
              <figcaption>
                  Tanner<br/>
                  does stuff
              </figcaption>
            </figure>
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
            <figure>
            <div className="justin"></div>
              <figcaption>
                  Justin<br/>
                  does stuff
              </figcaption>
            </figure>
          </section>
        </div>
      </div>
    </>
  );
}
