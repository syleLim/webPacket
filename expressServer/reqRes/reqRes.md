<h1>
request response
</h1>

## URL
### 구성 : protocol + host + port + path + query_string + hash
<hr>
## HEADER
### Content-type : 요청 해더 타입
<hr>
## REQUEST
### req.params : 매개변수를 담고있음 **
### req.query : 쿼리를 json형태로 가짐 **
### req.route : 라우트 정보, 라우트 디버그에 유용
### req.cookies : 쿠키값을 받아옴 **
### req.headers : 요청 해더
### req.accepts : client가 해당 타입을 받는지 확인
### req.ip : client ip 주소
### req.path : path 값 **
### req.host : 호스트 이름 반환 (보안에 사용 금지)
### req.xhr : AJAX면 true 반환 **
### req.protocol : 프로토콜 값
### req.secure : protocol === 'https'의 방식
### req.acceptedLanguages : 선호 자연어 반환 (헤더에서 파싱)
<hr>
### res.status(code) : 상태 코드 설정
### res.set(name, value) : 응답 헤더 설정
### res.cookie(name, value, [options]) res.clearCookie(name, [options]) : 쿠키 설정 및 제거 **
### res.redirect([status], url) : 302 / 301 code 
### res.send([status], body) : 데이터를 보냄 **
### res.json, res.jsonp ([Status], json) : json(p) 데이터 보냄 **
### res.type(type) : header type 설정 
### res.format(format) : 콘텐츠 전송
### res.attachment([filename]) : header Content-Disposition = attachment (download header)
### res.download(path , [filename], [callback]) : 위와 동일, 그러나 바로 다운로드 가능
### res.sendFile(path, [options], [callback]) : path 파일을 읽고 전송
### res.render(view, [locals], callback) : view rendering **
<hr>






