import './card.css'
import { useState } from 'react'
import gitImg from '/git.svg'
import Icon from './icon'

function Ai() {

  const card = '_card'
  const headingContainer = '_card-heading-container'
  const title = '_card-title'
  const paragraph = '_card-p'

  return (
    <div className={card} style={{ backgroundImage: `url('/colo3.png')`}}>

        <div className={headingContainer}>
            <p className={title}>Game Playing AI Competition</p>

            <Icon title='github repository' href='https://github.com/vladzimmerl/FinalAI' src={gitImg} _height='2rem' _width='auto'></Icon>
        </div>

        <p className={paragraph}>Designed to play the game Colosseum Survivor, our AI competed against 300 other students in an automated tournament and placed in the top <strong>3%</strong> with a win rate of <strong>90%</strong> against participants. We built this project in a team of 2 people as part of an artificial intelligence course using <strong>Python.</strong></p>
        <p className={paragraph}>In Colosseum Survivor players may move on the board and build a wall every turn. The game ends when the players are closed off from each other. The winner is the player with the most territory.</p>
        <p className={paragraph}>Our AI uses <strong>AlphaBeta pruning</strong> as well as heuristic pruning and evaluates board positions with set of refined metrics.</p>


    </div>
  )
}

export default Ai
