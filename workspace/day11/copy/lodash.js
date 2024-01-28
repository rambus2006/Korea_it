//npm npx
const _ = require("lodash");
const animals = {
  cat: "냥냥이",
  dog: "흑구",
  cow: "점박이",
  tiger: "흥이",
};

const newAnimals = _.cloneDeep(animals); //복사할 object를 매개변수로 넘겨준다.
newAnimals.cat = "냥편이";
console.log(newAnimals);
