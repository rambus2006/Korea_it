//구조 분해 할당, 구조 분해 문법
// let arr = [1, 2, 3, 4];
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// let four = arr[3];

// let [one, two, three, four] = [0, 1, 2, 3];
// console.log(one, two, three, four);

const animals = {
  cat: "야옹이",
  dog: "멍뭉이",
  cow: "얼룩이",
  tiger: "호랭이",
};
//비구조화 할당 : 선언한 것에서 가져온다.
let { cat, cow } = animals; //키값을 가져올 수 있다.
console.log(cat, cow);

//이해 안되는 부분은 메일로
