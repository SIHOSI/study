# 타입 변환

| **값**             | 문자열로        | 숫자로 | 불 값으로 |
|-------------------|-------------|-----|-------|
| **undefined**     | "undefined" | nan | false |
| **null**          | "null"      | **0**   | false |
| **true**          | "true"      | **1**   |       |
| **false**         | "false"     | **0**   |       |
| **""(빈 문자열)**     |             | **0**   | **false** |
| **"1.2"(숫자)**     |             | 1.2 | true  |
| **"one"(문자열)**    |             |     | true  |
| **0**             | "0"         |     | **false** |
| **-0**            | "0"         |     | **false** |
| **infinity**      | "infinity"  |     | true  |
| **-infinity**     | "-infinity" |     | true  |
| **nan**           | "nan"       |     | **false** |
| **{}**            |             |     | true  |
| **[]**            | ""          | **0**   | true  |
| **[9](숫자 요소 하나)** | "9"         | **9**   | true  |
| **['a'](임의의 배열)** |             | **NaN** | true  |
| **function(){}**  |             | **NaN** | true  |


# 연산자

### in 연산자

- 왼쪽 피 연산자가 오른쪽 객체의 프로퍼티 이름일 경우 true를 반환.

    >
        ```javascript
        let point = {x: 1, y: 1};
        "x" in point // true
        "toString" in point // true, 객체는 toString메소드를 상속한다.

        let data = [7, 8, 9];
        "0" in data // true , 인덱스 "0"이 존재
        1 in data // true, 숫자는 문자열로 변황되고 인덱스 "1"이 존재
        3 in data // false
        ```


### instanceof 연산자

- 왼쪽 객체가 오른쪽 클래스의 인스턴스라면 true를 반환.

    >
        ```javascript
        let d = new Date();
        d instanceof Date // true
        d instanceof Object // true, 객체는 모두 Object의 인스턴스
        d instanceof Number // false
        let a = [1, 2, 3];
        a instanceof Array 
        a instanceof Object // true, 배열은 모두 객체
        ```


# 논리 표현식

