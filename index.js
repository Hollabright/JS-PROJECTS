// let username;

// document.getElementById("submit").onclick = function () {
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML = "Hello " + username + "!";
// }

// const = variable that cannot be changed
// const PI = 3.142;
// let radius;
// let circumference;

// radius = prompt("Kindly enter the radius");
// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log("The circumference is:", circumference);

// document.getElementById("circ").innerHTML = "The circumference is: " + circumference;

// Solving the hypotemuse of a triabgle - c = sqrt(a^2 + b^2)
// let a;
// let b;
// a = prompt("Kindly enter the value of a!");
// b = prompt("Kindly enter the value of b!");
// a = Number(a);
// b = Number(b);

// let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// c = Math.round(c);
// console.log(c);

// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("submitButton").onclick = function () {
//         let a = document.getElementById("sideA").value;
//         let b = document.getElementById("sideB").value;
//         a = Number(a);
//         b = Number(b);
//         let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//         c = c.toFixed(4);
    
//         console.log("Side C:", c);
//         document.getElementById("sideC").innerHTML = "Side C: " + c;
//     }
// });


// let count = 0;
// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("decreaseBtn").onclick = function () {
//         count -= 1;
//         document.getElementById("countLabel").innerHTML = count;
//     }
    
//     document.getElementById("resetBtn").onclick = function () {
//         count = 0;
//         document.getElementById("countLabel").innerHTML = count;
//     }
    
//     document.getElementById("increaseBtn").onclick = function () {
//         count += 1;
//         document.getElementById("countLabel").innerHTML = count;
//     }
// });

// How to generate random numbers in javascript
// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("rolldice").onclick = function () {
//         let x = Math.floor(Math.random() * 10) + 1;
//         let y = Math.floor(Math.random() * 10) + 1;
//         let z = Math.floor(Math.random() * 10) + 1;
    
//         document.getElementById("randomx").innerHTML = x;
//         document.getElementById("randomy").innerHTML = y;
//         document.getElementById("randomz").innerHTML = z;
//     }
// });

// To see useful string properties and methods, type var. e.g. userName.

// Method Chaining is calling one method after another in a continous line of code.
// let userName = "bro";
// let letter = userName.charAt(0).toUpperCase();
// console.log(letter);

// Using the slice() method to extract a section of a string

