import './card.css'
import { useState } from 'react'
import gitImg from '/git.svg'
import Icon from './icon'

function Mcmeet() {

  const card = '_card'
  const headingContainer = '_card-heading-container'
  const git = '_card-git'
  const title = '_card-title'
  const paragraph = '_card-p'
  const mcmeetWrapper = '_card-link-wrapper'
  const mcmeetLink = '_card-link'

  return (
    <div className={card} style={{ backgroundImage: `url('/calendar2.png')`}}>

        <div className={headingContainer}>
          <p className={title}>McMeet: A Booking Website</p>

          <Icon title='github repository' href='https://github.com/vladzimmerl/mcmeet-website' src={gitImg} _height='2rem' _width='auto'></Icon>
        </div>
        

        <p className={paragraph}>The project was to create as a booking website in the style of the McGill School of Computer Science websites. We built this project in a team of 3 people, as part of a web design course.</p>
        <p className={paragraph}>The website uses the <strong>MERN</strong> web stack. It allows users to create accounts, organize and register for meetings, as well as request meetings from other members. I contributed to all sections but mostly focused on the <strong>Node JS</strong> backend using the <strong>Express</strong> framework.</p>
        <p className={paragraph}>To implement the backend, I designed an API which accesses our database and sends responses to the frontend. Security was a focus. We used <strong>JWTs</strong> to authenticate users for private pages, and create randomly generated URLs for secret pages; passwords are stored in a hashed format.</p>
        <div className={mcmeetWrapper}>
          <a className={mcmeetLink} href='https://mcmeet.vladzimmerl.com/'>Try the website! (use a laptop/desktop)</a>
        </div>

    </div>
  )
}

export default Mcmeet
