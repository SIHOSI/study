```javascript
form.addEventListener('submit', (text) => {
    text.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(
            `https://api.themoviedb.org/3/search/movie?api_key=e2124fff88b3cf85df566d38b1f8ae8f&query=${searchTerm}&language=ko`
        );
    } else {
        getMovies(
            'https://api.themoviedb.org/3/movie/popular?api_key=e2124fff88b3cf85df566d38b1f8ae8f&language=ko'
        );
    }
});
```

- **text.preventDefault()를 쓰는 이유**
    - event.preventDefault() 는 기본동작을 취소하는 메소드.
    - form이 제출될 때 실행되는 기본동작인 페이지 새로고침을 취소하기 위해서.
    > form의 기본동작은 form 데이터를 서버로 전송하고 페이지를 로드하여 결과를 표시한다.