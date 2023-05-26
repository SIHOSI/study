// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.
// 자료구조 Set 의 인자로 배열을 넣으면 중복요소가 없는 배열을 반환받을 수 있습니다.
// spread syntax 를 사용해 보세요. Set을 배열로 변환할 수 있습니다.

function getNoDuplicates(arr) {
    // 여기에 코드를 작성하세요.
    let newSet = new Set(arr);
    return [...newSet];
}

const result = getNoDuplicates([1, 5, 2, 3, 4, 1, 2, 5, 6, 3]);
console.log(result); // 출력 결과: [1, 5, 2, 3, 4, 6]
