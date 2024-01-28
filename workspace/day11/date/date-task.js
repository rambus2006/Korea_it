//몇분전, 몇일 전 할 때 제작하는 코드
const timeForToday = (datetime) => {
  const today = new Date(); //오늘
  const date = new Date(datetime); //사용자가 찍힌 시간

  let gap = Math.floor((today.getTime() - date.getTime()) / 1000 / 60); //뺀 값을 밀리터리로 나누고, 초단위를 없애기 위해 60을 나눈다.

  if (gap < 1) {
    return "방금 전";
  }
  if (gap < 60) {
    return `${gap}분 전`;
  }
  gap = Math.floor(gap / 60);

  //24(12시)를 넘지 않는다면 하루가 지난 것이 아니다.
  if (gap < 24) {
    return `${gap}시간 전`;
  }
  //하루 단위로 바꾸기(일단위 )
  gap = Math.floor(gap / 24);
  //31일까지 있으니까 32일 전까지는 '일 전'
  if (gap < 32) {
    return `${gap}일 전`;
  }
  //월 단위
  gap = Math.floor(gap / 31);
  //1년은 12까지 있으니까 13 전까지는 개월 전
  if (gap / 13) {
    return `${gap}개월 전`;
  }
  //년단위
  gap = Math.floor(gap / 12);
  return `${gap}년 전`;
};
console.log(timeForToday("2024-01-27 12:25:00"));
