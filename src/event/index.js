const eventBus = {
  eventlist: {},
  on (eventName, eventFn) {
    if (this.eventlist.hasOwnProperty(eventName)) {
      this.eventlist[eventName].push(eventFn)
    } else {
      this.eventlist[eventName] = []
      this.eventlist[eventName].push(eventFn)
    }
  },
  emit (eventName, ...dataArgs) {
    if (this.eventlist.hasOwnProperty(eventName)) {
      this.eventlist[eventName].forEach(fn => {
        fn(...dataArgs)
      })
    } else {
      throw Error(`${eventName} is not existence`)
    }
  },
  off (eventName) {
    if (this.eventlist.hasOwnProperty(eventName)) {
      delete this.eventlist[eventName]
    } else {
      throw Error(`${eventName} is not existence`)
    }
  },
  clear () {
    this.eventlist = {}
  }
}

export default eventBus