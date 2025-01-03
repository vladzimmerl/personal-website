import './about.css'
import { useState } from 'react'

function About() {

  const about = '_about'
  const text = '_about-text'

  return (
    <div className={about}>
        <p className={text}>
          Hi! I am a 3rd year student at McGill University in Montreal working towards my B.S. in Software Engineering.
          <br></br>I built this website using React to showcase the projects I have worked on while at the university.
          Aside from programming, I enjoy playing ultimate frisbee as a player on McGill's division 1
          team. I also coach ultimate at Marianopolis College.
        </p>
    </div>
  )
}

export default About
