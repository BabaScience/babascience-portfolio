import React from 'react'

import { Link } from 'react-router-dom'

/* style */
import classes from './index.module.scss'

function index() {
  return (
    <Link to="/contact" className={classes.custom_button}>Contact me</Link>
  )
}

export default index