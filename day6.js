//Problem :
// program to return a string in alphabetical order
//Solution :
// const alphabatical_string = (str) => str.split("").sort().join("");
// console.log(alphabatical_string("webmaster"));

//Problem :
// program to count the number of vowels in the string
//Solution :
// const alphabatical_string = (str) => str.match(/[aeiou]/gi).length;
// console.log(alphabatical_string("Samrat"));

//Problem :
// program to convert an amount into notes and coins
//Solution :
// const amountTocoins = (amount, coins = [25, 10, 5, 2, 1]) => {
//   const totalCoins = [];
//   for (let i = 0; i < coins.length; i++) {
//     const thisCoinNum = Math.floor(amount / coins[i]);
//     for (let y = 0; y < thisCoinNum; y++) {
//       totalCoins.push(coins[i]);
//     }
//     amount -= coins[i] * thisCoinNum;
//   }
//   return totalCoins;
// };
// console.log(amountTocoins(1150, [2000, 500, 100, 50, 20, 10, 5, 1]));

//Problem :
// program to extract unique charecter from a string
//Solution :
// const alphabatical_string = (str) =>
//   str
//     .split("")
//     .filter((item, index, arr) => arr.slice(index + 1).indexOf(item) === -1);
// const alphabatical_string = (str) => [...new Set(str.split(""))];
// console.log(alphabatical_string("abcccdd"));

//Problem :
// program to find the first non repeatated charecter
//Solution :
const alphabatical_string = (str) =>
  str
    .split("")
    .filter((x) => str.split("").filter((ch) => ch === x).length === 1)[0];
console.log(alphabatical_string("abacccdde"));
