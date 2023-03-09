import React from 'react'
import styles from '../../styles/footer.module.css'

const Footer = (props) => {
  return (
    <div id={styles.foot} className="dark:bg-slate-600 dark:text-white bg-slate-100">&copy; Copyright 2024 | All Rights Reserved</div>
  )
}

export default Footer