
import { useContext } from 'react';
import Context from './context'
import remote from './remote'

const colorReducer = (state, action) => {
  const color = Object.assign({}, state.color, {
    [action.arm]: action.value
  })
  return Object.assign(
    {},
    state,
    {
      color
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

  remote.addListener((remoteState) => {
    const newState = Object.assign({}, context.state,
      {
        connected: true
      },
      {
        color: remoteState.color
      },
      {
        time: new Date(remoteState.datetime)
      },
      {
        dim: remoteState.dim
      }
    )
    context.setState(newState)
  })

  const dispatch = (action) => {
    let newState;
    switch(action.type) {
      case 'color':
        newState = colorReducer(context.state, action)
        break;
      case 'time':
        newState = timeReducer(context.state, action)
        break;
      default:
        newState = context.state;
    }
    context.setState(newState)
    remote.upload(newState)
  }

  return [ context.state, dispatch ]
}
