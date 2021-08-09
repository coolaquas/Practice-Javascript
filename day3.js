//Problem :
// program to create a new string from a given string taking the first 3 charactersand the last 3 charactersof a string and adding them togather. if length < 3 return original
//Solution :
// const first_and_last_three = (str) =>
//   str.length < 3 ? str : `${str.slice(0, 3)}${str.slice(-3)}`;
// console.log(first_and_last_three("Test"));

//Problem :
// program to extract the first half of a string of even length
//Solution :
// const half_string = (str) =>
//   str.length % 2 !== 0
//     ? "Please enter a even number string"
//     : str.slice(0, str.length / 2);
// console.log(half_string("I am Samrat Mallick."));

//Problem :
// program to concat two strings except their first charecter
//Solution :
// const concat_string = (str1, str2) => str1.slice(1).concat(str2.slice(1));
// console.log(concat_string("Samrat", "Mallick"));

//Problem :
// program to findout given two numbers which one is near to 100
//Solution :
// const near_100 = (num1, num2) =>
//   Math.abs(100 - num1) <= Math.abs(100 - num2) ? num1 : num2;
// console.log(near_100(110, 90));

//Problem :
// program to check a given string contains 2 to 4 occurrences of a specified charecter
//Solution :
// const check_occurance = (str, char) =>
//   countChars(str, char) >= 2 && countChars(str, char) <= 4;
// const countChars = (str, char) =>
//   str.split("").filter((ch) => ch === char).length;

// console.log(check_occurance("mom", "m"));
