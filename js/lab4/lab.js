// 1. Select the first <div> on the page using getElementsByTagName and log its innerHTML.
// console.log(document.querySelector('div').textContent);

// 2. Using getElementById change the text of #my-p to "Hello DOM".
// document.getElementById("my-p").textContent = "Hello DOM"

// 3. Use querySelector to select the element with class "target-div" and log its nodeName.
// console.log(document.querySelector(".target-div").nodeName);

// 4. Use querySelectorAll to count how many <div> elements exist; log the count.
// console.log(document.querySelectorAll("div").length);

// 5. Use getElementsByName on the email input (name="user-email") and set its value to "user@test.com".
// document.getElementsByName("user-email")[0].value = "user@test.com";

// 6. Check if the text input has a "name" attribute; if not add name="user-name" via setAttribute.
// textInpEl = document.querySelector("[type=text]");
// if (!textInpEl.hasAttribute("name")) {
//   textInpEl.name = "user-name";
//   console.log(textInpEl.name);
// }

// 7. Append the string " - UPDATED" to the existing innerText of #my-p (keep original text).
// document.getElementById("my-p").textContent += " - UPDATED";

// 8. Create Images slider that work automatically and with next/prev/start/stop buttons.
var images = [
  "./imgs/1.jpeg",
  "./imgs/2.jpeg",
  "./imgs/3.jpeg",
  "./imgs/4.jpeg",
];

// "left, start, stop, right

var imgIdx = -1;
const sliderEl = document.querySelector(".slider");

function alternateImages() {
  imgIdx = (imgIdx + 1) % images.length;
  console.log("alternate (current): " + imgIdx);
  sliderEl.style.backgroundImage = "url(" + images[imgIdx] + ")";
}

var intervalId;

function start() {
  console.log("start" + imgIdx);
  intervalId = setInterval(function () {
    alternateImages();
  }, 2000);
}

// start();

function stop() {
  clearInterval(intervalId);
  console.log("stop " + imgIdx);
}

function getPrev() {
  imgIdx -= 1;
  if (imgIdx < 0) imgIdx += images.length;
  sliderEl.style.backgroundImage = "url(" + images[imgIdx] + ")";
  console.log("prev " + imgIdx);
}

function getNext() {
  imgIdx = (imgIdx + 1) % images.length;
  sliderEl.style.backgroundImage = "url(" + images[imgIdx] + ")";
  console.log("next " + imgIdx);
}

// 9. Set the placeholder of the text input to "Type your full name" using setAttribute.
// document.querySelector("[type=text]").setAttribute("placeholder", "Type your full name");

// 10. Log whether the email input has attribute "required"; if missing add it.
// var emailEl = document.querySelector("[type=email]");
// console.log(emailEl.hasAttribute("required"));
// if (!emailEl.hasAttribute("required")) {
//     emailEl.setAttribute("required", true);
//     console.log(emailEl.hasAttribute("required"));
// }

// 11. Write function getSelectedValue(selectId) returning the current selected option value.
// function getSelectedValue(selectId) {
//     var selectEl = document.getElementById(selectId);
//   return "val: " + selectEl.value + "\ntext: " + selectEl.options[selectEl.selectedIndex].text;
// }

// console.log(getSelectedValue("my-select"));

// 12. Loop through all options of the select and log each option's text and value.
// Array.from(document.getElementById("my-select").options).forEach(function (op) {
//   console.log(op.value, op.text);
// })

// 13. Programmatically select the option with value "EG".
// console.log(document.querySelector("#my-select option[value=EG"))

// 14. Create function selectByText(selectId, text) that selects the first option whose text matches exactly.
// function selectByText(selectId, text) {
//   var selectEl = document.querySelector("#" + selectId);
//   Array.from(selectEl.options).forEach(function (op) {
//     if (op.text === text) {
//       console.log("first match: ", op);
//       return;
//     }
//   });
// }
// selectByText("my-select", "United Kingdom");

// 15. Replace innerHTML of #div-2 with a <p><b>Bold Text</b></p> (ensure bold renders, not printed literally).
// document.querySelector("#div-2").innerHTML = "<p><b>Bold Text</b></p>";

// 16. Add classes class-a and class-b to #div-2 then remove class-b (using classList).
// document.querySelector("#div-2").classList.add('class-a');
// document.querySelector("#div-2").classList.add('class-b');
// document.querySelector("#div-2").classList.remove('class-b');

// 17. Toggle class "hidden" on #div-2 twice; comment final visibility.
// document.querySelector("#div-2").classList.toggle("hidden");
// document.querySelector("#div-2").classList.toggle("hidden");

// 18. Create function insertAfter(refNode, newNode) that inserts newNode immediately after refNode.
// function insertAfter(refNode, newNode) {
//   refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
// }

// var refNode = document.querySelector("#div-2 h3");
// var newNode = document.createElement("h3");
// newNode.textContent = "new h3 added by insertAfter()"
// insertAfter(refNode, newNode);

