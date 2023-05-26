// 아래와 같이 출력되도록 함수를 완성해 보세요.
// if문 없이 삼항연산자를 사용해 보세요.

function getMessageIfHot(temperature) {
    // temperature 가 26보다 크면 "It's hot!", 작으면 "Its' not hot!"
    // 여기에 코드를 작성하세요.
    return temperature > 26 ? "It's hot!" : "Its' not hot!";
}

const result = getMessageIfHot(26);
console.log(result); // 출력 결과: 'It's not hot!'
