import React from "react"

import moment from 'dayjs';
import clsx from 'clsx';

import css from './timeinput.module.scss';

const isArrowDown = (e) => {
	const { type, key } = e;
	return type === 'keydown' && key === 'ArrowDown';
};

const isArrowUp = (e) => {
	const { type, key } = e;
	return type === 'keydown' && key === 'ArrowUp';
};

const isChange = (e) => {
	const { type } = e;
	return type === 'change';
};

const TimeInput = ({ time, onChange, className }) => {

  const currentTime = new Date(time)

	const onMinuteUpdate = (event) => {

		const value = parseInt(event.target.value, 10);

		if (isArrowUp(event) && (value + 1 < 60)) {
			onChange(currentTime.setMinutes(value + 1));
		}
		else if (isArrowUp(event)) {
			onChange(currentTime.setMinutes(0));
		}

		if (isArrowDown(event) && (value - 1 >= 0)) {
			onChange(currentTime.setMinutes(value - 1));
		}
		else if (isArrowDown(event)) {
			onChange(currentTime.setMinutes(59));
		}

		if (isChange(event) && (value < 60 || value > 0)) {
			onChange(currentTime.setMinutes(value));
		}
	}

	const onHourUpdate = (event) => {

		const value = parseInt(event.target.value, 10);

		if (isArrowUp(event) && (value + 1 < 12)) {
			onChange(currentTime.setHours(value + 1));
		}
		else if (isArrowUp(event)) {
			onChange(currentTime.setHours(0));
		}

		if (isArrowDown(event) && (value - 1 >= 0)) {
			onChange(currentTime.setHours(value - 1));
		}
		else if (isArrowDown(event)) {
			onChange(currentTime.setHours(11));
		}

		if (isChange(event) && (value < 12 || value > 0)) {
			onChange(currentTime.setHours(value));
		}
	}

  const hour = moment(currentTime).format('HH');
  const minute = moment(currentTime).format('mm');

  return (
    <div className ={ clsx(className, css.timeinput) }>
      <input
        className={ css.hour }
        type="text" min="1" max="12" steps="1" value={ hour }
        onChange={ e => onHourUpdate(e) }
        onKeyDown={ e => onHourUpdate(e) }
      />
      <span>:</span>
      <input
        className={ css.minute }
        type="text" min="0" max="59" steps="1" value={ minute }
        onChange={ e => onMinuteUpdate(e) }
        onKeyDown={ e => onMinuteUpdate(e) }
      />
    </div>
		);
}

export default TimeInput
