import './content.css'
import { useState } from 'react'
import Top from './top'
import About from './about'
import Mcmeet from './cardMcmeet'
import Ai from './cardAi'
import Other from './cardOther'
import Courses from './courses'
import './contentPadding.css'
import './contentPaddingMobile.css'

function Content() {

  const content = '_content'
  const top = '_content-top'
  const bg1 = '_content-bg1'
  const bg2 = '_content-bg2'
  const title = '_content-title'
  const vid = '_content-vid'

  const PADDING_top = '_p_top'
  const PADDING_aboutTitle = '_p_about-title'
  const PADDING_about = '_p_about'
  const PADDING_projects = '_p_projects'
  const PADDING_mcmeet = '_p_mcmeet'
  const PADDING_ai = '_p_ai'
  const PADDING_video = '_p_video'
  const PADDING_desc = '_p_desc'
  const PADDING_other = '_p_other'
  const PADDING_bg2 = '_p_bg2'
  const PADDING_coursesTitle = '_p_courses-title'
  const PADDING_courses = '_p_courses'
  const PADDING_bottom = '_p_bottom'
  

  return (
    <div className={content}>

      <div className={bg1}>

        <div className={top}><Top /></div>

        <div className={PADDING_top}>{/* ----- ----- -----*/}</div>

      </div>

      <div className={PADDING_aboutTitle}>{/* ----- ----- -----*/}</div>

      <div id='about'><p className={title}>About</p></div>

      <div className={PADDING_about}>{/* ----- ----- -----*/}</div>

      <About />

      <div className={PADDING_projects}>{/* ----- ----- -----*/}</div>

      <p className={title}>Projects</p>

      <div className={PADDING_mcmeet}>{/* ----- ----- -----*/}</div>

      <div id='mcmeet'><Mcmeet /></div>

      <div className={PADDING_ai}>{/* ----- ----- -----*/}</div>

      <div id='ai'><Ai /></div>

      <div className={PADDING_video}>{/* ----- ----- -----*/}</div>

      <iframe className={vid} src="https://www.youtube.com/embed/C_GKREGJf7s?si=uCSSAPcPsuEbDboZ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>

      <div className={PADDING_desc}>{/* ----- ----- -----*/}</div>

      <p>Watch our AI in action!</p>

      <div className={PADDING_other}>{/* ----- ----- -----*/}</div>

      <div id='other'><Other /></div>

      <div className={PADDING_bg2}>{/* ----- ----- -----*/}</div>

      <div className={bg2}>

        <div className={PADDING_coursesTitle}>{/* ----- ----- -----*/}</div>

        <div id='courses'><p className={title}>University CS/SWE Coursework</p></div>

        <div className={PADDING_courses}>{/* ----- ----- -----*/}</div>

        <Courses />

        <div className={PADDING_bottom}>{/* ----- ----- -----*/}</div>
      
      </div>
    </div>
  )
}

export default Content