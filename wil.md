백엔드 (BackEnd)를 처음으로 배워보게 되었다. 사실 백엔드를 처음 접하다보니까 쉬운 게 하나도 없었지만, 그래도 이번에 배운 내용을 어느 정도 정리해 나갈까 한다. 앞으로 코딩을 하면서 백엔드에 대해서 좀 더 잘 알아가보고자 한다.

상품 정보 등록
HTTP Method : POST
URI :/products

상품 목록 조회
HTTP Method : GET
URI :/products

개별 상품 정보 상세 조회
HTTP Method : GET
URI :/products/{productName}

상품 정보 수정
HTTP Method : EDIT
URI :/products/{productName}

상품 삭제
HTTP Method : DELETE
URI :/products/{productName}

주문 정보 생성
HTTP Method : POST
URI :/orders

주문 목록 조회
HTTP Method : GET
URI :/orders

개별 주문 정보 상세 조회
HTTP Method : GET
URI :/orders/{orderInfo}

주문 취소
HTTP Method : CANCEL
URI :/orders/{orderInfo}

