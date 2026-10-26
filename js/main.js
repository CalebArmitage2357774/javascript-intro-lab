// Print Document In Console
console.dir(document);

// Header Content
const myHeading = document.getElementById("myHeading");
myHeading.innerText = "Hello, world!";

// Current Page Selection
document.querySelector('nav ul li').setAttribute('class', 'currentPage');

// First Of Class Selection
let firstButton = document.querySelector(".btn");
console.log(firstButton); // Logs the first element with the class 'btn'

// All Of Class Selection
let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons); // Logs a NodeList of all elements with the class 'colPicker'

// 1: All Of Class Selection : ForEach Example
colourButtons.forEach(button => {
    button.style.backgroundColor = "red";
});
// 2: All Of Class Selection : ForOf Example
for (let button of colourButtons) {
    button.style.backgroundColor = "blue";
}
// 3: All Of Class Selection : ForLoop Example
for (let i = 0; i < colourButtons.length; i++) {
    colourButtons[i].style.backgroundColor = "green";
}

// 4: All Of Class Selection : ForEach Example ( With If Statements )
// NOTE: This code overwrites 1-3 "All Of Class Selection" examples above.
colourButtons.forEach(button => {
    if (button.innerText === "Red")
        button.style.backgroundColor = "red";
    if (button.innerText === "Green")
        {
            // {} Only needed here because there are multiple statements to execute
            button.style.backgroundColor = "green";
            button.style.color = "white";
        }
    if (button.innerText === "Blue")
        {
            button.style.backgroundColor = "blue";
            button.style.color = "white";
        }
    if (button.innerText === "Yellow")
        button.style.backgroundColor = "yellow";
    if (button.innerText === "Purple")
        {
            button.style.backgroundColor = "purple";
            button.style.color = "white";
        }
    if (button.innerText === "Default") 
        button.style.backgroundColor = "white";
});



// Event Listener Example ( + Function Declaration )
document.getElementById('myTestBtn').addEventListener('click', myFunction);

function myFunction() {
  console.info('hi');

  /* NOTE: adding "ev" or another parameter to the function will allow you to access 
  the event object (in the console), which contains information about the event that 
  occurred using "console.dir(parameterName);" within the function. */
}

// Arrow Function Example(s)
/*
document.getElementById('myTestBtn').addEventListener('click', () => console.info('hi'));
*/
// ---[OR]---
/* 
document.getElementById('myTestBtn').addEventListener('click', () => {
  console.info('Hello')
  console.info('World')
});
*/



// Challenge 1: Changing Background Color of the Page
/* document.querySelector(".red").addEventListener("click", () => {
  document.body.setAttribute("class", "redBack");
});
document.querySelector(".green").addEventListener("click", () => {
  document.body.setAttribute("class", "greenBack");
});
document.querySelector(".blue").addEventListener("click", () => {
  document.body.setAttribute("class", "blueBack");
});
document.querySelector(".reset").addEventListener("click", () => {
  document.body.removeAttribute("class", "redBack", "greenBack", "blueBack");
}); */

// Challenge 1 - Alternative Solution (Overrides Prvious Solution)
document.querySelectorAll(".colPicker").forEach(button => {
    button.addEventListener("click", () => {
        let clickedButton = button.innerText;
        document.body.setAttribute("class", clickedButton.toLowerCase() + "Back");
    });
});