import React, {Component} from 'react'
import ReactDOM from 'react-dom' //it may unify react

export default class App extends Component{
  render () {
    return ( <div>
     <h1>Hello</h1>
    </div>)
  }
}

reactDOM.render(<App />, document.getElementById('root'))