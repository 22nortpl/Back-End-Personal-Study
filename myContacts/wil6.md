익스프레스 : HTTP 모듈 이외의 기능도 사용하기 위해 존재

기능
- 라우팅 : 기존보다 더 간편하게
- 미들웨어 : 요청과 응답 사이 여러 가지 기능 실행
- 템플릿 엔진 : 서버와 함께 동적인 HTML 구성 가능
- 정적인 파일 지원 : CSS, JS 등의 정적인 파일도 지원 가능

nodemon : 서버 리셋시키고 다시 시작하는 과정을 줄이고 화면만 새로고침해도 수정된 내용 반영하게 함.

express 라우팅 : 원래 http 모듈은 if문을 사용, 그러나
express는
app.METHOD(path, handler)
여기서 콜백 함수 내의 함수들을 연결 가능, 이를 메서드 체이닝

라우트 파라미터 : 아이디값을 사용해 필요한 연락처만 가져오려면 요청 URL 뒤에 가져와야 하는 조건을 지정

/요청 URL/:id

요청 방식
- GET : 가져오기
- PUT : 수정하기
- DELETE : 삭제하기

익스프레스의 요청 객체와 응답 객체
1. 요청 객체
- req.body : 서버로 POST 요청 시 넘겨준 정보를 소유,예시로 로그인 버튼을 누를 때 사용자의 아이디와 비번 값이 들어있음
- req.cookies : 쿠키 정보를 서버로 함께 넘길 때 소유
- req.headers : 서버로 요청을 보낼 때 같이 보낸 헤더 정보 소유
- req.params : URL 뒤에 라우트 파라미터가 포함되어 있을 경우 파라미터 정보 소유
- req.query : 요청 URL에 포함된 질의 매개변수 소유

2. 응답 객체에서 사용하는 함수
- res.download : 파일 내려받기
- res.end : 응답 프로세스를 종료
- res.json : JSON 응답 전송
- res.jsonp : JSONP 지원을 통해 JSON 응답 전송
- res.redirect : 요청 경로를 재지정해서 강제 이동
- res.render : 뷰 템플릿을 화면에 렌더링
- res.send : 어떤 유형이든 res.send() 괄호 안의 내용 전송
- res.sendFile : 지정한 경로의 파일을 읽어서 내용 전송
- res.sendStatus : 상태 메시지와 함께 HTTP 코드 전송
- res.status : 응답 상태 코드를 설정