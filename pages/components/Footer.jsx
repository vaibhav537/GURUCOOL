import React from 'react'
import styles from '../../styles/footer.module.css'

const Footer = (props) => {
  return (
    <div id={styles.foot} className={`text-${props.mode ==='light' ?'dark':'light'}`}>&copy; Copyright 2022 | All Rights Reserved</div>
  )
}

export default Footer