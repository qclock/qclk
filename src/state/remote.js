import WebSocket  from 'isomorphic-ws'

export default new class {

  collectTimer = 0
  throttle = true
  collectDelay = 5
  remoteAddress = '192.168.0.4:8080'

  constructor () {
    if (typeof window == 'undefined') {
      this.socket = null
      return
    }

    const url = this.getWsURL()
    this.socket = new WebSocket(url);

    this.socket.addEventListener('message', (e) => {
      if (this.onUpdate) {
        this.onUpdate(JSON.parse(e.data))
      }
    })
  }

  addListener (func) {
    this.onUpdate = func
  }

  send(state) {
    if (this.socket.readyState === 1) {
      this.socket.send(JSON.stringify(state))
    }
  }

  upload (state) {
    if (!this.throttle) {
      this.send(state)
      return
    }

    clearTimeout(this.collectTimer)

    this.collectTimer = setTimeout(() => {
      this.send(state)
    }, this.collectDelay)
  }

  getWsURL () {
    const {
      host
    } = window.location

    return `ws://${host}`
  }
}()
