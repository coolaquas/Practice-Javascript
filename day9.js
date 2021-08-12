const users = [
  {
    id: "88f24bea-3825-4237-a0d1-efb6b92d37a4",
    firstName: "Sam",
    lastName: "Hughes",
  },
  {
    id: "2a35032d-e02b-4508-b3b5-6393aff75a53",
    firstName: "Terri",
    lastName: "Bishop",
  },
  {
    id: "7f053852-7440-4e44-838c-ddac24611050",
    firstName: "Jar",
    lastName: "Burke",
  },
  {
    id: "d456e3af-596a-4224-b1dc-dd990a34c9cf",
    firstName: "Julio",
    lastName: "Miller",
  },
  {
    id: "58a1e37b-4b15-47c1-b95b-11fe016f7b64",
    firstName: "Chester",
    lastName: "Flores",
  },
  {
    id: "b4a306cb-8b95-4f85-b9f8-434dbe010985",
    firstName: "Madison",
    lastName: "Marshall",
  },
  {
    id: "6ee904be-e3b0-41c9-b7a2-5a0233c38e4c",
    firstName: "Ava",
    lastName: "Pena",
  },
  {
    id: "7f0ce45a-bdca-4067-968b-d908e79276ce",
    firstName: "Gabriella",
    lastName: "Steward",
  },
  {
    id: "9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6",
    firstName: "Charles",
    lastName: "Campbell",
  },
  {
    id: "e789565f-fa5a-4d5e-8f6c-dd126cf995be",
    firstName: "Madison",
    lastName: "Lambert",
  },
];

const comments = [
  { userId: "88f24bea-3825-4237-a0d1-efb6b92d37a4", text: "Great Job!" },
  {
    userId: "7f053852-7440-4e44-838c-ddac24611050",
    text: "Well done, I think I understand now!",
  },
  {
    userId: "e789565f-fa5a-4d5e-8f6c-dd126cf995be",
    text: "How do you do that? 😲",
  },
  { userId: "7f053852-7440-4e44-838c-ddac24611050", text: "OK great thanks" },
  { userId: "b4a306cb-8b95-4f85-b9f8-434dbe010985", text: "Cool, thanks!" },
  { userId: "9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6", text: "Nice one 😉" },
  { userId: "6ee904be-e3b0-41c9-b7a2-5a0233c38e4c", text: "Got it." },
  { userId: "9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6", text: "Thanks!" },
  { userId: "58a1e37b-4b15-47c1-b95b-11fe016f7b64", text: "Cool 😀" },
  { userId: "6ee904be-e3b0-41c9-b7a2-5a0233c38e4c", text: "Great stuff!" },
];

// Exercises

// 1) What is Madison Marshall's user id?
const find_id = (arr, fullName) =>
  arr.find((user) => `${user.firstName} ${user.lastName}` === fullName).id;
// console.log(find_id(users, "Madison Marshall"));

// 2) Who wrote the first comment (assuming the first comment is in position 0 of the comments array)
const find_first_commentier = (arr, commenterId) =>
  arr.filter((user) => user.id === commenterId)[0];
// console.log(find_first_commentier(users, comments[0].userId));

// 3) Which user commented 'OK great thanks'?
const find_commentier = (str) =>
  users.find(
    (user) =>
      user.id === comments.find((element) => element.text === str).userId
  );
// console.log(find_commentier("OK great thanks"));

// 4) Add the user's first and last name to each comment in the comments array
const add_userDetails = () =>
  comments.map((comment) => {
    const { firstName, lastName } = users.find(
      (user) => user.id === comment.userId
    );
    return { ...comment, firstName, lastName };
  });
// console.log(add_userDetails());

// 5) Get a list of the users who haven't commented
const user_notCommented = () =>
  users.filter(
    (user) => comments.findIndex((comment) => comment.userId === user.id) === -1
  );
// console.log(user_notCommented());
