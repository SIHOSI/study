# nodemon

코드저장 할 때마다 서버를 껐다가 재실행하는 귀찮은 작업을 자동화 해준다.

```
npm install --save-dev nodemon
```

--save-dev 옵션을 사용할 시

```
"devDependencies": {
    "nodemon": "^2.0.13"
}
```

실제 릴리즈시에 필요없는 모듈일 경우 --save-dev 로 devDependencies 에 넣어준다.

>그냥 ```npm install```이라고 쓰면 devDependencies, Dependencies 에 모든 모듀을 설치한다.

그 다음 상단에 scripts 부분에
```
"scripts": {
    "start": "node ./src/index.js",
    "dev": "nodemon ./src/index.js"
},
```
이런식으로 넣어주면 ```npm run dev``` 이런 식으로 실행 가능하다.

저장을 누를 때마다 자동으로 재실행 되니까 매우 편해진다.