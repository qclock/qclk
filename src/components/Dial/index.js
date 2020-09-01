import React, { useState, useEffect, useRef, useMemo } from "react"
import PropTypes from 'prop-types'
import clsx from 'clsx';

import css from './dial.module.scss';
import { getTouchAngle, rotateAngle90, rotateAngle90Back } from './tools';

const Dial = ({ value, className, onChange, children}) => {

  const [ selecting, setSelecting ] = useState(false);
  const [ angle, setAngle ] = useState(rotateAngle90Back(value));
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
			callback(value);
		});
  }

	const setValue = (value) => {
    if (value === angle) return;
    setAngle(value);
    onChange(rotateAngle90(value));
		setCSSvariable(angle);
	}

	const onSelecting = (event) => {
		if (!selecting) return;
		getValue(event, value => setValue(value));
	}

	const selectStart = (event) => {
		getTouchAngle(event, (grabAngle) => {
      setGrabAngle(grabAngle);
      setSelecting(true);
		});
	}

	const selectEnd = (event) => {
		getValue(event, (angle) => {
      setValue(-1 * angle);
      setNewAngle(-1 * angle);
      setSelecting(false);
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
}

Dial.defaultProps = {
  value: 0,
  className: '',
}

export default Dial
