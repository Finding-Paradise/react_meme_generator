import React from 'react'
import '../components/Header.css'
import logo from '../assets/troll_face.png'

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt="" height="27px"/>
      <h2>Meme Generator</h2>
      <p>React Course - Project 3</p>
    </header>
  )
}

export default Header