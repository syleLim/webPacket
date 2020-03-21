import {dispatcher} from './dispatcher.js'
import {ACTIONS_TYPE} from './action.js'

export const nameStore = {name : '', onChange : null} //name = value / onChange = callback
export const messageStore = {message : '', onChange: null}

// connect action to store with dispatcher
dispatcher.register(payload => {
  if (payload.actionType === ACTIONS_TYPE.CHANGE_NAME) {
    nameStore.name = payload.value
    nameStore.onChange()
  }
})

dispatcher.register(payload => {
  if( payload.actionType === ACTIONS_TYPE.SUBMIT_NAME) {
    messageStore.message = 'hello! ' + nameStore.name
    messageStore.onChange()
  }
})