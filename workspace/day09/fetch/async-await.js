// fetch("https://jsonplaceholder.typicode.com/posts") //json형식, 비동기
//   .then((response) => response.json()) //.json() : json형식을 -> 문자열로 바꾼다.
//   .then(console.log)
//   .catch(console.log)

// asynce, await ES8(2017)
async function printZicode() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const datas = await response.json(); //stringfy 문자열로 바꾸는 작업
  const titles = datas.map((data) => data.title);
  console.log(titles);
}
printZicode();
