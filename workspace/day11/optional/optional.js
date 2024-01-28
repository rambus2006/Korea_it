//객체나 데이터에 값이 있을지 없을지 모를 때 써야 한다.
/*
주의할 점 
- 옵셔널 체이닝은 논리상 반드시 있어야 하지만 필수값이 아니기 떄문에 
  남용해서 사용해서는 안된다. 
*/
const movies = {
  name: "오펜하이머",
  detail: {
    price: "20000",
    date: "20240128",
  },
};
const movies2 = {
  name: "웡카",
  detail: {
    date: "20240228",
  },
};

const printMoviePrice = (movie) => {
  console.log(movie?.detail?.price || 0);
};

printMoviePrice(movies2);
