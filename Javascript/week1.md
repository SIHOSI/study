# Javascript의 특징

1. 객체 지향 프로그래밍 지원
2. 동적 타이핑
    - 변수를 선언할 때 타입을 지정하지 않는다.
    - 이것은 런타임 시점에 변수에 할당되는 값에 따라 자동으로 데이터 타입이 결정 된다는 것을 의미한다.
    * 런타임 시점이란, 프로그램이 실행되는 동안의 시점을 의미. 반대의 의미로는 컴파일 시점이 있다.
3. 함수형 프로그래밍 지원
    - 함수를 일급 객체로 취급하고, 고차 함수를 지원한다.
    * 일급 객체란, 함수를 일반 값처럼 함수의 매개변수나 반환값으로 사용할 수 있는 객체를 의미한다.
4. 비동기 처리
    - 비동기 처리는 작업을 순차적으로 기다리지 않고, 병렬로 처리할 수 있도록 하는 방식.
5. 클라이언트 측 및 서버 측 모두에서 사용 가능
    - node.js를 활용하여 서버 측에서도 사용 가능.

# 변수와 상수

-   자바스크립트의 변수는 **var, let, const** 세가지 방법이 있다.
    -   let 과 const 는 같은 이름의 변수를 두 번 선언하면 오류가 발생한다.
    -   const 는 선언 후에 값을 변경할 수 없는 상수를 선언할 때 사용.

#### 데이터 타입과 형 변환

1. 숫자(Number)
    - 정수형 숫자(Integer)
    - 실수형 숫자(Float)
    - 지수형 숫자(Exponential)
    - NaN(Not a Number)
    - Infinity
2. 문자열(String)

    - 문자열 길이(length) 확인하기

    ```javascript
    let str = 'Hello, world!';
    console.log(str.length);
    ```

    - 문자열 결합(concatenation)

    ```javascript
    let str1 = 'Hello, ';
    let str2 = 'world!';
    let result = str1.concat(str2);
    console.log(result); // "Hello, world!"
    ```

    - 문자열 자르기(substr, slice)

    ```javascript
    let str = 'Hello, world!';
    console.log(str.substr(7, 5)); // "world"
    console.log(str.slice(7, 12)); // "world"
    ```

    - 문자열 검색(search)

    ```javascript
    let str = 'Hello, world!';
    console.log(str.search('world')); // 7
    ```

    - 문자열 대체(replace)

    ```javascript
    let str = 'Hello, world!';
    let result = str.replace('world', 'JavaScript');
    console.log(result); // "Hello, JavaScript!"
    ```

    - 문자열 분할(split)

    ```javascript
    let str = 'apple, banana, kiwi';
    let result = str.split(',');
    console.log(result); // ["apple", " banana", " kiwi"]
    ```

3. 불리언(Boolean)

    - 불리언은 참(true)과 거짓(false)을 나타내는 데이터 타입.

    * **0, " ", NaN, null, undefined** 는 false.
    * 빈 객체 {}는 true.

4. undefined

    - 값이 할당되지 않은 변수.

5. null

    - 값이 존재하지 않음을 명시적으로 표시.

6. 객체(Object)

    - 속성과 메소드를 가지는 컨테이너.

7. 배열(Array)
    - 여러 개의 데이터를 순서대로 저장하는 데이터 타입.
