import React from 'react'
import work4 from "../img/work4.jpg"
import work5 from "../img/work5.jpg"
import work6 from "../img/work6.jpg"
import work1 from "../img/work1.jpg"
import work2 from "../img/work2.jpg"
import work3 from "../img/work3.jpg"
export const Work = () => {
  return (
    <div>

<section className="work section" id="work">
  <h2 className="section-title">Work</h2>
  <div className="work__container bd-grid">
    <a href="" className="work__img">
      <img src={work1} alt="work1" />
    </a>
    <a href="" className="work__img">
      <img src={work2} alt="work3" />
    </a>
    <a href="" className="work__img">
      <img src={work3} alt="work3" />
    </a>
    <a href="" className="work__img">
      <img src={work4} alt="work4" />
    </a>
    <a href="" className="work__img">
      <img src={work5} alt="work5" />
    </a>
    <a href="" className="work__img">
      <img src={work6} alt="work6" />
    </a>
  </div>
</section>

    </div>
  )
}
