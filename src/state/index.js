
import React, { useContext } from 'react';
import Context from './context'

const colorReducer = (state, action) => {
  const armData = Object.assign({}, state[action.arm], { [action.prop]: action.value } );
  return Object.assign(
    {},
    state,
    {
      [action.arm]: armData
    })
}

const timeReducer = (state, action) => {
  return Object.assign(
    {},
    state,
    {
      time: action.value
    }
  );
}

export default () => {
  const context = useContext(Context)

  const dispatch = (action) => {
    let newState = context.state;
    switch(action.type) {
      case 'color':
        newState = colorReducer(context.state, action)
        break;
      case 'time':
        newState = timeReducer(context.state, action)
        break;
    }
    context.setState(newState)
  }

  return [ context.state, dispatch ]
}
