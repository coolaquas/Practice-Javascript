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
const amountTocoins = (amount, coins) => {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      left = amount - coins[0];
      return [coins[0]].concat(amountTocoins(left, coins));
    } else {
      coins.shift();
      return amountTocoins(amount, coins);
    }
  }
};
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
