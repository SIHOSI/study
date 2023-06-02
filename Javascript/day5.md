1.html, css 기본 뼈대 작성

    -검색창 input , 영화 정보는 웹종반에서 했던 카드 형식으로/ css 는 2순위
    
    -tmdb에서 영화 정보 불러오기

```javascript
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer e2124fff88b3cf85df566d38b1f8ae8f'
    }
    };

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
.   catch(err => console.error(err));
```
```javascript
    const getMovies = (API, options) => {
    fetch(API, options) // 함수 실행시 API주소값(본인 api키 포함) , 위의 옵션을 전달인자로)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.results); // Array안에 영화정보 객체들
            showMovies(data.results); // 영화 정보 출력
        });
    };
```

        
1. 이미지 불러오고 카드형식으로 출력
     - 이미지는 image url 은 base url + poster path(위 data.results 에 있음) 로 구성.
     result 객체안의 정보들을 변수에 저장하고 웹종반에서 했던것처럼 foreach 사용,
     ` `안에 ${ 변수 } 로 카드 덮어씌우기


3. 이미지 클릭시 영화 아이디값 alert 이벤트 추가
     - <div class="overview" onclick="imageClick(${id})">
     (2번에서 카드형식으로 출력할 때 추가해주면 좋았음!)
     다음 함수로 불러와 alert 실행


검색 시 특정 영화 정보만 불러와 화면에 출력
    - form.eventlistner('submit', (text) => {
        다시 영화 정보 불러오기 tmdbAPI guide에 /search 항목 참조
    })