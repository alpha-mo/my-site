import { writable } from 'svelte/store'

const mobileMenuStatus = () => {
  const status = writable(false)
  return {
    subscribe: status.subscribe,
    set: (value: boolean) => {
      status.set(value)
    },
  }
}

export default mobileMenuStatus()
