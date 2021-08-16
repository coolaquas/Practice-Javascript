// 1)Thinkful-Number Drills
const guessBlue = (bst, rst, bpl, rpl) => {
  const numRemianingBlueMarble = bst - bpl;
  const numRemianingRedMarble = rst - rpl;
  return (
    numRemianingBlueMarble / (numRemianingBlueMarble + numRemianingRedMarble)
  );
};
// console.log(guessBlue(12, 18, 4, 6));

// 2)first Non Consicutive Number
const firstNonConsicutive = (arr) =>
  arr.filter((x, i) => x - arr[i - 1] > 1).length === 0
    ? null
    : arr.filter((x, i) => x - arr[i - 1] > 1)[0];
// console.log(firstNonConsicutive([1, 2, 3, 4, 6, 7, 8]));

// 2)Will you make it
const zeroFule = (desttopump, mpg, fuelLeft) => fuelLeft * mpg >= desttopump;

console.log(zeroFule(100, 50, 2));
