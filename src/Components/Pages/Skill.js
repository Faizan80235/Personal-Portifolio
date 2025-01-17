import React from 'react'

import work3 from "../img/work3.jpg"

export const Skill = () => {
  return (
    <div>
        <section className="skills section" id="skills">
  <h2 className="section-title">Skills</h2>
  <div className="skills__container bd-grid">
    <div>
      <h2 className="skills__subtitle">Profesional Skills</h2>
      <p className="skills__text">
        I am Web Developer. I work on
        HTML5,CSS3,JAVASCRIPT,MONGODB,EXPRESS,REACT.JS,NODE.JS
      </p>
      <div className="skills__data">
        <div className="skills__names">
          <i className="bx bxl-html5 skills__icon" />
          <span className="skills__name">HTML5</span>
        </div>
        <div className="skills__bar skills__html"></div>
        <div>
          <span className="skills__percentage">100%</span>
        </div>
      </div>
      <div className="skills__data">
        <div className="skills__names">
          <i className="bx bxl-css3 skills__icon" />
          <span className="skills__name">CSS3</span>
        </div>
        <div className="skills__bar skills__css"></div>
        <div>
          <span className="skills__percentage">85%</span>
        </div>
      </div>
      <div className="skills__data">
        <div className="skills__names">
          <i className="bx bxl-javascript skills__icon" />
          <span className="skills__name">JAVASCRIPT</span>
        </div>
        <div className="skills__bar skills__js"></div>
        <div>
          <span className="skills__percentage">85%</span>
        </div>
      </div>
      <div className="skills__data">
        <div className="skills__names">
          <i className="bx bxs-paint skills__icon" />
          <span className="skills__name">REACT.JS</span>
        </div>
        <div className="skills__bar skills__ux"></div>
        <div>
          <span className="skills__percentage">85%</span>
        </div>
      </div>
    </div>
    <div>
      <img src={work3} alt="" className="skills__img" />
    </div>
  </div>
</section>

    </div>
  )
}
