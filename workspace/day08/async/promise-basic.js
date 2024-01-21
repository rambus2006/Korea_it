//promise  타입 :
//callback 함수를 전달해서, 성공인지 실패인지 받을 수 있다.

const promise = new Promise(function (resolve, reject) {
  const check = false;
  if (check) {
    resolve("성공");
  } else {
    reject("실패!");
  }
}); //객체 생성자 = 프로토타입, new  + 대문자로 시작 하면 프로토타입

promise
  //성공일 떄 then 이 관리
  .then((result) => {
    console.log(result);
  })
  //실패일 때 reject 가 관리
  .catch((result) => {
    console.log(result);
  });

//동기와 비동기
/*
동기와 비동기는 다르다. 
동기는 좌->우 , 위-> 아래로 읽힌다. 
비동기 안에 동기식 흐름이 있다. 
*/
