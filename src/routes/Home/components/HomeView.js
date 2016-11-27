import React from 'react'
import HomeImage from '../assets/Home.png'
import classes from './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img
      alt='hjx!'
      className={classes.duck}
      src={HomeImage} />
    <code>Khung search bấm ra ngoài hoặc bấm nút "Search" ms send request, làm z để khỏi stress server</code>
  </div>
)

export default HomeView
