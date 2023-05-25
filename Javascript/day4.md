# 타입 변환

| **값**                  | 문자열로    | 숫자로  | 불 값으로 |
| ----------------------- | ----------- | ------- | --------- |
| **undefined**           | "undefined" | nan     | false     |
| **null**                | "null"      | **0**   | false     |
| **true**                | "true"      | **1**   |           |
| **false**               | "false"     | **0**   |           |
| **""(빈 문자열)**       |             | **0**   | **false** |
| **"1.2"(숫자)**         |             | 1.2     | true      |
| **"one"(문자열)**       |             |         | true      |
| **0**                   | "0"         |         | **false** |
| **-0**                  | "0"         |         | **false** |
| **infinity**            | "infinity"  |         | true      |
| **-infinity**           | "-infinity" |         | true      |
| **nan**                 | "nan"       |         | **false** |
| **{}**                  |             |         | true      |
| **[]**                  | ""          | **0**   | true      |
| **[9](숫자 요소 하나)** | "9"         | **9**   | true      |
| **['a'](임의의 배열)**  |             | **NaN** | true      |
| **function(){}**        |             | **NaN** | true      |

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

# for/of 문

</br>
- 이터러블(Iterable)한 객체에서 동작. (배열, 문자열, 세트, 맵)
- 객체는 기본적으로 이터러블 하지 않다. 일반적인 객체에 for/of 사용하려 하면 TypeError가 일어난다.

```javascript
let o = {x: 1, y: 2, z: 3}
for(let i of o) {
    console.log(i)
} // o는 이터러블이 아니라서 TypeError가 일어난다.
// 객체의 프로퍼티를 순회하고 싶다면 for/in문을 사용해야 한다. 또는 Object.keys()메소드를 사용한다.

let keys = ""
for(let i of Object.keys(o)) {
    keys += i;
}
console.log(keys) // xyz, Object.keys()는 객체의 프로퍼티 이름으로 이루어진 배열을 반환. 그 배열은 이터러블.

// 객체 프로퍼티의 키와 값이 모두 필요하다면 Object.entries() 와 분해할당을 사용해서 for/of문을 사용할 수 있다.
let pairs = ""
for( let [k, v] of Object.entries(o)) {
    pairs += k + v // x + 1 , y + 2 , z + 3
}
console.log(pairs) // x1y2z3
// Object.entries()는 배열의 배열을 반환. 그 내부 배열은 키-값 쌍이다. 
```

- set와 map 클래스는 이터러블.
- set를 for/of로 순회하면 루프 바디는 세트의 각 요소에 대해 한 번씩 실행된다.
- 이를 이용해서 문자열에서 중복 없이 출력 가능.

```javascript
let text = "Na na na na na na Batman!"
let wordSet = new Set(test.split(" "))
let unique = []
for ( let word of wordSet) {
    unique.push(word)
}
console.log(unique) // ["Na", "na", "Batman!"]
```

- map의 경우 키나 값이 아닌 키-값 쌍을 순회한다.
- 반복할 때마다 이터레이터는 첫 번째 요소가 키, 두번째 요소가 키에 대응하는 값인 배열을 반환.

```javascript
let m = new Map([[1, "one"]])
for(let [key, value] of m){
    console.log(key) // 1
    console.log(value) // one
}
```

</br>
</br>

# for/in 문

* for/of문은 이터러블 객체가 와야 하지만 for/in문은 어떤 객체든 사용 가능.

* for/in문은 지정된 객체의 프로퍼티 이름을 순회.</br>
</br>


```javascript
for(let p in o) //o의 프로퍼티 이름을 변수 p에 할당
    console.log(o[p])
```

- for/in문은 객체의 프로퍼티 전체를 열거하지 않는다.
- 이름이 심벌인 프로퍼티는 열거하지 않는다.
- 이름이 문자열인 프로퍼티 중에서도 열거 가능한 프로퍼티만 순회한다.
- 자바스크립트에서 정의하는 내장 메서드는 열거하지 않는다.
  - 모든 객체에 toString() 메서드가 있지만 for/in문은 toString() 메서드를 열거 대상으로 간주 하지 않는다.
- 보통 배열에는 for/of문을 쓰고 객체 루프는 Object.keys(), for/of문이 선호된다.