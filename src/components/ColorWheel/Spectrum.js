import React from 'react';
import css from './spectrum.module.scss';
import clsx from 'clsx';

const hsla = (index, a, size) => `hsla(${index * (360 / size)} ,100%, 50%, ${a})`;

const Color = ({ index, angle, size }) => {


  const componentStyle = {
    transform: `translateY(-50%) rotate(${angle}deg)`,
    backgroundImage: `linear-gradient(180deg, ${hsla(index, 0, size)}, ${hsla(index, 1, size)} 50%, ${hsla(index, 0, size)})`,
  }
	return (<div className={css.color} style={componentStyle} />);

}


export default () => {
  const colors = (new Array(64)).fill(0);
  const angles = colors.map((a, index) => index * (360 / colors.length));


  return (<div className={ css.spectrum }>
      <div className={ css.inner }>
        {angles.map((angle, index, angles) =>
          <Color angle={angle} index={index} size={angles.length} key={`${angle}-${index}`} />
        )}
      </div>

  </div>);
}
