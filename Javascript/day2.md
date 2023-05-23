# 문

### 조건문

1.  if문

    ```javascript
    let x = 10;
    if (x > 0) {
        console.log('x는 양수입니다.');
    }
    ```

    ```javascript
    let x = 0;
    if (x > 0) {
        console.log('x는 양수입니다.');
    } else if (x < 0) {
        console.log('x는 음수입니다.');
    } else {
        console.log('x는 0입니다.');
    }
    ```

2.  삼항 연산자

    ```javascript
    let message = (age >= 18) ? "성인입니다." : "미성년자입니다
    ```

3.  truthy , falsy한 값

    ```javascript
    if (0) {
        console.log('이 코드는 실행되지 않습니다.');
    }
    if ('') {
        console.log('이 코드는 실행되지 않습니다.');
    }
    if (null) {
        console.log('이 코드는 실행되지 않습니다.');
    }
    if (undefined) {
        console.log('이 코드는 실행되지 않습니다.');
    }
    if (NaN) {
        console.log('이 코드는 실행되지 않습니다.');
    }
    if (false) {
        console.log('이 코드는 실행되지 않습니다.');
    }
    ```

### 반복문

1. for문

    ```javascript
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    ```

2. for ...in문

    ```javascript
    let person = { name: 'John', age: 30, gender: 'male' };
    for (let key in person) {
        console.log(key + ': ' + person[key]);
    }
    ```

### 배열, 객체

-   기본적인 객체 생성

    ```javascript
    let person = {
        name: '홍길동',
        age: 30,
        gender: '남자',
    };
    ```

    -   생성자 함수를 사용한 객체 생성

    ```javascript
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    let person1 = new Person('홍길동', 30, '남자');
    let person2 = new Person('홍길순', 25, '여자');
    ```

-   객체 속성 접근

    ```javascript
    person.name; //홍길동
    ```

-   객체 비교

    -   객체를 비교할 때 일반적으로 === 연산자 사용할 수 없다.
        대신 JSON.stringify()함수 사용하여 객체를 문자열로 변환 후 비교한다.

    ```javascript
    console.log(person1 === person2); // false
    console.log(JSON.stringify(person1) === JSON.stringify(person2)); // true
    ```

-   기본적인 배열 생성

    ```javascript
    let fruits = ['사과', '바나나', '오렌지'];
    ```

    -   배열의 크기 지정

    ```javascript
    let numbers = new Array(5);
    ```
