# **객체**

- 객체는 **프로퍼티의 순서 없는 집합**. 각 프로퍼티에는 이름과 값이 있다.
- 프로퍼티 이름은 보통 문자열. 심벌일 수도 있음.
- 객체는 자신만의 프로퍼티와 **'프로토타입'** 이라 불리는 다름 객체에서 프로퍼티를 상속받는다.
- **문자열, 숫자, 심벌, boolean, null, defined** 가 아닌 값은 모두 객체.
- 단, 문자열, 숫자, 불은 불변인 객체처럼 행동 가능.
- 객체는 **가변**이며 값이 아닌 **참조** 로 조작.
- 모든 프로퍼티에는 속성이 존재한다.
  - 쓰기 가능: 프로퍼티에 값을 설정할 수 있는지
  - 열거 가능: for/in 루프에 프로퍼티 이름을 반환할지 안 할지 결정
  - 변경 가능: 삭세 여부, 변경 여부


## 1.객체 생성

- 객체 리터럴, new 키워드, Object.create() 함수 사용.

</br>

#### 객체 리터럴
```javascript
let empty = {} // 프로퍼티가 없는 빈 객체
let p = {
    x: point,
    "main title": "javascript"
}
```
</br>

#### new 키워드
- new 키워드 뒤에는 반드시 함수 호출이 있어야 한다.
- 이런 형태로 사용되는 함수를 생성자라 부른다.
- js 내장 타입에도 생성자가 존재.
- 새로 생성된 객체를 초기화하는 목적으로 사용.
```javascript
let o = new Object();
let a = new Array();
let a = new Date();
```
</br>

#### 프로토타입
- **객체 대부분은 자신과 연결된 두 번째 객체를 갖는다.**
- 두 번째 객체를 **프로토 타입**이라 부르며, 프로토타입에서 프로퍼티를 **상속**받는다.

</br>

- 객체 리터럴을 사용해 생성한 객체는 모두 같은 프로토타입 객체를 갖는다. Object.prototype
- new 키워드와 생성자를 사용해 만든 객체는 생성자 함수의 prototype 프로퍼티 값을 자신의 프로토타입으로 사용. 즉, new Object()로 생성한 객체는 객체 리터럴과 마찬가지로 Object.prototype에서 상속받는다.
- new Date() 로 생성한 객체의 프로토타입은 Date.prototype.

</br>


- Object.prototype은 프로토타입이 없는 드문 객체 중 하나.
- 내장 생성자 대부분에 Object.prototype에서 상속받는 프로토타입이 있다.
- new Date()로 생성한 Date객체는 Date.prototype과 Object.prototype 양쪽에서 프로퍼티를 상속받는다.
- 이것을 **프로토타입 체인**이라 부른다.

</br>

#### Object.create()
- 첫 번째 인자를 프로토타입 삼아 새 객체를 생성.
```javascript
let o1 = Object.create({x: 1, y: 2}); // o1은 x와 y 프로퍼티를 상속받는다.
o1.x + o1.y = 3
```
- 인자로 null을 전달해 프로토타입이 없는 객체를 생성할 수도 있지만, 생성된 객체는 아무것도 상속하지 않으며 기본적인 메소드조차 없다.
```javascript
let o2 = Object.create(null) // o2는 프로퍼티나 메소드를 상속받지 않는다.
```
- 일반적인 빈 객체를 만들고 싶을 때는 Object.prototype을 전달한다.
```javascript
let o3 = Object.create(Object.prototype) // {} , new Object() 와 같다.
```
- 임의의 프로토타입을 사용해 새 객체를 만들 수 있는 것은 강력한 기능.
- **선택 사항으로 두 번째 인자를 전달 가능**. (후에 배울 예정.)
- 사용 목적중 하나는 서드 파티 라이브러리에서 객체를 변경하는 사고를 막는 것.

</br>
</br>

## 2.프로퍼티 검색과 설정
- 점(.)이나 대괄호([]) 연산자를 사용.
- 왼쪽은 값이 객체인 표현식.
- 점 연산자를 사용하면 오른쪽은 반드시 프로퍼티 이름이 단순한 식별자
- 대괄호를 사용한다면 프로퍼티 이름이 문자열로 평가되는 표현식.
- 대괄호 사용시 그 안의 표현식은 정확히는 반드시 문자열 또는 문자열이나 심벌로 변환될 수 있는 값으로 평가되어야 한다.
  

