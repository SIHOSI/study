// 클로저는 "함수와 함수가 선언된 시점의 렉시컬 환경의 조합"입니다.
// 위 정의가 어렵다면, 실행컨텍스트가 체화되기전까지
// "외부 함수의 변수를 참조하는 내부 함수"로 생각해 주셔도 좋습니다.

// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

function outerFunction() {
    const outerVariable = 'I am outside!';

    function innerFunction() {
        // 여기에 코드를 작성하세요.
        return console.log(outerVariable);
    }

    return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // 출력 결과: 'I am outside!'
