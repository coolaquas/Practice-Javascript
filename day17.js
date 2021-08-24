/*Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
//Solution
const sol1 = () => {
  const data = new Date();
  const hrs = data.getHours();
  const mnt = data.getMinutes();
  const sec = data.getSeconds();

  console.log(
    `Today is : ${data.toLocaleString("en-us", {
      weekday: "long",
    })}`
  );
  console.log(
    `Current time is : ${hrs} ${hrs >= 12 ? "PM" : "AM"} : ${mnt} : ${sec}`
  );
};
// sol1();

/*Write a JavaScript program to print the contents of the current window.
 */
//Solution
const sol2 = () => {
  window.print();
};
// sol2();

/*Write a JavaScript program to get the current date.  Go to the editor
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */
//Solution
const sol3 = () => {
  console.log(new Date().toLocaleDateString());
};
// sol3();

/*Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
 */
//Solution
const sol4 = (a = 0, b = 0, c = 0) => {
  let s = (a + b + c) / 2;
  console.log((s * (s - a) * (s - b) * (s - c)) ** 0.5);
};
// sol4(5, 6, 7);

/*Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front
 */
//Solution
const sol5 = (str) => {
  console.log(str.split("").reverse().join(""));
};
// sol5("w3resource");

/*Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar
 */
//Solution
const sol6 = (year) => {
  console.log(
    year % 4 === 0 && year % 100 !== 0
      ? year + " is a leap year"
      : year % 400 === 0
      ? year + " is a leap year"
      : year + " is not a leap year"
  );
};
// sol6(2003);

/*Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050
 */
//Solution
const sol7 = () => {
  for (let i = 2014; i < 2050; i++) {
    if (new Date(i, 0, 1).getDay() === 0)
      console.log(`1st january, ${i} is a sunday.`);
  }
};
// sol7();