#### 연관 배열인 객체
```javascript
object.property
object["property"] // 두 표현식의 값은 같다.
```

- 문자열을 인덱스로 사용하는 배열을 **연관 배열** 이라 한다. 
- 또는 해시, 맵, 딕셔너리 로 부르기도 한다.
- 자바스크립트 객체는 연관 배열이다.
- C, C++, JAVA 등 타입이 고정된 언어에서는 객체의 프로퍼티 개수가 고정되어 있고 프로퍼티 이름도 반드시 미리 정의되어 있어야 한다.
- 자바스크립트는 타입을 엄격하게 고정하지 않으므로 이런 규칙이 없다.
- 점 연산자를 이용시 식별자는 반드시 문자 그대로 프로그램에 입력해야 한다.
- 대괄호 연산자로 프로퍼티에 접근 시 문자열로 표현할 수 있다.
- 문자열은 데이터 타입이므로 프로그램이 실행되는 동안 새로 생성할 수도 있고 조작할 수도 있다.

```javascript
let addr = ""
for(let i = 0 ; i < 4 ; i++)
    addr += customer[`address${i}`] + '\n'
```
- 자바스크립트는 이와 같은 코드가 사용될 수 있다.
- ES6 이후에는 이런 상황에서 일반 객체를 쓰기보다 Map클래스를 쓰면 더 좋을 때가 많아졌다.

</br>

#### 상속
- 자바스크립트 객체에는 자체 프로퍼티도 있고, 프로토타입 객체에서 상속하는 프로퍼티도 있다.
</br>

- 객체 o의 x 프로퍼티를 가져온다고 가정하고 o에 x라는 자체 프로퍼티가 없다면 o의 프로토타입 객체에서 x프로퍼티를 검색한다. 이후 x 프로퍼티를 찾거나, 프로토타입이 null인 객체에 도달할 때까지 검색을 계속한다.

```javascript
let o = {}; //o는 Object. prototype에서 객체 메서드를 상속
0.X = 1; //이제 자체 프로퍼티 x가 생겼습니다.
let p = Object. create(o); // p는 0와 Object. prototype에서 프로퍼티를 상속합니다.
p.y = 2; //자체 프로퍼티 y가 생겼습니다.
let q = Object.create(p); // q는 p, 0, Object. prototype에서 프로퍼티를 상속하며
q.z = 3; //자체 프로퍼티 2가 생겼습니다.
let f = q.toString(); //toString은 Object. prototype에서 상속했습니다.
q.X + q.y //=> 3; X와 y는 0와 p에서 상속
```

</br>

- 객체 o의 x프로퍼티에 값을 할당한다고 가정하면, o에 이미 상속되지 않은 x 프로퍼티가 있다면 그 할당은 기존 프로퍼티의 값을 바꾼다. 그렇지 않다면, 새로 만들고 거기에 할당한다.
- o에 상속된 x 프로퍼티가 있다면, 상속된 프로퍼티는 이제 새로 생성된 자체 프로퍼티에 가려진다.
- 프로토타입 체인에 존재하는 객체는 절대 수정하지 않는다.

```javascript
let unitcircle = { r: 1 }://상속할 객체
let c = Object. create(unitcircle); // C는 프로퍼티 r을 상속합니다.
C.x = 1; C.y = 1;//C에 자체 프로퍼티 두 개를 정의합니다.
c.r = 2;//C가 상속한 프로퍼티를 덮어 씁니다.
unitcircle.r//=> 1: **프로토타입은 영향받지 않습니다.**
```
- o가 x 프로퍼티를 상속하고 그 프로퍼티가 세터 메서드가 있는 접근자 프로퍼티라면 o에 x프로퍼티를 새로 만드는 대신 세터 메서드를 호출한다.
- 세터 메서드가 프로퍼티를 변경하더라도 o에만 변화가 있을 뿐 프로토타입 체인은 변하지 않는다.

</br>

