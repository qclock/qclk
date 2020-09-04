
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

export default () => {
  const context = useContext(Context)

  const dispatch = (action) => {
    switch(action.type) {
      case 'color':
        const newState = colorReducer(context.state, action)
        context.setState(newState)
    }

  }

  return [ context.state, dispatch ]
}
