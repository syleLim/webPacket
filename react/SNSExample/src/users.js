import React from 'react'
import request from 'superagent'
import {Redirect} from 'react-router-dom'
import styles from './styles.js'

export default class User extends React.Component {
  constructor () {
    super ()
    
    this.state = {users : [], jump : '', friends : []}
  }
  
  loadUserInfo () {
    request.get('/api/get_allusers')
      .end((err, res) => {
        if (err) return
        this.setState({users : res.body.users})
      })
    request.get('/api/get_user')
      .query({id : window.localStorage.id})
      .end((err, res) => {
        if (err) return
        this.setState({friends : res.body.friends})
      })
  }
  
  addFriend (friendId) {
    if (!window.loacalStorage.token) {
      window.alert('please login')
      this.setState({jump : '/login'})
      return
    }
    
    request.get('/api/add_friend')
      .query({
         id : window.localStorage.id,
         token : window.loclaStorage.token,
         friendId : firiendId
      })
      .end((err, res) => {
        if (err) return
          
        if(! res.body.status) {
          window.alert(res.body.msg)
          return
        }
        this.loadUserInfo()
      })
  }
  
  
  componentWillMount() {
    this.loadUserInfo()
  }
  
  render () {
    if (this.state.jump) {
      return <Redirect to={this.state.jump} />
    }
    
    const friends = this.state.friends ? this.state.friends : {}
    const ulist -this.state.users.map(id => {
      const btn = (friends[id]) 
          ? '${id} is friend' 
          : (<button onClick={(e) => this.addFriend(id)}> 'add friend'</button>)
      return (
        <div key={'fid_' + id} style={styles.friend}>
          <img src={'user.png'} width={80} /> 
          {btn} 
        </div>
    })
    
    return (
      <div>
        <h1>User List</h1>
        <div>{ulist}</div>
        <div><br/><a =herf={'/timeline'}>Timeline</a></div>
      </div>
    )
    
  }
}














