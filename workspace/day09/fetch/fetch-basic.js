//여러분들의 첫 데이터 통신
//fetch(url,options)

//요청
fetch("https://jsonplaceholder.typicode.com/posts") //json형식, 비동기
  .then((response) => response.json()) //.json() : json형식을 -> 문자열로 바꾼다.
  .then(console.log)
  .catch(console.log);
