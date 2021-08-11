//Problem :
// program to get a number and return coresponding aschi code value
// Solution :
// const aschi_to_char = (num) => String.fromCharCode(num);
// console.log(aschi_to_char(90));

//Problem :
// program to KATA sample fun theater problem
// Solution :
// const seatsInTheater = (nCols, nRows, col, row) =>
//   (nCols - col + 1) * (nRows - row);
// console.log(seatsInTheater(16, 11, 5, 3));

//Problem :
// program to find the point in football championship
// Solution :
const points = (games) =>
  games.reduce((acc, game) => {
    const [x, y] = game.split(":");
    return (acc += x > y ? 3 : x === y ? 1 : 0);
  }, 0);
console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:5"])
);