#### 프로퍼티 접근 에러
- 존재하지 않는 프로퍼티를 검색하는 것은 에러가 아니다.
- o.x 에서 x 프로퍼티를 찾지 못한다면 undefined로 평가된다.
- 반면, 존재하지 않는 객체의 프로퍼티를 검색하는 것은 에러다.
```javascript
let len = book.subtitle.length // TypeError, length 프로퍼티가 없음.
```

- 점 연산자의 왼쪽이 null이나 undefined 이면 실패.

</br>

## 2.프로퍼티 삭제
- delete 연사자는 객체에서 프로퍼티를 삭제.
- 피연산자는 프로퍼티 접근 표현식이어야 한다.
- 값을 삭제하는 것이 아니라 프로퍼티 자체를 삭제한다.
- 자체 프로퍼티만 삭제할 뿐 상속된 프로퍼티는 삭제하지 않는다.
- 상속된 프로퍼티를 삭제하려면 프로토타입 객체에서 삭제해야 한다.
- delete 표현식은 삭제에 삭제에 성공했을 때, 또는 존재하지 않는 프로퍼티 삭제를 시도하는 등 효과가 없었을 때 true로 평가된다.
- 프로퍼티 접근 표현식이 아닌 표현식을 사용했을 때도 true로 평가된다.
```javascript
let o = {x: 1};//0에는 자체 프로퍼티 x가 있고 toString을 상속
delete o.x//=> true: 프로퍼티 X를 삭제
delete o.x//=> true: x가 존재하지 않으므로 아무 일도 일어나지 않지만 어쨌든 true
delete o, tostring // => true: tostring은 자체 프로퍼티가 아니므로 아무 일도 일어나지 않지만 어쨌든 true
delete 1//=> true: 의미 없지만 true
```

- delete는 변경 가능 속성이 false인 프로퍼티는 제거하지 않는다.

</br>

## 3.프로퍼티 테스트
- 주어진 이름을 가진 프로퍼티가 객체에 존재하는지 확인해야 될 때가 있다.
- 이 경우 in 연산자, hasOwnProperty(), propertyIsEnumerable() 메서드를 사용하거나 그냥 프로퍼티를 검색하면 된다.
  
</br>

- in 연산자는 왼쪽에 프로퍼티 이름, 오른쪽에 객체를 예상. - 객체에 그런 이름을 가진 자체 프로퍼티나 상속된 프로퍼티가 있다면 true를 반환합니다.
```javascript
let o= {×: 1};
"x" in o; // => true: 0에는 자체 프로퍼티 x가 있다.
"y” in o;  // => false: 0에는 프로퍼티 y가 없다.
"tostring" in o // => true: o는 tostring을 상속.
```

- hasownProperty() 메서드는 객체에 주어진 이름을 가진 자체 프로퍼티가 있는지 테스트한다. 상속된 프로퍼티에는 false를 반환한다.
```javascript
let o = { x: 1 };
o. hasOwnProperty("×") //=> true: 0에는 자체 프로퍼티 x가 있습니다.
o. hasOwnProperty ("y") //=> false: 0에는 프로퍼티 y가 없습니다.
o. hasownProperty("tostring") //=> false: tostring은 상속된 프로퍼티입니다.
```

- propertyIsEnumerable()은 hasounProperty()를 더 제한한버전
- 이 메서드 는 지정된 프로퍼티가 자체 프로퍼티이며 열거 가능 속성이 true일 때만 true를 반환한다.
  
```javascript
let o = { x: 1 };
0. propertyIsEnumerable("x") // => true: 0에는 열거 가능 프로퍼티 x가 있습니다.
0. propertyIsEnumerable("toString") // => false: 자체 프로퍼티가 아닙니다.
Object. prototype. propertyIsEnumerable("tostring") // => false: 열거 불가입니다.
```

- in은 존재하지 않는 프로퍼티와, 존재하지만 값이 undef ined인 프로퍼티 를 구분할 수 있습니다
```javascript
let o = { x: undefined }; // 프로퍼티에 직접 undef ined를 할당
o.x !== undefined // => false: 프로퍼티가 존재하지만 정의되지 않았다.
o.y !== undefined //=> false: 프로퍼티가 존재하지도 않는다.
"*" in o //=> true: 프로퍼티가 존재한다.
"y" in o //=> false: 프로퍼티가 존재하지 않는다.
delete o.x; //프로퍼티 X를 삭제한다.
"×" in o //=> false: 이제는 존재하지 않는다.
```

