import React from 'react'
import ReactDOM from 'react-dom'
import request from 'superagent'

class BBSForm extends React.Component {
  constructor () {
    super ()
    
    this.state = {
      name : '',
      body : ''
    }
  }
  
  nameChange (e) {
    this.setState({name : e.target.value})
  }
  
  bodyChange (e) {
    this.setState({body : e.target.value})
  }
  
  post (e) {
    request.get('/api/wirte')
      .query({name : this.state.name, body : this.state.body})
      .end((err, data) => {
        if (err) console.error(err)
        
        this.setState({body : ''})
        
        if(this.props.onPost) {
          this.props.onPost()
        }
      })
  }
  
  render () {
    return (
      <div style = {style.form}>
        이름 : <br />
        <input type='txet' value={this.state.name}
          onChange={this.nameChanged.bind(this)} /><br />
        본문 : <br />
        <input type='text' value={this.state.body}
          onChange={this.bodyChanged.bind(this)} /><br />
        <button onClick={this.post()}>전송</button>
      </div>
    )
  }
}

class App extends React.Component {
  constructor () {
    super () 
  
    this.state = {
      items : []
      /*
        item = {id : , name : , body : ,}
      */
    }
  }
  
  componentWillMount () {
    this.loadLogs()
  }
  
  render () {
    const itemList = this.state.items.map(e => (
      <li key={e.id}>{e.name} - {e.body}</li>
    ))
    
    return (
      <div>
        <h1 style={styles.h1}>Article</h1>
        <BBSForm onPost={this.loadLogs.bind(this)}
        <p style={styles.right}>
          <button onClick={this.loadLogs.bind(this)}>Return</button>
        <ul>{itemList}</ul>
      </div>
    )  
  }
}

const styles = {
  h1 : {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 24,
    padding: 12
  },
  
  form: {
    padding: 12,
    border: '1px solid silver',
    backgroundColor: '#F0F0F0'
  },
  
  right : {
    textAlign: 'right'
  }
}

reactDOM.render(<App />, document.getElementById('root'))




















