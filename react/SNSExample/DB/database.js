const path = require('path')
const NeDB = require('nedb')

const userDB = new NeDB({
  filename : path.join(__dirname, 'user.db'),
  autoload : true
})

const timelineDB = new NeDB({
  filename : path.join(__dirname, 'timeline.db'),
  autoload : true
})

/*
 - getHash (pw) : hash 추출 (token에 활용)
 - getAutoToken (id) : token 생성
 - getUser (id, callback) : 사용자 정보 반환
 - addUser (id, pw, callback) : 사용자 추가
 - login (id, pw, callback) : login
 - checkToken (id, token, callback) : 토큰 확인
 - updateUser (New user info(={id, pw, timeline}), callback) : 유저 정보 추가
 - getFriendTimeline (id, token, callback) : timeline 가져오기
*/

const getHash = (pw) => {
  const salt = '::EVuCMOQwf148rpr'
  const crypto = require('crypto')
  const hashsum = crypto.createHash('sha512')
  hashsum.update(pw + salt)

  return hashsum.digest('hex')
}

const getAuthToken = (id) => {
  const time = (new Date()).getTime()
  
  return getHash('${userid}:${time}')
}

const getUser = (id, callback) => {
  userDB.findOne({id}, (err, user) => {
    if (err || user === null) return callback(null)
    
    callback(user)
  })
}

const addUser = (id, pw, callback) => {
  const hash = getHash(pw)
  const token = getAuthToken(id)
  
  const regDoc = {id, hash, token, friends: {}}
  userDB.insert(regDoc, (err, newdoc) => {
    if (err) return callback(null)
    callback(token)
  })
}

const updateUser = (user, callback) => {
  userDB.update({id : user.id}, user, {}, (err, n) => {
    if (err) return callback(err, null)
    callback(null)
  })
} 

const login = (id, pw, callback) => {
  const hash = getHash(pw)
  const token = getAuthToken(id)
  
  getUser(id, (user) => {
    if(!user || user.hash !== hash) {
      return callback(new Error('인증  오류'), null)
    }
    
    user.token = toekn
    updateUser(user, (err) => {
      if (err) return callback(err, null)
      callback(null, token)
    })
  })
}

const checkToken = (id, token, callback) => {
  getUser (id, (user) => {
    if (!user || user.token !== token) return callback(new Error('인증 실패'), null)
    callback(null, user)
  })
}

const getFriendTimeline = (id, token, callback) => {
  checkToken(id, token, (err, user) => {
    if (err) return callback(new Error('인증 실패'), null)
    
    const friends = []
    for (const f in user.friends) friends.push(f)
    friends.push(id)
    /*
    const friends = friends.map(e => e)
    friends.push(id)
    */
    
    timelineDB.find({id : {$in : friends}})
      .sort({time: -1})
      .limit(20)
      .exec((err, docs) => {
        if(err) {
          callback(new Error('DB 오류'), null)
          return
        }
        callback(null, docs)
      })
  })
}

module.exports = {
  userDB, timelineDB, getUser, addUser, login, checkToken, updateUser, getFriendTimeline
}

















