// 아래의 결과와 같이 출력되도록 함수를 완성해 보세요.

function order(item, quantity, price) {
    // item, quantity, price 중 하나라도 입력이 되어 있지 않으면
    // '주문 정보를 모두 입력해주세요' 를 리턴합니다.
    // quantity 수량이 0이하면
    // '수량은 1개 이상 입력해주세요' 를 리턴합니다.
    // 위 두 가지 경우만 아닌 경우에만 아래와 같이 주문 완료 메시지를 출력합니다.
    // 이 부분에 코드를 작성해 보세요.
    if (!item || !quantity || !price) {
        return '주문 정보를 모두 입력해주세요';
    } else if (quantity < 0) {
        return '수량은 1개 이상 입력해주세요';
    } else {
        return `주문이 완료되었습니다. {$item} {$quantity}개를 {$price}원에 구매하셨습니다.`;
    }
}

console.log(order('아이폰 12', 2, 1200000));
// 출력 결과: '주문이 완료되었습니다. 아이폰 12 2개를 2400000원에 구매하셨습니다.'

console.log(order('맥북 프로', -1, 2500000));
// 출력 결과: '수량은 1개 이상 입력해주세요'

console.log(order('아이패드 에어', 1, null));
// 출력 결과: '주문 정보를 모두 입력해주세요'
