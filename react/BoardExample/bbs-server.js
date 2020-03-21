const NeDB = require('nedb')
const path = require('path')

const db = new NeDB({
  filename : path.join(__dirname, 'bbs.db'),
  autoload : true
})

const express = require('express')
const app = express()
const portNo = 3001
app.listen(portNo, () => {
  console.log('run server with port : ' + portNo)
})

app.use('/public', express.static('./public'))
app.get('/', (req, res) => {
  res.redirect(302, '/public')
})

const sendJSON = (res, result, obj) => {
  obj['result'] = result
  res.json(obj)
}

app.get('/api/getItems',(req, res) => {
  db.find({}).sort({stime:1}).exec((err, data) => {
    if(err) {
      sendJSON(res, false, {logs: [], msg: err})
      return
    }
    
    console.log(data)
    sendJSON(res, true, {logs: data})
  })
})

app.get('/api/write', (req, res) => {
  const q = req.query
  
  db.insert({
    name : q.name,
    body : q.body,
    stime : (new Date()).getTime()
  }, (err, doc) => {
    if (err, doc) {
      console.error(err)
      sendJSON(res, false, {msg : err})
      return
    }
    sendJSON(res, true, {id: doc._id})
  })
})















