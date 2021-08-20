//Add up the num1s from a aSingle num1
//Solution
const AddUp = (num1) => (num1 === 1 ? 1 : num1 + AddUp(num1 - 1));
console.log(AddUp(4));

//MatchStick house problem
//Solution
const MatchStick = (num) => 5 * num + 1;
console.log(MatchStick(4));
