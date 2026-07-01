요청 객체 : 노드에서는 클라이언트에서 서버로 요청할 때 생성되는 객체
응답 객체 : 노드에서는 서버에서 클라이언트로 응답할 때 생성되는 객체

요청 객체의 이름은 어떤 것을 사용해도 가능, 주로 request 혹은 req 사용

응답 객체의 이름은 res사용, 그 응답을 처리하는 과정을 프로그래밍

응답 객체 = 응답 헤더 + 응답 본문, 2가지를 고려하고 응답이 끝난 후에는 바로 종료

헤더를 먼저 생성:
setHeader를 기본으로, 헤더에 함께 기록 시 writeHead 함수를 사용

res.setHeader(이름, 값)
res.writeHead(상태 코드, 상태 메시지, 헤더)

ex
res.setHeader("Content-Type", "text/plain");
res.writeHead(200, {"Content-Type", "text/plain"}) --> 상태코드 함께 작성

res.write(내용, 인코딩, 콜백);
res.end(내용, 인코딩, 콜백);

HTML 페이지 서빙 : HTML 페이지를 보여주는 방법