</br>

## 4.프로퍼티 열거
- for/in 루프는 지종된 객체의 상속 여부를 구분하지 않고 열거 간으 프로퍼티마다 그 이름을 루프 변수에 할당하면서 루프 바디를 실행한다.
- 객체가 상속받는 내장 메서드는 열거 불가이지만, 추가한 자체 프로퍼티는 기본적으로 열거 가능하다.

```javascript
let o = {x: 1, y: 2, z: 3}
o.propertyIsEnumerable("tostirng") // false
for(let p in o)
    console.log(p) // x,y,z만 출력

for(let p in o)
    if ( !o.propertyIsEnumerable(p)) continue // 상속된 프로퍼티는 건너 뛴다. 

for(let p in o)
    if( typeof o[p] === "function") continue // 메서드는 건너 뛴다.
```
- 상속된 프로퍼티가 열거되는 것을 막을 때는 루프 바디 안에서 명시적으로 체크한다.

</br>

- 객체의 프로퍼티 이름을 배열에 저장해서 for/of 루프를 사용하는 것이 쉬을 때가 많다.
- 프로퍼티 이름을 배열로 저장할 수 있는 함수는 

    >
    - Object.keys() - 열거 불가 프로퍼티, 상속된 프로퍼티, 이름이 심벌인 프로퍼티는 반환하지 않는다.
    - Object.getOwnPropertyNames() - 이름이 문자열이기만 하면 열거 불가여도 반환.
    - Object.getOwnPropertySymbols() - 이름이 심벌이면 열거 불가여도 반환
    - Reflect.ownKeys() - 문자열인지 심벌인지 열거 불가인지 가능인지 구분하지 않고 프로퍼티 이름을 전부 반환
    >
</br>

## 5.객체 확장
```javascript
let target = {x: 1}, source = {y: 2, z: 3};
for(let key of Object.keys (source)) {
    target [key] = source [key];
}
target //=> {x: 1, y: 2, z: 3}
```
- 다른 객체에 복사하는 가장 쉬운 방법.
- ES6에서 복사 기능을 Object.assign()이라는 이름으로 js코어에 도입.
  
</br>

- Object.assign() 은 인자로 두 개 이상의 객체를 받는다.
- 첫 번째는 수정해서 반환할 대상 객체, 두 번째 이후 인자는 소스 객체로 수정하지 않는다.
- 각 소스 객체의 열거 가능한 자체 프로퍼티(이름이 심벌인 것을 포함)를 대상 객체에 복사.
- 같은 이름의 프로피티가 있으면 계속해서 덮어 쓴다.
- 소스 객체에 게터 메서드가 있거나 대상 객체에 세터 메서드가 있다면 호출이 되긴 하지만 메서드 자체를 복사하지 않는다.

</br>

- 객체에서 다른 객체로 복사하는 이유 중 하나는 소스 객체에 기본 값을 정의해 두고 대상 객체에 프로퍼티가 존재하지 않는다면 복사해서 사용하려는 목적.

```javascript
o = Object.assing({}, defaults, o) // o를 전부 defaults로 덮어 쓴다.
```

- 위는 잘못된 예시. 새 객체를 생성하고 기본 값을 복사, 이 기본 값을 o에 덮어 쓴다.
```javascript
o = Object.assign({}, defaults, o)
```
- 위 방법은 다음과 같이 사용 가능.

```javascript
o = {...defaults, ...o}
```

</br>

- Object.assign()을 변형해서 객체를 새로 만들어 복사해야 하는 부담을 줄일 수 있다.
- 다음 코드는 존재하지 않는 프로퍼티만 복사하도록 만든다.

