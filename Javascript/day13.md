# express put, patch의 차이

put과 patch 모두 CRUD의 UPDATING을 맡고 있다.

둘의 차이점은
- patch는 기존 데이터의 부분 수정.
- put은 기존의 데이터를 새로운 데이터로 덮어씌운다.

예를 들어

```java
{name: 'john', age: 30, job: 'gamer'}

// put
{job: 'police'}

//patch
{name: 'john', age: 30, job: 'police'}
```