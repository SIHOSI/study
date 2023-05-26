## 문제 코드    
    
```javascript
function mapArray(arr) {
    return arr.map((value, index) => {
        return { [index]: value };
    });
}

const result = mapArray(['a', 'b', 'c']);
console.log(result); // 출력 결과: [{0: 'a'}, {1: 'b'}, {2: 'c'}]
```

- `return { [index]: value };` 이 부분이 이해가 안돼서 많이 헤맸다.

- 화살표 함수에는 return을 안써도 됐는데 얘는 return 값을 안주면 오류가 났다. </br> `{ [index]: value }` 이렇게 쓰면 왜 안되는걸까
</br>

## 수정한 코드
```javascript
function mapArray(arr) {
    return arr.map((value, index) => ({
        [index]: value,
    }));
}

const result = mapArray(['a', 'b', 'c']);
console.log(result); // 출력 결과: [{0: 'a'}, {1: 'b'}, {2: 'c'}]
```
- return 을 빼고 ()로 {}를 한번 더 묶고 , 를 추가했다.

- , 는 붙이는지 몰랐는데 프리티어가 자동으로 붙여줬다.

- 둘의 차이점은 return 으로 명시적으로 객체를 반환했는가, 화살표 함수의 단축 문법인 암시적 반환을 사용했는가.
***

1. 내가 잊어먹은게 화살표 함수에서 단일 표현식을 쓰는 경우 return 키워드를 생략할 수 있다는 것이었다.
    - `[index]: value` 는 단일 표현식이 아니고 객체 속성을 동적으로 받아 계산 하는 구문이다, 즉 계산된 속성 이름을 가진 객체 리터럴을 표현하는 표현식이다.

2. `return {[index]: value}` 로 묶어주는 이유: 객체를 생성하기 위함.

3. `({
        [index]: value,
    })` 왜 () 를 썻는가 : () 는 자바스크립트가 {}를 객체 리터럴로 해석하고 해당 객체를 반환하기 때문

4. , 는? : 객체 리터럴 안에서 속성과 속성 사이를 구분해줘야 되니까.

아 어려워