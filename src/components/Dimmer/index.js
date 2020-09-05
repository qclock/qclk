import React, { useState } from "react"
import PropTypes from 'prop-types'
import clsx from 'clsx';

import Dial from '../Dial'

import css from './dimmer.module.scss';

const Dimmer = (props) => {

  const foo = (deg) => {
    console.log(deg)
  }

  return (<div className={ css.dimmer }>
    <div className={ css.dials }>
      <Dial
        value={ 0 }
        onChange={ v => foo(v) }
        className={ clsx(css.wheel, css.minute) }
        min={ 30 }
        max={ 150 }
      >
        <div className={ css.dot }></div>
      </Dial>
      <Dial
        value={ 0 }
        onChange={ v => foo(v) }
        className={ clsx(css.wheel, css.hour) }
        min={ 30 }
        max={ 150 }
      >
        <div className={ css.dot }></div>
      </Dial>
    </div>
    <div className={ css.arc_clip }>
      <div className={ css.arc }></div>
    </div>
  </div>)
}

Dimmer.propTypes = {
  onChange: PropTypes.func.isRequired,
  time: PropTypes.object,
  className: PropTypes.string,
}

Dimmer.defaultProps = {
  time: new Date(),
  className: '',
}

export default Dimmer
