```javascript
const movies = document.querySelectorAll('.movie');
    // console.log(movies); // movie명을 가진 모든 div를 Nodelist형태로 movies에 저장.

    movies.forEach((item) => {
        // console.log(item); // div class=movie 안에 있는 모든 요소들. 추가된 20개의 영화들의 html 양식
        item.addEventListener('click', () => {
            item.classList.toggle('active'); // 클릭하면 active클래스를 추가, 이미 존재한다면 제거, overview의 내용을 활성/비활성 상태로 전환.
        });
    });
```

db에 저장된 영화정보를 카드형식으로 페이지에 출력할때
</br> 각 카드에 클릭 이벤트를 넣어 주고 싶었다.
</br> getElementByID 를 써서 배열에 저장해도 됐지만
</br> 이번에는 querySelectorAll을 써봤다.
</br> movie 클래스 이름을 가진 모든 요소를 가져와서 Nodelist형태로 반환한다.
</br> Nodelist 안에 각종 정보들이 많았는데 솔직히 말해 너무 많아서 뭐가 뭔지 모르겠다.
</br> 그 후 forEach 로 Nodelist의 index 0 부터 차례대로 가져와 처리한다.
</br> 클릭 이벤트로 item.classList.toggle('active') 넣어줬다.
</br> 클래스명 active를 생성하고 이미 존재하면 삭제하는 기능이다. 이 기능으로
</br> 클릭 시 상세정보를 화면에 보여주고 사라지게 만들 수 있다.