// step1 this is the first step
// you should test that js IS linked with HTML
// console.log("this is a test");

// GETELEMNTS
// get the title using by tagname
const tagh1 = document.getElementsByTagName("h1");
const tagById = document.getElementById("title");
const tagByClass = document.getElementsByClassName("title");

// Query selector
const title = document.querySelector("h1");
const allTitle = document.querySelectorAll("h1");
const titleById = document.querySelector("#title");
const titleByClass = document.querySelectorAll(".title");

// title.addEventListener("click", function () {
//   title.innerHTML = "this is a change";
// });
// tagById.addEventListener("click", function () {
//   if (tagById.style.color == "black") {
//     tagById.style.color = "red";
//   } else {
//     tagById.style.color = "black";
//   }
// });
// *********************
// step1 : call variables
// let btn = document.getElementById("btn");
// let quantity = document.querySelector("p");
//  step2: test if i succ called them
// console.log(btn);
// console.log(quantity);

// step3: add the event to the button:
// btn.addEventListener("click", function () {
//   //   alert("test if it is clicked");
//   //  step4: change the content of the paragraphe
//   quantity.innerHTML = +quantity.innerHTML + 1;
// });
// ----------------
// all buttons
let btnList = document.querySelectorAll("button");
console.log(btnList);
let qteList = document.querySelectorAll("p");

for (let i = 0; i <= btnList.length - 1; i = i + 1) {
  btnList[i].addEventListener("click", function () {
    // alert("hello");
    qteList[i].innerHTML = +qteList[i].innerHTML + 1;
  });
}
