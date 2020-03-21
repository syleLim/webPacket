import React from 'react'
import request from 'superagent'
import styles from './styles.js'

export default class Timeline extends Component {
  constructor () {
    super () 
    
    this.state = { timelines : [], comment : ''}
  }
  
  loadTimelines () {
    request.get('/api/get_friends_timeline')
      .query({
        id :window.localStorage.id,
        token : window.localStorage.token
      })
      .end((err, res) => {
        if (err) return
        
        this.setState({timelines : res.body.timelines})
      })
  }
  
  post () {
    request.get('/api/add_timeline')
      .query({
        id : window.localStorage.id,
        token : window.localStorage.token,
        comment : this.state.comment
      })
      .end ((err, res) => {
        if (err) return
        
        this.setState({comment : ''})
        this.loadTimelines()
      })
  }
  
  componentWillMount () {
    this.loadTimelines()
  }
  
  render () {
    const timelines = this.state.timelines.map (e=> {
      return (
        <div key={e.id}>
          <img src={'user.png'} style={styles.tl_img} />
          <div style={styles.id}>{e.id}</div>
          <div style={styles.comment}>{e.comment}</div>
          <p style={{clear : both}} />
        </div>
      )
    })
    
    return (
      <div>
        <h1> Timeline </h1>
        <div>
          <input value={this.state.comment} size={40}
             onChanged={e=> this.setState(comment : e.target.value)}/>
          <button onClick={e=> this.post()}Post </button>
        </div>
        <div>{timelines}</div>
        <hr />
        <p><a herf={'/users'}> add friend </a></p>
        <p><a herf={'/login'}> login </a><p>
      </div>
    ) 
  }  
}










