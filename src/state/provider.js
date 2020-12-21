import React, { useState, useEffect, useRef} from 'react';
import Context from './context';
import initialState from './initialstate'

const Provider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const container = useRef(null);
  const setCSSvariable = (property, h, s, l) => container.current.style.setProperty(`--${property}`, `hsl(${h}, ${s}%, ${l}%)`);
  const {
    color: {
      hour,
      minute
    }
  } = state;

  useEffect(() => {
    setCSSvariable(
      'minuteArmColor',
      minute[0],
      minute[1],
      minute[2],
    )
  }, minute)

  useEffect(() => {
    setCSSvariable(
      'hourArmColor',
      hour[0],
      hour[1],
      hour[2],
    )
  }, hour)

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
