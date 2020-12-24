import React, { useState } from "react"
import PropTypes from 'prop-types'
import clsx from 'clsx';
import useAppState from '../../state'
import Dial from '../Dial'
import css from './colorwheel.module.scss';

const ColorWheel = ({  }) => {
  const [ state, dispatch ] = useAppState();

  const minute = state.color.minute
  const hour = state.color.hour
  const onChange = (arm, value) => {
    dispatch({
      type: 'color',
      arm,
      value,
    })
  }

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

  </div>)
}

ColorWheel.propTypes = {
  className: PropTypes.string,
}

ColorWheel.defaultProps = {
  className: '',
}

export default ColorWheel
