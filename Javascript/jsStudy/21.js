// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.
// apply 또는 spread syntax를 이용해 보세요.

function getMaxNumber(arr) {
    // 자바스크립트의 내장 객체인 Math 를 이용하세요.
    // arr 는 숫자로만 이루어진 배열입니다.
    // 여기에 코드를 작성하세요.
    return Math.max(...arr);
}

const result = getMaxNumber([5, 10, 3, 12, 1, 9]);
console.log(result); // 출력 결과: 12
