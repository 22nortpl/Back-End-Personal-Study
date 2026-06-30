fs 모듈 : 파일 시스템 모듈, 파일 시스템과 관련된 모든 기능 제공

가져오기 : const fs = require("fs");

현재 디렉토리 읽기 : fs.readdirSync(경로[, 옵션]);
옵션 : encoding, 반환값이 어떤 형태인지를 지정, 기본은 UTF-8
비동기 처리 : readdir 함수
빠르게 다른 일부터 처리하라는 뜻
fs.readdir(경로, { 옵션 }, 콜백);
옵션 
- encoding (위쪽 내용과 동일)
- withFileTypes : 기본값 false, true로 바꾸면 디렉터리 항목으로 된 배열로 반환
매개변수는 err, data