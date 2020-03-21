import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => {
  <Router>
    <div>
      <header />
      <div>
        <Route exact path ='/' component={Home} />
        <Route path='/ko' component={HelloK} />
        <Route path='/en' component={HelloE} />
      </div>
      <footer />
    </div>
  </Router>
}

const header = () => (
  <div>
    <h1>header</h1>
  </div>
)

const footer = () => (
  <div>
    <h1>footer</h1>
  </div>
)


//have to make function form
const Home = () => (
  <div>
    <h1>APP</h1>
    <ul>
      <li><a herf ='/ko'>korean</a></li>
      <li><a herf ='/en'>english</a></li>
    </ul>
  </div>
)

const HelloK = () => (
  <div>
    <h1>안녕</h1>
    <a herf = '/'>돌아가기</a>
  </div>
)

const HelloE = () => (
  <div>
    <h1>hello</h1>
    <a herf ='/'>return</a>
  </div>
)

reactDOM.render(<App />, document.getElementById('root'))







