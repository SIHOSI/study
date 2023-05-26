// 전통주 시음회가 있다고 가정합니다. 입장 티켓을 소유하고 나이 19세 이상이어먄 입장이 가능합니다.
// 2가지 조건을 모두 만족하는 지 검사하는 아래 함수를 완성해 보세요.

function checkAgeAndTicket(age, hasTicket) {
    // "Pass" 또는 "Fail" 을 반환해야 합니다.
    return age >= 19 && hasTicket ? 'Pass' : 'Fail';
}

const result1 = checkAgeAndTicket(19, true);
console.log(result1); // "Pass"

const result2 = checkAgeAndTicket(17, true);
console.log(result2); // "Fail"
