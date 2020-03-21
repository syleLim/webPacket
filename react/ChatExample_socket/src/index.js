import React from 'react'
import ReactDOM from 'react-dom'

//connnet socketioserver
import socketio from 'socket.io-client'
const socket = socketio.connet('http://localhost:3001') //server url


class ChatForm extends React.Component {
  constructor () {
    this.state = {
      name :'',
      message: ''
    }    
  }
  
  nameChanged(e) {
    this.setState({name : e.target.value})
  }
  
  messageChanged(e) {
    this.setState({message: e.target.value})
  }
  
  send() {
    socket.emit('chat-msg', {
      name : this.state.name,
      message : this.state.message
    })
    this.setState({message : ''})
  }
  
  render () {
    return (
      <div style={styles.form}>
        이름 : </br>
        <input value={this.state.name}
          onChange={this.nameChanged.bind(this)} /></br>
        메시지 : </br>
        <input value={this.state.message}
          onChange={this.messageChanged.bind(this)} /></br>
        <button onClick={this.send.bind(this)}>전송</button>
      </div> 
    )
  }
}

class App extends React.Component {
  constructor () {
    super ()
    
    this.state = {
      this.logs = []
      //log = {key, name, message}
      //key 는 넘어올때 설정
    }
  }
  
  componentDidMount () {
    socket.on('chat-msg', (obj)=> {
      //..? 이거 깊은 복사 아니지 않나?
      const newLogs = this.state.logs
      //key값(=id)설정
      obj.key = 'key_' + (this.state.logs.length +1)
      
      newLogs.unshift(obj)
      this.setState({log : newLogs})
    })
  }
  
  render () {
    const logList = this.state.logs.map((e) => (
      <div key = {e.key} style={styles.log}>
        <span style={styles.name}>{e.name}</span>
        <span style={styles.message}> : {e.message}</span>
        <p style={{clear : 'both'}} />
      </div>
    ))
    
    return (
      <div>
        <h1 style= {styles.h1}>Chat</h1>
        <ChatForm />
        <div>{logList}</div>
      </div>
    )
  }
}

reactDOM.render(<App />, document.getElementById('root'))



















