import React from 'react'
import classes from './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img src="http://i.imgur.com/1xfhHjB.gif" title="source: imgur.com" className={classes.duck} />
    <code>Third Deployment!</code>
  </div>
)

export default HomeView