```javascript
//Object.assign()과 마찬가지이지만 기존 프로퍼티는 덮어 쓴다.
//심벌 프로퍼티를 복사하지 않는 것은 똑같다.
function merge(target, ...sources) {
    for(let source of sources) {
        for(let key of Object.keys (source)) {
            if (!(key in target)){ // Object.assign()과 다른 점입니다.
                target [key] = source [key];
            }
        }
    }
    return target;
}
Object.assign({x: 1}, {x: 2, y: 2}, {y: 3, 2: 4}) // => {x: 2, y: 3, 2: 4}
merge({x: 1}, {x: 2, y: 2}, {y: 3, z: 4}) //=> {x: 1, y: 2, z: 4}
```

</br>

## 6.객체 직렬화
- 객체 직렬화(serialize)는 객체를 문자열로 변환하는 작업.
- 이 문자열은 나중에 다시 객체로 되돌릴 수 있다.
- JSON.stringify(), JSON.parse()는 js 객체를 직렬화하고 되돌리는 함수.
- JSON은 '자바스크립트 객체 표기법'의 약어 이다.

</br>

## 7.객체 리터럴 문법
- 객체 리터럴 안에서 분해 연산자 ...를 사용해 기존 객체의 프로퍼티를 새 객체에 복사할 수 있다.

```javascript
let position= {x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };
rect.x + rect.y + rect. width + rect.height 11 => 175
```
- ... 연산자는 분해 연산자라고 부르긴 하지만, 진정한 연산자라고 볼 수 없다.
- 객체 리터럴 안에서만 사용할 수 있는 특별한 문법이다.
- 점 세개를 다른 용도로 사용할 수 있지만, 이런 식으로 객체를 분해하는 용도로 사용하는 것은 객체 리터럴이 유일하다.

```javascript
let o = { x: 1 };
let p = {x: 0, ...o };
p.x  // => 1: 객체 0의 값이 초깃값을 덮어 씁니다.
let g = { ...o, x: 2 };
q.x // => 2: 2라는 값이 o의 기존 값을 덮어 씁니다.
```
- 분해되는 객체와 프로퍼티를 받는 객체 둘 다 같은 이름의 프로퍼티를 갖는다면 해당 프로퍼티의 값은 마지막에 오는 값이 된다.
```javascript
let o = Object. create({x; 1}); // o는 프로퍼티 x를 상속합니다.
let p = { ...o };
p.x //=> undefined
```
- 분해 연산자는 자체 프로퍼티만 분해할 뿐 상속된 프로퍼티에는 적용되지 않는다.

</br>

- 분해 연산자는 js 인터프리터가 상당히 많은 일을 하게 만든다.
- 객체에 프로퍼티 n개가 있으면 이 객체를 다른 객체로 분해하는 작업은 O(n)이다.
- 따라서 분해 연산자를 루프나 재귀 함수에 넣는다면 n이 커질수록 비효율적인 O(p^2) 알고리즘을 쓰게 되는 것이다.

</br>

- 접근자 프로퍼티. 접근자 프로퍼티의 본질은 함수.
- 이 함수는 값을 획득(get)하고 설정(set)하는 역할을 담당한다. 그런데 외부 코드에서는 함수가 아닌 일반적인 프로퍼티처럼 보인다.
  

```javascript
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

alert(user.fullName); // John Smith
```

```javascript
let user = {
  get fullName() {
    return `...`;
  }
};

user.fullName = "Test"; // Error (프로퍼티에 getter 메서드만 있어서 에러가 발생합니다.)
```

```javascript
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// 주어진 값을 사용해 set fullName이 실행됩니다.
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper
```

- 게터 메서드 하나만 있다면 읽기 전용 프로퍼티.
- 세터 메서드 하나만 있다면 쓰기 전용 프로퍼티, 값을 읽으려고 하면 항상 undefined로 평가.
- 둘 다 존재 하면 읽기와 쓰기가 가능.

```javascript
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("입력하신 값이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요.");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
alert(user.name); // Pete

user.name = ""; // 너무 짧은 이름을 할당하려 함
```
- getter와 setter를 ‘실제’ 프로퍼티 값을 감싸는 래퍼(wrapper)처럼 사용하면, 프로퍼티 값을 원하는 대로 통제할 수 있다.

- 아래 예시에선 name을 위한 setter를 만들어 user의 이름이 너무 짧아지는 걸 방지하고 있다. 실제 값은 별도의 프로퍼티 _name에 저장된다.