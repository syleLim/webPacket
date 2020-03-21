// basic form
const req = require('superagent')

const Url = 'data or api url (http://localhost:3000/data.json)'

req.get(Url).end((err, res) => {
  if(err) {
    //error handling
  }
  
  //res.body handling
})


//superAgent function
req.get(url).query(params).end(callback)

req.get(url).set('API-KEY', 'password').end(callback)

req.post(url).set('Content-Type', 'application/json').send(params).end(callback)

req.post(url).set('Content-Type', 'application/json').query(query).send(params).end(callback)


//React example
import request = require('superagent')

class readDataComponent extends React.Component {
  constructor () {
    super ()
  }
  
  this.state = {
    data : ''
  }
  
  componentWillMount () {
    req.get('./data.json') //read from file
      .accept('application/json')
      .end((err, res) => {
        if(err) {
          // error handling
        }
        
        this.setState({
          data : res.body
        })
      })
  }
  
  render () {
    if (!this.state.data) {
      return <div>Loading...</div>
    }
    
    return (
      <div>
        {this.state.data.map(e => e.value)}
      </div>
    )
  }
}














