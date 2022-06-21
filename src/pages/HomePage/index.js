import React from 'react'
import classes from './index.module.scss'

import ContactButton from '../../components/CustomButtom'

function HomePage() {
  return (
    <div className={classes.hero}>
        <div className={classes.hero_text}>
            <h1 className={classes.hero_text_name}> 
                Hi, <br/> I'm Bamba Ba web & mobile developer.
            </h1>
            <h2 className={classes.hero_text_domain}>
                Web & mobile / Javascript Expert / Python Geek
            </h2>
            <ContactButton />
        </div>
    </div>
  )
}

export default HomePage