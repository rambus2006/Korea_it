//모듈 이름
const file = require("fs");

const user = new Object();
user.name = "유저1";
user.id = "ksh1234";
user.email = "bangminseo50@gmail.com";
user.password = "1234";
console.log(user);

//비동기부터
// file.writerFile('경로','내용','인코딩','콜백함수)
// json.stringify() 객체를  -> 제이슨으로
// json.parse() 제이슨을 -> 객체로
// const userJSON = JSON.stringify(user); //
// file.writeFile("./user.json", userJSON, "utf-8", (error) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log("출력완료!");
//   }
// }); //현재 경로면 생략도 가능하지만 헷갈림을 방지하기 위해

let user; //json데이터를 가져와 담을 변수 선언
//가져오기
//file.readFile('경로','인코딩','콜백함수')
file.readFile("./user.json", "utf-8", (error, content) => {
  if (error) {
    console.error(error);
  } else {
    user = JSON.parse(content);
  }
  console.log(user);
});
