import './name.css'
import { useState } from 'react'

function Name() {

  const name = '_name'
  const title = '_name-title'
  const menuContainer = '_name-container'
  const menuSection = '_name-section'

  return (
    <div className={name}>

      <h1 className={title}>Vlad Zimmerl</h1>

      <div className={menuContainer}>

        <a className={menuSection} href='#about'>About</a>

        <a className={menuSection} href='#mcmeet'>Booking Website</a>

        <a className={menuSection} href='#ai'>AI Competition</a>
        
        <a className={menuSection} href='#other'>Other Projects</a>

        <a className={menuSection} href='#courses'>University Coursework</a>

      </div>

    </div>
  )
}

export default Name