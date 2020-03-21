## Structure
|-- package.json
|-- snsServer.js
|-- public
    |-- bundle.js
    |-- default.css
    |-- index.html
    |-- user.png
|-- DB
    |-- database.js
    |-- timeline.db
    |-- user.db 
|-- src
    |-- index.js
    |-- login.js
    |-- timeline.js
    |-- user.js
    |-- styles.js
|-- webpack.config.js

## Server api
 - addUser (id, pw) : 회원가입
 - login (id, pw) : 로그인
 - add_friend (id, token, friend_id): 친구추가
 - get_allusers () : 모든 사용자 응답
 - add_timeline (id, token, content) : timeline 추가
 - get_friend_timeline (id, token) : timeline 긁어오기
 - get_user (id) : 사용자 정보(친구 목록) 반환 
 
## DB function
 - getHash (pw) : hash 추출 (token에 활용)
 - getAutoToken (id) : token 생성
 - getUser (id, callback) : 사용자 정보 반환
 - addUser (id, pw, callback) : 사용자 추가
 - login (id, pw, callback) : login
 - checkToken (id, token, callback) : 토큰 확인
 - updateUser (New user info(={id, pw, timeline}), callback) : 유저 정보 추가
 - getFriendTimeline (id, token, callback) : timeline 가져오기