// let fullName = "Snoop Dog";
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("submitAge").onclick = function () {
//         let age = document.getElementById("enterAge").value;
//         if (age === null) {
//             document.getElementById("message").innerHTML = "No age provided!";
//             console.log("No age provided!");
//         }   else {
//             age = parseInt(age);
        
//             if (isNaN(age)) {
//                 document.getElementById("message").innerHTML = "Please provide a valid number!";
//                 console.log("Please provide a valid number!");
//             } else if (age >= 65) {
//                 document.getElementById("message").innerHTML = "You are a senior citizen!";
//                 console.log("You are a senior citizen!");
//             } else if (age >= 18) {
//                 document.getElementById("message").innerHTML = "You are an adult!";
//                 console.log("You are an adult!");
//             } else if (age < 0) {
//                 document.getElementById("message").innerHTML = "You have not yet been born!";
//                 console.log("You have not yet been born!");
//             } else {
//                 document.getElementById("message").innerHTML = "You are a child!";
//                 console.log("You are a child!");
//             }
//         }
//     }
// });

// let age = prompt("Enter your age");

// if (age === null) {
//     alert("No age Provided!");
//     console.log("No age provided!");
// }   else {
//     age = parseInt(age);

//     if (isNaN(age)) {
//         alert("Please provide a valid number!");
//         console.log("Please provide a valid number!");
//     } else if (age >= 65) {
//         alert("Your are a senior citizen!");
//         console.log("You are a senior citizen!");
//     } else if (age >= 18) {
//         alert("You are an adult!");
//         console.log("You are an adult!")
//     } else if (age < 0) {
//         alert("You have not yet been born!");
//         console.log("You have not yet been born!");
//     } else {
//         alert("You are a child!");
//         console.log("You are a child!");
//     }
// }

{/* <label>Subscribe</label>
<input type="checkbox" id="checkbox"><br>
<label>Visa Card</label>
<input type="radio" id="visa">
<label>Verve Card</label>
<input type="radio" id="verve">
<label>MasterCard</label>
<input type="radio" id="mastercard"><br>
<button id="submitPayment">Submit</button> */}

// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("submitPayment").onclick = function () {
//         const checker = document.getElementById("checkBox");
//         const visaCard = document.getElementById("visa");
//         const verveCard = document.getElementById("verve");
//         const masterCard = document.getElementById("mastercard");

//         if (checker.checked || visaCard.checked || verveCard.checked || masterCard.checked) {
//             console.log("You're subscribed!");
//         } else {
//             console.log("You need to select a payment method");
//         }
//     }
// });


{/* <label>What is your score?</label>
<input type="text" id="enterScore" placeholder="Enter score here"><br>
<button id="submitScore">Submit</button>
<label id="postGrade"></label>
*/}

// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("submitScore").onclick = function () {
//         let score = document.getElementById("enterScore").value;

//         switch (true) {
//             case score > 100:
//                 console.log(score, "is not your correct score!");
//                 document.getElementById("postGrade").innerHTML = score + " is not your correct score!";
//                 break;
//             case score >= 70:
//                 console.log("You got an A");
//                 document.getElementById("postGrade").innerHTML = score + ": You got an A";
//                 break;
//             case score >= 60:
//                 console.log("You got a B");
//                 document.getElementById("postGrade").innerHTML = score + ": You got a B";
//                 break;
//             case score >= 50:
//                 console.log("You got a C");
//                 document.getElementById("postGrade").innerHTML = score + ": You got a C";
//                 break;
//             case score >= 40:
//                 console.log("You got a D");
//                 document.getElementById("postGrade").innerHTML = score + ": You got a D";
//                 break;
//             case score <= 39:
//                 console.log("You FAILED!");
//                 document.getElementById("postGrade").innerHTML = score + ": You FAILED!";
//                 break;
//             default:
//                 // console.log(score, "is not a valid number!");
//                 document.getElementById("postGrade").innerHTML = score + " is not a valid number!";
//         }
//     }
// });

// A while loop repeats a code for an infinite amount of times provided a condition is true.
// let userName = "";

// while (userName == "" || userName == null) {
//     userName = window.prompt("Kindly input your username please!");
// }

// console.log("Username is: ", userName);

// A do while loop does something first before before checking if the condition is true.

// let username;

// do {
//     userName = window.prompt("Kindly input your username please!");
// } while (userName == "");
// console.log("User Name is: ", userName);

// For loops repeats code for a specific amount of times.
// for (i = 10; i >= 0; i -= 1) {
//     console.log(i);
// }
// console.log("Happy New Year!!!");

// break = breaks out of a loop entirely
// continue = skips that iteration

// for (let i = 0; i <= 15; i += 1) {
//     // if (i == 5) {
//     //     continue;
//     // }
//     // console.log(i);
//     if (i == 10) {
//         break;
//     }
//     console.log(i);
// }

// nested loops are loops inside of another loop
// let symbol = prompt("Enter symbol!");
// let rows = prompt("Enter the value of rows");
// let columns = prompt("Enter the value of columns");

// document.addEventListener("DOMContentLoaded", function () {
//     for (let x = 1; x <= rows; x += 1) {
//         for (let y = 1; y <= columns; y += 1) {
//             document.getElementById("nested").innerHTML += symbol;
//         }
//         document.getElementById("nested").innerHTML += "<br>";
//     }
// });

// Function can be used to define a code once and be used many times.
// To perform some code, call the function name.
// startProgram();

// function startProgram() {
//     let userName = "Bro";
//     let age = 21;

//     happyBirthday(userName, age);
// }

// function happyBirthday(userName, age) {
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday dear", userName);
//     console.log("You are", age, "years old");
// }

// Return statement returns a alue back to the place where the function was invoked
// let height = prompt("Enter value for height");
// let width = prompt("Enter value for width");

// area = getArea(height, width);
// console.log("Area = ", area);

// function getArea() {
//     let result = height * width;
//     return result;
// }

// A ternery operator is a shortcut for an if/else statement.
// condition ? exprIfTrue : exprIfFalse

// let adult = checkAge(10);
// console.log(adult);

// function checkAge(age) {
//     return age >= 18 ? true : false;
// }

// checkWinner(false);

// function checkWinner(win) {
//     win ? console.log("YOU WIN!") : console.log("YOU LOSE!");
// }

//toLocaleString() - returns a string with a language sensitive
//                   representation of this number
//  toLocaleString(locale, {options});
let myNum = 10;
myNum = myNum.toLocaleString("en-US", {style:"currency", currency:"USD"});
console.log(myNum);

let theNum = 10;
theNum = (theNum / 100).toLocaleString(undefined, {style:"percent"});
console.log(theNum);

let ourNum = 10;
ourNum = ourNum.toLocaleString(undefined, { style: "unit", unit: "celsius", unitDisplay: "short" });
console.log(ourNum);

let naNum = 10;
naNum = naNum.toLocaleString(undefined, { style: "unit", unit: "liter", unitDisplay: "short" });
console.log(naNum);

let dist = 10;
dist = dist.toLocaleString(undefined, { style: "unit", unit: "fahrenheit", unitDisplay: "short" });
console.log(dist);

let volt = 10;
volt = volt.toLocaleString(undefined, { style: "unit", unit: "milliliter", unitDisplay: "short" });
console.log(volt);