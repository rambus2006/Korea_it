//ES6문법
// 배열이나 객체 //1depth의 복사
const animals = {
  cat: "야옹이",
  dog: "멍뭉이",
  cow: "얼룩이",
  tiger: "호랭이",
};
const animals2 = { ...animals, camel: "낙타" }; //...은 spread 문법
animals2.dog = "백구";

// console.log(animals);
// console.log(animals2);
//배열을 복사할 수는 있으나 스프레드 문법은 배열에 사용하는 것을 지양하자 ->배열로 접근할 때 배열의 구조가 꼬이기 때문.객체에서 쓰자
//여러개 배열을 하나로 합칠 때도 사용할 수 있다.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

// const newArr = [...arr1, ...arr2, ...arr3];
// console.log(newArr); //각각 접근해서 합칠 수 있다.
// console.log(...arr1);

const newArr2 = [arr1, arr2, arr3];

//ES10
//flat() 메서드
console.log(newArr2.flat()); //안에 deps가 들어간다.(다차원 배열 안에 깊이)