// 19. Create a new <div> saying "Dynamic Box" with yellow background and append inside #div-2.
// var parent = document.querySelector("#div-2");
// var child = document.createElement("div");
// child.textContent = "Dynamic Box";
// child.style.backgroundColor = "yellow";
// parent.appendChild(child);

// 20. Insert a new <p> BEFORE the first child of #div-2 (insertBefore).
// var parent = document.querySelector("#div-2");
// var p = document.createElement("p");
// p.textContent = "before first child in #div-2";
// p.style.backgroundColor = "hotpink";
// parent.insertBefore(p, parent.children[0]);

// 21. Insert a <span> with text "AFTER END" right after #div-2 using insertAdjacentHTML.
// var div2 = document.querySelector("#div-2");
// div2.insertAdjacentHTML('afterend', '<span style="color:blue">after end (#div-2)</span>')

// 22. Form onsubmit: prevent default and log values of text, email, and select inputs.
// document.querySelector("form").addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("text: " + document.querySelector("[type=text]").value);
//   console.log("email: " + document.querySelector("[type=email]").value);
//   console.log("country: " + document.querySelector("#city").value);
// });

// 23. Add input event on the text input that logs its length whenever it changes.
// document.querySelector("[type=text]").addEventListener("keyup", function (event) {
//   console.log("text length: " + event.target.value.length);
// });

// 24. Write validateEmailSimple(value) returning true if value contains both '@' and '.'; add 2 passing / 2 failing examples (comments).
function validateEmailSimple(value) {
  return value.includes("@") && value.includes(".");
}
// console.log(validateEmailSimple("another.test@domain.co")); // true
// console.log(validateEmailSimple("test@example.com")); // true
// console.log(validateEmailSimple("sign.com")); // false
// console.log(validateEmailSimple("invalid")); // false

// 25. Create an element, append it to #div-2, then remove it using parent.removeChild(child).
var parent = document.querySelector("#div-2");
var child = document.createElement("div");
child.textContent = "Child to be removed";
// parent.appendChild(child);
// parent.removeChild(child);

// 25. Create an element, append it to <div id="wrapper">
//  <p id="first">First</p>
//  <p id="second">Second</p>
// </div>

// var parent = document.getElementById("wrapper");
// var child = document.createElement("p");
// child.textContent = "middle child";
// parent.insertBefore(child, document.getElementById("second"));

// 26. Clone #div-2 , set clone id="div-2-clone", and insert it after original using insertAfter.
// var original = document.getElementById("div-2");
// var clone = original.cloneNode(true);   // deep-clone
// clone.id = "div-2-clone";
// clone.childNodes[1].textContent = "cloned div-2"; // <h3>
// original.insertAdjacentElement("afterend", clone);

// 27. Highlight all text & email inputs (green border) in a function highlightInputs(form) and call it on DOMContentLoaded.
// function highlightInputs(form) {
//   Array.from(form.querySelectorAll("input[type=text], input[type=email]")).forEach(function (inp) {
//     inp.style.border = "2px solid green";
//     inp.style.borderRadius = "5px";
//     inp.style.padding = "5px";
//   });
// }
// window.addEventListener("DOMContentLoaded", function () {
//   highlightInputs(document.querySelector("form"));
// });

// 28. Build function buildCard(title, content) returning <div class="card"> with an <h3> and <p>; append two cards to body.
function buildCard(title, content) {
  var card = document.createElement("div");
  card.className = "card";

  var h3 = document.createElement("h3");
  var p = document.createElement("p");
  
  h3.textContent = title;
  p.textContent = content;
  
  card.appendChild(h3);
  card.appendChild(p);
  document.body.appendChild(card);
}

// buildCard("card 1", "Blue Jeans");
// buildCard("card 2", ":not(Army uniform)");


// 29. Add delegated click listener on body logging when a .card is clicked.
// document.body.addEventListener("click", function (event) {
//   if (event.target.closest(".card")) {
//     console.log("Card clicked:", event.target.closest(".card").innerText);
//   }
// });

// 30. Reflection (comment): Which two tasks were most challenging and why?
// Ans: 8 (task includes html, css, js), 29 (event delegation concept)

// 31. create and unordered list dynamically with at 10 items, the odd list items should have class "odd" and even items "even", -create the two classes in your CSS file-
// you can find the CSS classes in the index.html file
var ul = document.createElement("ul");
for (var i = 0; i < 10; i++) {
  var li = document.createElement("li");
  li.textContent = "item " + i;
  if (i % 2 === 0) {
    li.className = "even";
  } else {
    li.className = "odd";
  }
  ul.appendChild(li);
}
// document.body.appendChild(ul);

// 33. form with 3 inputs (name, email, city). once values are written, it reflects on another div in the page
// var nameEl = document.getElementById("name");
// var emailEl = document.getElementById("email");
// var cityEl = document.getElementById("city");
// var buttonEL = document.getElementById("reflect");

// buttonEL.addEventListener("click", function (event) {
//   event.preventDefault();
//   document.getElementById("name-div").textContent += nameEl.value;
//   document.getElementById("city-div").textContent += cityEl.value;
//   document.getElementById("email-div").textContent += emailEl.value;
// });
