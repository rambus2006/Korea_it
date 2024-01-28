// * 비동기 코드에서 발생한 예외를 동기 코드에서 핸들링할 수 없다.
setTimeout(() => {
  try {
    badRunTimeCode;
    console.log("오류가 발생할 수 있는 코드");
  } catch (error) {
    console.log("에러 핸들링", error);
  }
}, 1000);
