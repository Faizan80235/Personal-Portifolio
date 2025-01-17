import React from 'react'
import about from "../img/about.jpg"
export const About = () => {
  return (
    <div>

<section className="about section " id="about">
  <h2 className="section-title">About</h2>
  <div className="about__container bd-grid">
    <div className="about__img">
      <img src={about} alt="Faizan" />
    </div>
    <div>
      <h2 className="about__subtitle">I'am Faizan Ali</h2>
      <p className="about__text">
        My name is Faizan Ali. I am Frontend and Backend Developer.I am from
        Pakistan. I am Graduated in BS Computer Science.I Specialized in
        Software Engerniering
      </p>
    </div>
  </div>
</section>

    </div>
  )
}
