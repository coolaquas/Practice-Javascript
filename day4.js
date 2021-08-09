//Problem :
// program to find the number of even digits in an array of integers
//Solution :
// const find_even_digits = (arr) => arr.filter((num) => num % 2 === 0 && num !== 0).length;
// console.log(find_even_digits([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//Problem :
// program to find the number of even values up to a given number
//Solution :
// const find_even_value = (limit) =>
//   [...Array(limit + 1).keys()].filter((num) => num % 2 === 0 && num !== 0)
//     .length;
// console.log(find_even_value(10));

//Problem :
// program to find if the fiven array is sorted in assending order
//Solution :
// const check_sort = (arr) => {
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > arr[index + 1]) return false;
//   }
//   return true;
// };
// console.log(check_sort(["a", "b", "c"]));

//Problem :
// program to get the largest even number from an array of integers
//Solution :
// const get_largest_even_digits = (arr) =>
//   Math.max(...arr.filter((e) => e % 2 === 0));
// console.log(get_largest_even_digits([1, 2, 3, 4, 5, 6, 7, 99]));

//Problem :
// program to replace the first digit of the string with $
//Solution :
// const replace_first_string = (str) => str.replace(/[0-9]/, "$");
// const replace_first_string = (str) => str.replace(/\d/, "$");
// console.log(replace_first_string("Samrat"));
