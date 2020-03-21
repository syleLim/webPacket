import React from 'react'
import ReactDOM from 'react-dom'

import {actions} from './action.js'
import {nameStore, messageStore} from './store.js'

class view extends React.Component {
  constructor() {
    super ()
    
    this.state = {
      name : '',
      message : ''
    }
    
    //set Store with state
    nameStore.onChange = () =>  {
      this.setState({name : nameStore.name})
    }
    message.onChange = () => {
      this.setState({message : messageStore.message})
    }
  }
  
  render () {
    return ( 
      <div>
        <div>
          <input value={this.state.name}
            onChange={e => actions.changeName(e.target.value)} />
          <button onClick={e => actions.submitName()}>등록</button>
        </div>
        <div>{this.state.message}</div>
      </div>
    )
  }
}

/*
 change => action.changeName => dispatch from action to store => store onChange working
  => setState => render
*/

ReactDOM.render(<view />, document.getElementById('root'))



