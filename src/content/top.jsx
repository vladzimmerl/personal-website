import './top.css'
import { useState } from 'react'
import Name from './name'
import faceImg from '/headwhitelogo3.png'
import downImg from '/down.svg'
import linkedinImg from '/linkedin2.png'
import githubImg from '/github2.png'
import emailImg from '/email2.png'
import resumeImg from '/resume.png'
import Icon from './icon'

function Top() {

  const top = '_top'
  const pic = '_top-pic'
  const leftContainer = '_top-left-container'
  const name = '_top-name'
  const bottomContainer = '_top-bottom-container'
  const down = '_top-down'
  const ghostDown = '_top-ghost-down'
  const contactContainer = '_top-contact-container'
  const icon = '_top-icon'

  return (
    <div className={top}>

      <div className={leftContainer}>

        <div className={name}><Name /></div>

        <div className={bottomContainer}>
          <div className={down}><Icon title='content' href='#about' src={downImg} _height='2.5rem' _width='auto'></Icon></div>

          <div className={contactContainer}>
            
            <div className={icon}><Icon title='vladzimmerl@gmail.com' href='mailto:vladzimmerl@gmail.com' src={emailImg} _height='auto' _width='2.5rem'></Icon></div>
            <div className={icon}><Icon title='likedin' href='https://www.linkedin.com/in/vlad-zimmerl/' src={linkedinImg} _height='2rem' _width='auto'></Icon></div>
            <div className={icon}><Icon title='resume' href='/resume.pdf' src={resumeImg} _height='2rem' _width='auto'></Icon></div>
            <div className={icon}><Icon title='github' href='https://github.com/vladzimmerl' src={githubImg} _height='2rem' _width='auto'></Icon></div>
            
          </div>

          <div className={ghostDown}><Icon title='' href='' src={downImg} _height='2.5rem' _width='auto'></Icon></div>
        </div>
        
      </div>

      <img className={pic} src={faceImg}></img>

    </div>
  )
}

export default Top
