서버 생성 함수 : createServer
http.createServer(옵선, 콜백)

서버 실행 : listen 함수
server.listen(포트, 호스트, 콜백)
여기서는 3000번 포트 사용

호스트 : listen 함수에서 사용하는 호스트는 IP주소, 랜카드가 여러개일 때 작성

ctrl + C를 누르면 서버를 강제 종료 가능, 그러나 서버를 종료한 후 다시 실행하는 과정이 필요