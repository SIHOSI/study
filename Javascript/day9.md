```html
<nav>
    <div class="tab-item" id="popularTab">Popular</div>
    <div class="tab-item" id="nowplayingTab">Now Playing</div>
    <div class="tab-item" id="toprateTab">Top Rated</div>
    <div class="tab-item" id="upcomingTab">Upcoming</div>
</nav>
```


```javascript
const toprateTab = document.getElementById('toprateTab');

toprateTab.addEventListener('click', () => {
    getMovies(API_TOP + 'api_key=' + API_KEY + '&language=ko');
});
```

# nav

- 네비게이션 역할을 담당하는 태그
- 웹사이트에서 네비게이션은 메뉴등을 의미
- 보통 `<li>`, `<ul>` 로 감싸 이용한다고 하는데 나는 그냥 div를 사용했다.
- 메뉴 이름 클릭 시 해당되는 정보를 출력한다.

# 이벤트추가

- document.getElementById('toprateTab') 로 toprateTab div를 불러와 toprateTab 변수에 저장.
- toprateTab 변수에 이벤트를 추가해준다.
- 클릭 이벤트가 일어나면 getMoives 함수를 실행하고 toprate 에 해당되는 API 주소를 인자로 전달한다.
