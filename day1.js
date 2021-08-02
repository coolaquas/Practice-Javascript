//Destructuring of array
let arr = ["Jim", "Bob", "Sarah", "Cassie"];
let [var1, var2, var3, var4] = arr;
console.log(var1, var2, var3, var4);
console.log(var2, var1, var3, var4);
let [var5, var6, var7] = arr;
console.log(var5, var6, var7);
function foo([x, y]) {
  console.log(x, y);
}
foo([1, 2]);
foo([2]);
foo([]);

//Destructuring of objects
let myObj = {
  name: "Luke",
  age: 25,
  hobbies: "music",
};
// let { name, age, hobbies } = myObj;
// console.log(name, age, hobbies);
let { hobbies, ...rest } = myObj;
console.log(hobbies, rest);
console.log(hobbies, rest.age);
let jane = { firstName: "Jane", lastName: "Doe" };
let john = { firstName: "John", lastName: "Doe", middleName: "Smith" };
let sayName = ({ firstName, lastName, middleName = "N/A" }) => {
  console.log(`Hello ${firstName} ${lastName} ${middleName}`);
};
sayName(jane);
sayName(john);

//class in ES6

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getUserData() {
    console.log(this.name + " is " + this.age + " years old.");
  }
}

let user1 = new User("paul", 18);
user1.getUserData();
