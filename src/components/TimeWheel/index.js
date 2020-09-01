import React, { useState } from "react"
import PropTypes from 'prop-types'
import clsx from 'clsx';

import Dial from '../Dial'
import TimeInput from '../TimeInput'

import css from './timewheel.module.scss';

const degreesToMinutes = (deg) => Math.floor( (deg / (360 / 60) ));

const degreesToHours = (deg) => Math.floor( (deg / (360 / 12) ));

const minutesToDegrees = (minutes) => minutes * (360 / 60);

const hoursToDegrees = (hours) => hours * (360 / 12);

const TimeWheel = (props) => {
  const [ time, setTime ] = useState(props.time);
  const [ minuteValue, setMinuteValue ] = useState(minutesToDegrees(time.getMinutes()));
  const [ hourValue, setHourValue ] = useState(hoursToDegrees(time.getHours()));
  const [ meridiem, setMeridiem ] = useState(new Date(time).getHours() < 12 ? -1 : 1);

  const onMinuteDial = (deg) => {
    const minutes = degreesToMinutes(deg);
    const newTime = new Date(time);

    newTime.setMinutes(minutes);

    setTime(newTime);
    props.onChange(newTime);
  }

  const onHourDial = (deg) => {
    let hours = degreesToHours(deg);
    const newTime = new Date(time);
    const previousHour = newTime.getHours();
    let newMeridiem = meridiem;

    if ((previousHour === 0 && hours === 11) ||
      (previousHour === 11 && hours === 0)) {
        newMeridiem = 1
    }
    if ((previousHour === 12 && hours === 11) ||
      (previousHour === 23 && hours === 0)) {
        newMeridiem = -1
    }

    if (newMeridiem > 0) {
      hours = 12 + hours
    }

    setMeridiem(newMeridiem);

    newTime.setHours(hours);

    setTime(newTime);
    props.onChange(newTime);
  }


  return (<div className={ css.timewheel }>
    <Dial
      value={ minuteValue }
      onChange={ v => onMinuteDial(v) }
      className={ clsx(css.wheel, css.minute) }
    >
      <div className={ css.dot }></div>
    </Dial>
    <Dial
      value={ hourValue }
      onChange={ v => onHourDial(v) }
      className={ clsx(css.wheel, css.hour) }
    >
      <div className={ css.dot }></div>
    </Dial>
    <TimeInput
      className={ css.timeinput }
      time={ time }
      onChange={ t => {
        const newTime = new Date(t)
        setTime(newTime);
        setMinuteValue(minutesToDegrees(newTime.getMinutes()));
        setHourValue(hoursToDegrees(newTime.getHours()));
      } }
    />
    <div className={ css.arc }></div>
  </div>)
}

TimeWheel.propTypes = {
  onChange: PropTypes.func.isRequired,
  time: PropTypes.object,
  className: PropTypes.string,
}

TimeWheel.defaultProps = {
  time: new Date(),
  className: '',
}

export default TimeWheel
