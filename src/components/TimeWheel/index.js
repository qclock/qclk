import React, { useState, useEffect, useRef, useMemo } from "react"
import PropTypes from 'prop-types'
import clsx from 'clsx';

import Dial from '../Dial'

import css from './timewheel.module.scss';

const TimeWheel = () => {

  const [ minuteValue, setMinuteValue ] = useState(0)
  const [ hourValue, setHourValue ] = useState(0)





  return (<div className={ css.timewheel }>
    <Dial
      value={ minuteValue }
      onChange={ v => setMinuteValue(v) }
      className={ clsx(css.wheel, css.minute) }
    >
      <div className={ css.dot }></div>
    </Dial>
    <Dial
      value={ hourValue }
      onChange={ v => setHourValue(v) }
      className={ clsx(css.wheel, css.hour) }
    >
      <div className={ css.dot }></div>
    </Dial>
    <div className={ css.arc }></div>
  </div>)
}

TimeWheel.propTypes = {
  onChange: PropTypes.func.isRequired,
  date: PropTypes.object,
  className: PropTypes.string,
}

TimeWheel.defaultProps = {
  data: new Date(),
  className: '',
}

export default TimeWheel
