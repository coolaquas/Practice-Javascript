//Problem :
// program to check wheater the year is leap year or not
//Solution :
// const check_leapyear = (year) =>
//   year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
// console.log(check_leapyear(1600));

//Problem :
// program to compare two objects to determine if the first one contains the same properties as the second one.(which may also have additional properties)
//Solution :
// const compare_object = (obj1, obj2) =>
//   Object.keys(obj1).every((key) => obj2[key]);
// console.log(
//   compare_object(
//     { name: "samrat", game: "test" },
//     { name: "Raj", surname: "Das", game: "test" }
//   )
// );

//Problem :
// program to convert a comma-seperated values(csv) string to a 2D array. A new line indicates a new row in the array
//Solution :
// const csv_2D_array = (str) => {
//   return str.split("\n").map((elem) => elem.split(","));
// };
// console.log(
//   csv_2D_array("Samrat,Mallick,is,a good,boy.\nHe,is, practiceing,JS")
// );

//Problem :
// program to create a hexadecimal colorcode randomly
//Solution :
// const hex_code = () =>
//   "#" +
//   Array.from({ length: 6 })
//     .map(() => Math.floor(Math.random() * 16).toString(16))
//     .join("");
// console.log(hex_code());

//Problem :
// program to returns true if the provided predicate function returns true for all elements in a collection, false otherwise
//Solution :
// const check_func_array = (arr, fn) =>
//   arr.filter((x) => fn(x)).length === arr.length;
// console.log(check_func_array([1, 2, 3, 4, 5], (x) => x > 0));
