import { writable } from 'svelte/store'

const modalStatus = () => {
  const status = writable({
    on: false,
    done: true,
  })
  return {
    subscribe: status.subscribe,
    setOn: () => {
      status.set({
        on: true,
        done: false,
      })
    },
    setOff: () => {
      status.set({
        on: true,
        done: true,
      })
      setTimeout(() => {
        status.set({
          on: false,
          done: true,
        })
      }, 500)
    },
    setOffNoMsg: () => {
      status.set({
        on: false,
        done: true,
      })
    },
  }
}

export default modalStatus()
