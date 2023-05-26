// 아래 결과와 같이 나오도록 아래 함수를 완성해 보세요.

function deepCopy(obj) {
    // 모든 depth 까지 재귀적으로 탐색하여 복사한 객체를 return 하세요.
    // if문과 typeof 키워드를 이용해 보세요.
    const clonedObj = {};
    for (const key in obj) {
        // 이 부분을 완성해 보세요.
        if (typeof obj[key] === 'object') clonedObj[key] = deepCopy(obj[key]);
        else clonedObj[key] = obj[key];
    }
    return clonedObj;
}

const obj = {
    name: 'John',
    age: 30,
    address: {
        city: 'Seoul',
        country: 'South Korea',
        details: ['도로명주소', '지번주소'],
    },
};

const deepCopied = deepCopy(obj);
console.log(obj === deepCopied); // 출력 결과: false
console.log(obj.age === deepCopied.age); // 출력 결과: true
console.log(obj.address === deepCopied.address); // 출력 결과: false
console.log(obj.address.city === deepCopied.address.city); // 출력 결과: true
console.log(obj.address.details === deepCopied.address.details); // 출력 결과: false
