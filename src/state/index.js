
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

  if (process.env.GATSBY_DEMO === 'true') {
    setTimeout(() => {
      if (context.state.connected) {
        return;
      }
      const newState = Object.assign({}, context.state,
        {
          connected: true
        },
        {
          color: {
            hour: [ 230, 100, 50 ],
            minute: [ 130, 100, 50 ]
          }
        },
        {
          time: new Date()
        },
      )
      context.setState(newState)
    }, 500);
  }

  remote.addListener((remoteState) => {
    if (context.state.connected) {
      return;
    }

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
        context.setState(newState)
        remote.upload(newState)
        break;
      case 'time':
        newState = timeReducer(context.state, action)
        context.setState(newState)
        remote.upload(newState)
        break;
      default:
        newState = context.state;
    }
  }

  return [ context.state, dispatch ]
}
