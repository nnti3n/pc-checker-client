import React from 'react'
import Gakky from '../assets/Gakky.png'
import classes from './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img
      alt='Gakky!'
      className={classes.duck}
      src={Gakky} />
    <code>Second Deployment guys!</code>
  </div>
)

export default HomeView
