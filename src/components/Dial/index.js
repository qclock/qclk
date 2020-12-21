import React, { useState, useEffect, useRef } from "react"
import PropTypes from 'prop-types'
import clsx from 'clsx';

import css from './dial.module.scss';
import { getTouchAngle, rotateAngle90, rotateAngle90Back } from './tools';

const Dial = ({ value, className, min, max, onChange, children }) => {

  const [ selecting, setSelecting ] = useState(false);
  const [ angle, setAngle ] = useState(rotateAngle90Back(Math.max(value, min)));
  const [ newAngle, setNewAngle ] = useState(-1 * angle);
  const [ grabAngle, setGrabAngle ] = useState(0);

  const container = useRef(null);

  const setCSSvariable = (angle) => container.current.style.setProperty(`--dialRotation`, (angle) + 'deg');

  useEffect(() => {
    setCSSvariable(angle);
    setAngle(rotateAngle90Back(value));
  }, [value]);

	const getValue = (event, callback) => {
		getTouchAngle(event, (touchAngle) => {
			const angleDiff = touchAngle - grabAngle;
      const value = (-1 * (newAngle + angleDiff)) % 360;

      console.log('getValue', rotateAngle90(value))

			callback(value);
		});
  }

	const setValue = (value) => {
    console.log('setValue', value)

    if (value === angle) return;

    setAngle(value);
    onChange(rotateAngle90(value));
		setCSSvariable(angle);
	}

	const onSelecting = (event) => {
    if (!selecting) return;

    console.log('onSelecting')

		getValue(event, angle => {

      if (rotateAngle90(angle) < min) {
        setValue(min)
        return
      }

      if (rotateAngle90(angle) > max) {
        setValue(max)
        return
      }

      setValue(angle)
    });
	}

	const selectStart = (event) => {
		getTouchAngle(event, (grabAngle) => {
      console.log('selectStart grabAngle', grabAngle)
      setGrabAngle(grabAngle);
      setSelecting(true);
		});
	}

	const selectEnd = (event) => {

		getValue(event, (angle) => {

      setSelecting(false);

      console.log('selectEnd',
        {
          angle,
          rotateAngle90: rotateAngle90(angle),
          rotateAngle90Back: rotateAngle90Back(angle),
          rotateMin90Back: rotateAngle90Back(min),
          rotateMin90: rotateAngle90(min),
          rotateMax90: rotateAngle90(max),
          rotateMax90Back: rotateAngle90Back(max),
          min,
          max
        }
      )

      if (rotateAngle90(angle) < min) {
        //setValue(min);
        setValue(min);
        setNewAngle(-1 * min);
        console.log('selectEnd')
        return
      }

      if (rotateAngle90(angle) > max) {
        setValue(max);
        setNewAngle(-1 * max);
        console.log('selectEnd')
        return
      }

      setValue(angle);
      setNewAngle(-1 * angle);
		});
	}

  return (<div
    ref={ container }
    className={ clsx(className, css.dial) }
    onMouseDown={e => selectStart(e)}
    onTouchStart={e => selectStart(e)}
    onMouseMove={e => onSelecting(e)}
    onTouchMove={e => onSelecting(e)}
    onMouseUp={e => selectEnd(e)}
    onTouchEnd={e => selectEnd(e)}
  >
    {children}
  </div>);
}

Dial.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number,
  className: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
}

Dial.defaultProps = {
  value: 0,
  className: '',
  min: 0,
  max: 359,
}

export default Dial
