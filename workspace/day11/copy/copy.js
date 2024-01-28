// 얕은 복사와 깊은 복사
const animals = {
  cat: "야옹이",
  dog: "멍뭉이",
  cow: "얼룩이",
  tiger: "호랭이",
};

//animals를 참조하는 변수
// const animals2 = animals;
// animals2.dog = "포카리";

//얕은 복사(1dep복사) : 서로 다른 객체를 참조하게 만드는 방법
const animals3 = Object.assign({}, animals); //{} : animals를 참조해서 객체로 만든다는 의미
animals3.dog = "포카리";

console.log(animals);
console.log(animals3);
