import React, { useState } from "react"
import PropTypes from 'prop-types'
import clsx from 'clsx';

import Dial from '../Dial'
import Spectrum from './Spectrum'
import css from './colorwheel.module.scss';

const ColorWheel = ({ minute, hour, onChange }) => {
  const saturation = 100;
  const lightness = 50;

  const [ minuteHue, setMinuteHue ] = useState(minute[0]);
  const [ hourHue, setHourHue ] = useState(hour[0]);

  const setMinute = (hue) => {
    setMinuteHue(hue)
    onChange('minute', [hue, minute[1], minute[2]])
  }

  const setHour = (hue) => {
    setHourHue(hue)
    onChange('hour', [hue, hour[1], hour[2]])
  }

  return (<div className={ css.timewheel }>
    <div className={ css.dials }>
      <Dial
        value={ minuteHue }
        onChange={ hue => setMinute(hue) }
        className={ clsx(css.wheel, css.minute) }
      >
        <div className={ css.dot }></div>
      </Dial>
      <Dial
        value={ hourHue }
        onChange={ hue => setHour(hue) }
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
  minute: PropTypes.array,
  hour: PropTypes.array,
  className: PropTypes.string,
}

ColorWheel.defaultProps = {
  minute: [295, 50, 100],
  hour: [ 205, 50, 100],
  className: '',
}

export default ColorWheel
