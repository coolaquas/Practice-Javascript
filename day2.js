//Problem :
// program to check to number and return true if one of the number is 100 or if the sum of the two number is 100
//Solution :
// const check100 = (a, b) => {
//   if (a === 100 || b === 100 || a + b === 100) {
//     return true;
//   }
//   return false;
// };
// console.log(check100(50, 50));

//Problem :
// program to get the extension of the filename
//Solution :
// const getFileExtention = (file) => file.split(".")[file.split(".").length - 1];
// console.log(getFileExtention("teet.js"));

//Problem :
// program to replace every character in a given string with the charecter following in it the alphabet
//Solution :
// const getFileExtention = (str) =>
//   str
//     .split("")
//     .map((char) =>
//       String.fromCharCode(
//         char.charCodeAt(0) === 122 //for z
//           ? 97
//           : char.charCodeAt(0) === 90 // for Z
//           ? 65
//           : char.charCodeAt(0) + 1
//       )
//     )
//     .join("");
// console.log(getFileExtention("abcz"));

//Problem :
// program to get the current date in mm-dd-yyyy, mm/dd/yyyy,dd/mm/yyyy
//Solution :
// const getDate = (date = new Date()) => {
//   const days = date.getDate() + 1;
//   const months = date.getMonth() + 1;
//   const years = date.getFullYear();
//   return `${days < 9 ? "0" + days : days}/${
//     months < 9 ? "0" + months : months
//   }/${years}`;
// };
// console.log(getDate());

//Problem :
// program to create a new string adding "New!" in the front of a giving string.If the given string begins with "New!" already then return the original
//Solution :
// const stringManipulation = (str) =>
//   str.split(" ")[0] === "New!" ? str : "New! " + str;
// const stringManipulation = (str) =>
//   str.indexOf("New!") === 0 ? str : "New! " + str;
// console.log(stringManipulation("New! abcdsss Testing string"));
