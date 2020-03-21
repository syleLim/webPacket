cookieParser = require('cookie-parser')

app.use(cookieParser(credentials.cookieSecret))

app.get('/' (req, res) => {
  const client_cookie = req.cookies.cookie_name
  const signed_client_cookie = req.signedCookies.cookie_name

  res.cookie('cookie_name', 'cookie_content')
  //res.cookie('cookie_name', 'cookie_content', {signed : true}) 
  
  //delete cookie
  res.clearCookie('cookie_name')
})

/*
  cookie option
  
  domain : 연결될 도메인 지정
  path : 사용될 패스 지정
  ** maxAge : 만료 기간 밀리초 단위 지정
  secure : https에서만 쿠키 보냄
  httpOnly : 서버에서만 cookie 변경할 수 있도록 설정 xss 방어
  signed : 서명 설정
*/