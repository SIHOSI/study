// 숫자 배열을 입력받아서 홀수의 값만 합치는 함수를 완성해 보세요.
// result 값이 아래아 같이 출력되어야 합니다.
// for문, if문, %(나머지) 연산자를 사용해 보세요.

function sumOdd(arr) {
    let sum = 0;
    // 이 부분을 완성해 보세요.
    for (const i of arr) {
        if (i % 2 == 1) sum += i;
    }
    return sum;
}

const result = sumOdd([1, 2, 3, 4, 5]);
console.log(result); // 출력 결과: 9
