//프로미스는 자바스크립트 비동기 처리에 사용되는 객체 Promise

const DB = [];

// 사용자 정보를 데이터베이스에 추가할거야
const saveDB = (user) => {
  const beforeLength = DB.length;
  const afterLength = DB.push(user);
  console.log(`save to ${user} to DB`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (beforeLength < afterLength) {
        resolve(user);
      } else {
        reject(new Error("save to DB"));
      }
      console.log("saveDB() 3초 걸림");
    }, 3000);
  });
};

const sendEmail = (user) => {
  console.log(`email to ${user.emial}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user);
      console.log("sendEmail 2초 걸림");
    }, 2000);
  });
};

const getResult = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`success register ${user.name}`);
      console.log("getResult 1초 걸림");
    }, 1000);
  });
};

//user는 비동기
// const register = (user) => {
//   const result = saveDB(user).then(sendEmail).then(getResult); //비동기를 변수에 담음
// //   console.log(result); console.log는 동기, result 는 비동기. 비동기를 동기로 바꿔주려면 then을 써야 한다
// //동기와 비동기의 흐름이 만나 둘 중 하나를 바꿔야 한다.
// //비동기 result 를 동기로 바꿔준 것이다. (참조형 )
//   result.then(console.log)
// };

//순서가 상관이 없을 때
// 먼저 끝나는 것부터 끝내게 하고 싶을 때 비동기 안에 있는 동기의 흐름을 비동기로 바꾼다.
//Promis.All
const register = (user) => {
  const resultAsync = Promise.all([
    saveDB(user),
    sendEmail(user),
    getResult(user),
  ]);
  resultAsync.then(console.log);
};

const user = {
  name: "방민서",
  email: "bangminseo50@gmail.com",
};

register(user);
