import React, { useState } from "react"
import PropTypes from 'prop-types'
import clsx from 'clsx';

import Dial from '../Dial'
import Spectrum from './Spectrum'
import css from './colorwheel.module.scss';

const ColorWheel = ({ minute, hour, onChange }) => {
  const saturation = 100;
  const lightness = 50;

  const [ minuteHue, setMinuteHue ] = useState(minute.hue);
  const [ hourHue, setHourHue ] = useState(hour.hue);

  const setMinute = (prop, value) => {
    setMinuteHue(value)
    onChange('minute', prop, value)
  }

  const setHour = (prop, value) => {
    setHourHue(value)
    onChange('hour', prop, value)
  }

  return (<div className={ css.timewheel }>
    <div className={ css.dials }>
      <Dial
        value={ minuteHue }
        onChange={ v => setMinute('hue', v) }
        className={ clsx(css.wheel, css.minute) }
      >
        <div className={ css.dot }></div>
      </Dial>
      <Dial
        value={ hourHue }
        onChange={ v => setHour('hue', v) }
        className={ clsx(css.wheel, css.hour) }
      >
        <div className={ css.dot }></div>
      </Dial>
    </div>
    <Spectrum />
  </div>)
}

ColorWheel.propTypes = {
  onChange: PropTypes.func.isRequired,
  minute: PropTypes.object,
  hour: PropTypes.object,
  className: PropTypes.string,
}

ColorWheel.defaultProps = {
  minute: { hue: 295 },
  hour: { hue: 205 },
  className: '',
}

export default ColorWheel
