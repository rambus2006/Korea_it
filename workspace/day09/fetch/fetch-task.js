//유저의 정보가 담겨있는 홈페이지가 있음
//알고리즘
//fetch()
//json형식을 -> 문자열로 바꾸는 파싱 작업이 필요하다.
//then() 쓴다.
//catch() 사영한다.

//배열로 접근해서 가져온다.
//출력해야 한다.
fetch("https://jsonplaceholder.typicode.com/users") //json형식, 비동기
  .then((response) => {
    //가져오지 못할 때
    if (!response.ok) {
      throw new Error(`response: ${response.status}`);
    }
    response.json(); // 얘가 받아서 파싱 작업 후 전체를 다음줄로 넘긴다.
  })

  .then((users) => {
    if (!users || users.length == 0) {
      throw new Error(`none users`);
    }
    return users.map((user) => user.address.zipcode);
  })
  .then(console.log) //.json() : json형식을 -> 문자열로 바꾼다.
  .catch((error) => {
    console.error(error);
    console.log("error");
  });
