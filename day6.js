//Problem :
// program to return a string in alphabetical order
//Solution :
// const alphabatical_string = (str) => str.split("").sort().join("");
// console.log(alphabatical_string("webmaster"));

//Problem :
// program to count the number of vowels in the string
//Solution :
const alphabatical_string = (str) => str.match(/[aeiou]/gi).length;
console.log(alphabatical_string("Samrat"));
