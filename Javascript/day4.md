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

</br>
</br>

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

</br>

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

</br>
</br>

# 논리 표현식

### 불 AND(&&)

- 먼저 왼쪽에 있는 피연산자를 평가, 값이 false이면 전체 표현식의 값은 반드시 false이기 때문에 왼쪽에 있는 값을 반환하며 오른쪽에 있는 값은 평가하지 않는다.
- 왼쪽에 있는 피연산자가 값이 true이면 전체적인 값은 오른쪽 피연산자가 되며, 값을 평가한 후 오른쪽 피연산자를 반환한다.

    >
    ```javascript
    let o = {x: 1}
    let p = null
    o && o.x // 1 , o는 true값이므로 o.x를 반환
    p && p.x // p , p는 false이므로 p를 반환
    ```

    ```javascript
    if( a === b ) stop()
    ( a === b ) && stop() // 똑같이 작동한다.
    ```
</br>

### 불 OR(||)

- 먼저 왼쪽에 있는 피연산자를 평가, 값이 true이면 오른쪽은 평가하지 않고 바로 반환.
- 왼쪽 피연산자가 false라면 오른쪽 피연산자를 평가하고 반환

    >
    ```javascript
    let max = maxWidth || preferneces.maxWidth || 500
    // maxWidth가 true 같은 값이면 그것을 사용.
    // 그렇지 않다면 preferences 객체에서 값을 찾는다.
    // 그 역시 true 가 아니면 상수 리터럴 500을 사용한다.
    ```
    </br>


    >  ### **null 병합 연산자 (??)**
    >   * 왼쪽 피연산자가 null이나 defined가 아니면 그 값을 반환.
    >   * 그렇지 않다면 오른쪽 피연산자의 값을 반환.
    >   >```javascript
    >   >(a !== null && a !== undefined) ? a : b
    >   >a ?? b // 위 코드와 동등.
    >   >```
    >
    >   >```javascript
    >   >let max = maxWidth || preferneces.maxWidth || 500
    >   >//이 표현의 문제는 어떤 환경에서는 0이나 빈 문자열, false가 유효한 값임에도 불구한고 모두 false 같은 값으로 취급된다는 것이다.
    >   >//예를 들어 maxWidth가 0이면 그 값은 무시된다.
    >   >let max = maxWidth ?? preferneces.maxWidth ?? 500
    >   >```
    >
    >   >```javascript
    >   >let options = { timeout: 0, title:"", verbose: false, n: null}
    >   >options.timeout ?? 1000 // 0
    >   >options.title ?? "Untitled" // ""
    >   >options.verbose ?? true // false
    >   >options.quiet ?? false // false, quiet프로퍼티가 정의되지 않았기 때문에 오른쪽값이 반환.
    >   >options.n ?? 10 // 10, 프로퍼티가 null이므로 오른쪽 값
    >
    >   * ?? 연산자는 &&, ||연산자와 비슷하긴 하지만 우선순위 관계가 명확하지 않기 때문에</br> 명시적으로 괄호를 써서 순서를 지정해줘야 한다.


</br>
</br>
</br>

# for 문

</br>
- 이터러블(Iterable)한 객체에서 동작. (배열, 문자열, 세트, 맵)
  