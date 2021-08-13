/* JavaScript DOM Exercises 01 Tutorial: https://youtu.be/EHF7xBUAmrQ */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
const para = document.querySelector("p");
para.innerHTML = para.innerText
  .split(" ")
  .map((e) =>
    e.length > 8 ? `<span style="background-color: yellow">${e}</span>` : e
  )
  .join(" ");
