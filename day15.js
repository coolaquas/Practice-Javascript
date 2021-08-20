//Add up the num1s from a aSingle num1
//Solution
const AddUp = (num1) => (num1 === 1 ? 1 : num1 + AddUp(num1 - 1));
console.log(AddUp(6, 23));

//MatchStick house problem
//Solution
const MatchStick = (num) => 5 * num + 1;
console.log(MatchStick(6, 23));

//Bitwise Operator Example
//Solution
const bitWiseAnd = (num1 = 0, num2 = 0) => {
  const n1 = num1.toString(2).padStart(8, "0");
  const n2 = num2.toString(2).padStart(8, "0");
  const result = new Array(n1.length).fill(0);
  return result
    .map((x, i) => (n1[i] === "1" && n2[i] === "1" ? 1 : x))
    .join("");
};
console.log(bitWiseAnd(6, 23));

const bitWiseOR = (num1 = 0, num2 = 0) => {
  const n1 = num1.toString(2).padStart(8, "0");
  const n2 = num2.toString(2).padStart(8, "0");
  const result = new Array(n1.length).fill(0);
  return result
    .map((x, i) => (n1[i] === "1" || n2[i] === "1" ? 1 : x))
    .join("");
};
console.log(bitWiseOR(6, 23));
const bitWiseXOR = (num1 = 0, num2 = 0) => {
  const n1 = num1.toString(2).padStart(8, "0");
  const n2 = num2.toString(2).padStart(8, "0");
  const result = new Array(n1.length).fill(0);
  return result
    .map((x, i) =>
      (n1[i] === "1" || n2[i] === "1") && !(n1[i] === "1" && n2[i] === "1")
        ? 1
        : x
    )
    .join("");
};

console.log(bitWiseXOR(6, 23));
