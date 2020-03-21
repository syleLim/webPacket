const db = require('./DB/database.js')

const express = require('express')
const app = express()
const PORT = 3001
app.listen(PORT, ()=> {
  console.log('run server with port : ' + PORT)
})

//routing
app.use('/public', express.static('./public'))
app.use('/login', express.static('./public'))
app.use('/users', express.static('./public'))
app.use('/timeline', express.static('./public'))
app.use('/',express.static('./public'))

//acting (API)
app.get('/api/adduser', (req, res) => {
  const id = req.query.id
  const pw = req.query.pw
  if(id === '' || pw === '') {
    return res.json({status: false, msg: 'id나 비밀번호가 없습니다.'})
  }
  
  db.getUser(id, (user) => {
    if(user) {
      return res.json({status: false, msg : '이미 존재하는 사용자 입니다.'})
    }
    
    db.addUser(id, pw, (token) => {
      if (!token) {
        res.json({status: false, msg:'DB오류'})
      }
      
      res.json({status:true, token})
    })
  })
})

app.get('/api/login', (req, res) => {
  const id = req.query.id
  const pw = req.query.pw
  
  db.login(id, pw, (err, token) => {
    if (err) {
      res.json({status:false, msg: '인증 오류'})
      return
    }
    res.json({status:true, token})
  })
})

app.get('/api/add_friend', (req, res) => {
  const id = req.query.id
  const token = req.query.token
  const friendId = req.query.friendId
  
  db.checkToken(id, token, (err, user) => {
    if (err) {
      res.json({status : false, msg : '인증 오류'})
      return
    }
    
    user.friends[friendId] = true
    db.updateUser(user, (err) => {
      if (err) {
        res.json({status : false, msg : 'DB 오류'})
        return
      }
      
      res.json({status: true})
    })
  })
})

app.get('/api/add_timeline', (req, res) => {
  const id = req.query.id
  const token = req.query.token
  const content = req.query.content
  const time = (new Date()).getTime()
  
  db.checkToken(id, token, (err, user) => {
    if(err) {
      res.json({status : false, msg : '인증 오류'})
      return
    }
    
    const item = {userid, content, time}
    db.timelineDB.insert(item, (err, it) => {
      if(err) {
        res.json({status : false, msg : 'DB 오류'})
        return
      }
      res.json({status:true, timelineId : it._id})
    })
  })
})


app.get('/api/get_allusers', (req, res) => {
  db.userDB.find({}, (err, docs) => {
    if(err) return res.json({status: false})
    
    const users = docs.map(e => e.id)
    res.json({status: true, users})
  })
})

app.get('/api/get_user', (req, res) => {
  const id = req.query.id
  db.getUser(id, (user) => {
    if(!user) return res.json({status:false})
    
    resjson({status:true, friends : user.friends})
  })
})

app.get('/api/get_friends_timeline', (req, res) => {
  const id = req.query.id
  const token = req.query.token
  
  db.getFriendTimeline(id, token, (err, docs) => {
    if (err) {
      res.json({status : false, msg: err.toString()})
      return
    }
    res.json({status: true, timelines : docs})
  })
})





















