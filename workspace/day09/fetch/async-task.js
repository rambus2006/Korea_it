// fetch("https://jsonplaceholder.typicode.com/posts") //json형식, 비동기
//   .then((response) => response.json()) //.json() : json형식을 -> 문자열로 바꾼다.
//   .then(console.log)
//   .catch(console.log);

async function printZipcode() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const datas = await response.json(); //파싱 작업
  //await 는 동기의 흐름을 타고 가도록 기다린 것이다.데이터 자체를 동기로 바꾼 것. 그래서 response, datas 는 동기라서 console.log를 사용할 수 있다.
  const zipcode = datas.map((data) => data.address.zipcode);
  console.log(zipcode);
}
printZipcode();

/*
const printZipcode = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json();
    const zipcodes = users.map((user)=>user.address.zipcode);
    console.log(zipcodes)
}
printZipcode()
 */
