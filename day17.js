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
const sol5 = (a = 0, b = 0, c = 0) => {
  let s = (a + b + c) / 2;
  console.log((s * (s - a) * (s - b) * (s - c)) ** 0.5);
};
// sol5(3, 6, 7);
