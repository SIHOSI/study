// 아래와 같이 출력되도록 클래스를 완성해 보세요.
// 코드 작성하는 공간이 2 곳입니다.

class Movie {
    constructor(title, director, releaseYear) {
        // constructor 를 완성해 보세요
        // 속성은 title, director, releaseYear 를 갖습니다.
        this._title = title;
        this._director = director;
        this._releaseYear = releaseYear;
    }

    // printMovie 메소드를 완성해 보세요.
    printMovie() {
        // 여기에 코드를 작성하세요.
        return `영화 제목은 {$this._title}, 감독은 {$this._diretor}, 개봉연도는 {$this._releaseYear}`;
    }

    // getter 속성으로 title 을 완성해 보세요.
    get title() {
        return this._title;
    }

    // setter 속성으로 newTitle을 매개변수로 받는 title 재할당문을 완성해보세요.
    // newTitle 매개변수에 대해 2가지 유효성 검사가 선행되어야 합니다.
    // 1. type 이 string 이 아니면 throw new Error(`영화제목의 data type은 string 이어야 합니다. 현재 타입: ${typeof newTitle}`);
    // 2. newTitle 이 빈문자열이면 throw new Error(`한 글자 이상의 문자열을 할당해 줘야 합니다.`);
    set title(newTitle) {
        // 여기에 코드를 작성하세요.
        if (typeof newTitle !== 'string')
            throw new Error(
                `영화제목의 data type은 string 이어야 합니다. 현재 타입: ${typeof newTitle}`
            );
        else if (newTitle === '')
            throw new Error(`한 글자 이상의 문자열을 할당해 줘야 합니다.`);

        this._title = newTitle;
    }
}

const myMovie = new Movie('굿 윌 헌팅', '구스 반 산트', 1997);

myMovie.printMovie();
// 출력 결과: '영화 제목은 굿 윌 헌팅, 감독은 구스 반 산트, 개봉연도는 1997 입니다.'

console.log(myMovie.title); // 출력 결과: '굿 윌 헌팅'
myMovie.title = 'Good Will Hunting';
console.log(myMovie.title); // 출력 결과: 'Good Will Hunting'
