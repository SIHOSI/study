// 아래 결과와 같이 나오도록 아래 함수를 완성해 보세요.

function shallowCopy(obj) {
    // Object.assign 또는 spread syntax를 이용해 보세요.
    // 여기에 코드를 작성하세요.
    // let copiedObj = Object.assign({}, obj);
    let copiedObj = { ...obj };
    return copiedObj;
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

const shallowCopied = shallowCopy(obj);

console.log(obj === shallowCopied); // 출력 결과: false
console.log(obj.age === shallowCopied.age); // 출력 결과: true
console.log(obj.address === shallowCopied.address); // 출력 결과: true
console.log(obj.address.city === shallowCopied.address.city); // 출력 결과: true
console.log(obj.address.details === shallowCopied.address.details); // 출력 결과: true
