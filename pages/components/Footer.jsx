import React, { useEffect, useState } from 'react'
import styles from '../../styles/footer.module.css'


const Footer = (teacher, student, render) => {



  return (
    <div id={styles.foot} className={`dark:bg-slate-600 dark:text-white bg-slate-100`}>&copy; Copyright 2024 | All Rights Reserved</div>
  )
}

export default Footer