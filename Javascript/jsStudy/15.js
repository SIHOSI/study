// 호텔의 예약 확인 시스템의 함수라고 가정합니다.
// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

function confirmReservation(user) {
    // 여기에 user 객체를 구조 분해 할당 하세요.
    const { name, roomType, date: firstDate } = user;
    return `${name} 고객님의 ${roomType}룸 입실날짜는 ${firstDate} 입니다.`;
}

const userInfo = {
    name: 'James',
    roomType: 'Deluxe',
    date: '2023-05-30',
};
const result = confirmReservation(userInfo);
console.log(result);
// 출력 결과: 'James 고객님의 Deluxe룸 입실날짜는 2023-05-30 입니다.'
