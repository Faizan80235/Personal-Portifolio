import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../Header'
import Home from '../Pages/Home'
import { About } from '../Pages/About'
import { Skill } from '../Pages/Skill'
import { Work } from '../Pages/Work'
import { Contactus } from '../Pages/Contactus'
import { Footer } from '../Footer'
export default function Routing() {
  return (
    <div>
<BrowserRouter>

<Header></Header>
<Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/About" element={<About></About>}></Route>
    <Route path="/Skills" element={<Skill></Skill>}></Route>
    <Route path="/Work" element={<Work></Work>}></Route>
    <Route path="/Contact" element={<Contactus></Contactus>}></Route>
</Routes>

<br />
<br />
<Footer></Footer>
</BrowserRouter>
    </div>
  )
}
