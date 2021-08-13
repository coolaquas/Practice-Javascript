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

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/
const link = document.createElement("a");
link.href = "https://forcemipsum.com/";
link.innerText = "Text generated from Focem Ipsum";
document.body.appendChild(link);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
// para.innerHTML = para.innerHTML.split(".").join(".</p><p>")+"</p>"
para.innerHTML = para.innerHTML.split(/\.[^|<]/g).join(".</p><p>") + "</p>";
/* 
Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
let count = para.innerText.split(" ").length;
const countElem = document.createElement("div");
countElem.innerText = `${count} words`;
document.body.insertBefore(countElem,para)
/*