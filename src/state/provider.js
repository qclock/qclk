import React, { useState, useEffect, useRef} from 'react';
import Context from './context';
import initialState from './initialstate'

const Provider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const container = useRef(null);
  const setCSSvariable = (property, h, s, l) => container.current.style.setProperty(`--${property}`, `hsl(${h}, ${s}%, ${l}%)`);

  useEffect(() => {
    setCSSvariable(
      'minuteArmColor',
      state.minute.hue,
      state.minute.saturation,
      state.minute.lightness
    )
  }, [
    state.minute.hue,
    state.minute.saturation,
    state.minute.lightness,
  ])

  useEffect(() => {
    setCSSvariable(
      'hourArmColor',
      state.hour.hue,
      state.hour.saturation,
      state.hour.lightness
    )
  }, [
    state.hour.hue,
    state.hour.saturation,
    state.hour.lightness,
  ])

  return (<Context.Provider
    value={{
      state,
      setState,
    }}
  ><div ref={ container }>
    { children }
  </div>
  </Context.Provider>);
};

export default Provider
