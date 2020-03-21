import React from 'react'
import {
  BrowswerRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import ReactDOM from 'react-dom'

const users = [
  {id : 1, name: 'n1', info: 'i1'},
  {id : 2, name: 'n2', info: 'i2'}
]

// switch 패스가 지정되지 않으면 default값으로 지정됨
const app = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/user/:id' component={userId}/ >
        <Route component={userList} />
      </Switch>
    </div>
  </Router>
)

class userId extends React.Component {
  render() {
    const list = users.map(e => (
      <li key={e.id}>
        <Link to={'/user/' + e.id}>{e.name}</Link>
      </li> 
    ))
    
    return (<ul>{list}</ul>)
  }
}

class userList extends React.Component {
  render() {
    const {params} = this.props.match //acess parameter -> this.props.match.params
    const id = parseInt(params.id, 10)
    const user = users.filter(e => e.id === id)[0]
    
    return (
      <div>
        <div>{id} : {user.name} - {user.info} </div>
        <div><Link to ='/'>Back</Link></div>
      </div>
    )
  }
}

ReactDOM.render(<app />, document.getElementById('root'))