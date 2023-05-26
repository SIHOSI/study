// 결제 카드에 따라 할인율이 다른 쇼핑몰이 있다고 가정합니다.
// 우리카드 또는 신한카드는 10% 할인.
// 롯데카드 또는 현대카드는 5% 할인.
// 아래 결과를 출력하는 함수를 완성해 보세요.

function getDiscountedPrice(original_price, card) {
    // 할인 전 가격과 결제 카드에 따라 할인을 적용한 가격을 반환해야 합니다.
    // 이 부분에 코드를 작성하세요.
    if (card === '신한카드' || card === '우리카드') {
        return original_price * 0.9;
    } else if (card === '롯데카드' || card === '현대카드') {
        return original_price * 0.95;
    }
}

const result = getDiscountedPrice(70000, '신한카드');
console.log(result); // 출력 결과: 63000
