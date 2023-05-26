// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

function mapArray(arr) {
    // 배열의 map 메소드를 이용해 보세요.
    // 객체 {key: value}의 key가 변수를 참조하려면 [key] 이렇게 대괄호 안에 넣으세요.
    // 여기에 코드를 작성하세요.
    return arr.map((value, index) => {
        return { [index]: value };
    });
}

const result = mapArray(['a', 'b', 'c']);
console.log(result); // 출력 결과: [{0: 'a'}, {1: 'b'}, {2: 'c'}]
