import React from 'react'

export const Contactus = () => {
  return (
    <div>

<section className="contact section" id="contact">
  <h2 className="section-title">Contact</h2>
  <div className="contact__container bd-grid">
    <form action="" className="contact__form">
      <input type="text" placeholder="Name" className="contact__input" />
      <input type="mail" placeholder="Email" className="contact__input" />
      <textarea
        name=""
        id=""
        cols={0}
        rows={10}
        className="contact__input"
        defaultValue={""}
      />
      <input
        type="button"
        defaultValue="SUBMIT"
        className="contact__button button"
      />
    </form>
  </div>
</section>

    </div>
  )
}
