import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Login from './login.js'
import Timeline from './timeline.js'
import User from './user.js'

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/user' component={User} />
        <Route path='/timeline' component={Timeline} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  </Router>
)

reactDOM.render(<App />, document.getElementById('root'))