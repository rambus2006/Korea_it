//3가지 서비스를 만든다.
//db 유저 정보를 저장
//이메일 전송
// 성공 메시지를 출력

const DB = [];

const saveDB = (user, callback) => {
  DB.push(user);
  console.log(`save${user.name} to DB`);
  return callback(user);
};
const sendEmail = (user, callback) => {
  console.log(`send to ${user.email}`);
  return callback(user);
};
const getResult = (user) => {
  return console.log(`seccess register ${user.name}`);
};
const register = (user) => {
  return saveDB(user, (user) => {
    return sendEmail(user, (user) => {
      return getResult(user);
    });
  });
};

const user = {
  name: "방민서",
  email: "codefuling@gmail.com",
};
register(user);
