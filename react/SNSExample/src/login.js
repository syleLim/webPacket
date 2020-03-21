import React from 'react'
import request from 'superagent'
import {Redirect} from 'react-router-dom'
import styles from './styles'

export default class Login extends React.Component {
  constructor () {
    super ()
    
    this.state = {
      id : '',
      pw : '',
      jump : '',
      msg : ''
    }
  }
  
  api (command) {
    request.get ('/api/' + commend)
       .query({
         id : this.state.id,
         pw : this.state.pw
       })
       .end((err, res) => {
         if (err) return
         
         const state = res.body.state
         const token = res.body.token
         
         if( state && token) {
           window.localStorage['id'] = this.state.id
           window.localStorage['token'] = token
           this.setState({jump : '/timeline'})
           return
         }

         this.setState({msg : res.body.msg})         
       })
  }
  
  render () {
    if (this.state.jump) {
      return <Redirect to={this.state.jump} />
    }
    
    const changed = (name, e) => {
      this.setState({[name] : e.target.value})
    }
    
    return (
      <div>
        <h1> 로그인 </h1>
        <div style={styles.login}>
          ID : <br/>
          <input value={this.state.id}
             onChanged={e => changed ('id', e)} /><br/>
          password : <br/>
          <input value={this.state.pw}
             onChanged={e => changed ('pw', e)} /><br/>
          <button onClick={e => this.api('login')}>sign up</button><br/>
          <p style={styles.error}>{this.state.msg}</p>
          <p><button onClick={e=>this.api('adduser')}>sign in</button></p>
        </div>
      </div>
    )
  }
}















