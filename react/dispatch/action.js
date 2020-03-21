import {dispatcher} from './dispatcher.js'

//each action
export const ACTIONS_TYPE = {
  CHANGE_NAME : 'CHANGE_NAME',
  SUBMIT_NAME : 'SUBMIT_NAME'
}

//set action on dispatch
export const actions = {
  changeName : (name) => {
    if (name === null) return
    
    dispatcher.dispatch({
      actionType : ACTIONS_TYPE.CHANGE_NAME,
      value : name
    }) 
  },
  
  submitName : () => {
    dispatcher.dispatch({
      actionType : ACTIONS_TYPE.SUBMIT_NAME
    })
  }
}