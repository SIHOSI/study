// 아래 함수는 배열을 입력받아서 배열 요소들 중 truthy한 요소들만 필터링하여 반환합니다.
// Truthy 란 boolean type을 기대하는 문맥에서 true 로 평가되는 값을 의미합니다.
// for문과 if문을 이용하여 작성해 보세요.

function getTruthyArray(arr) {
    const truthyArr = [];
    // 이 부분을 완성해 보세요.
    for (const item of arr) {
        if (Boolean(item) === true) truthyArr.push(item);
    }
    return truthyArr;
}

const result = getTruthyArray([-1, 0, '', {}, [], null, undefined, NaN]);
console.log(result); // 출력 결과: [-1, {}, []]
