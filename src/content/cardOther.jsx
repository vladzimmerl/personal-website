import './card.css'
import { useState } from 'react'
import gitImg from '/git.svg'

function Other() {

  const card = '_card'
  const headingContainer = '_card-heading-container'
  const git = '_card-git'
  const title = '_card-title'
  const paragraph = '_card-p'

  return (
    <div className={card} style={{ backgroundImage: `url('/ufo3.png')` }}>

      <div className={headingContainer}>
        <p className={title}>Other University Projects</p>
      </div>

      <p className={paragraph}>- A database system using <strong>Java</strong> and <strong>IBM db2</strong> to function as a reservation system similar to AirBnb. Worked in a group of 4 team members.</p>
      <p className={paragraph}>- A toy operating system built in <strong>C</strong> implementing a command line interface, a file system and multitasking execution.</p>
      <p className={paragraph}>- A testing suite built in Java. The goal was to validate a to-do list application using unit testing with <strong>JUnit</strong>, story testing with <strong>Cucumber/Gherkin</strong>, and performance testing with <strong>sonarqube/Windows-perform</strong>. Created in a group of 3 team members.</p>
      <p className={paragraph}>- Currently working on a game project in a group of 7 people that is a reinterpretation of the classic 1994 game X-COM: UFO Defense. Built with <strong>C#</strong> and <strong>Unity</strong>.</p>

    </div>
  )
}

export default Other
