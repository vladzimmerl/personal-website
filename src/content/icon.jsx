import './icon.css'
import { useState } from 'react'

function Icon(props) {

  const icon = '_icon'
  const img = '_icon-img'

  return (
    <a className={icon} href={props.href} title={props.title}>
      <img className={img} src={props.src} style={{ height: props._height, width: props._width }}></img>
    </a>
  )
}

export default Icon
