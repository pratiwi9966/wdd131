//JavaScript controls reading the old visit count, showing it, and saving the new count.

// 1️⃣ Find the place in HTML where the number should be shown
//This grabs:<span class="visits"></span>, and lets JavaScript change its text.
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the current visit number from localStorage
// *"localStorage.getItem("numVisits-ls")" gets the saved number.
// *If nothing is saved yet, it returns "null".
// *"Number(null)"" becomes "0".
// *"|| 0" ensures the value becomes 0 if nothing was saved yet.
//So on the very first visit, "numVisits = 0".
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// window: The global browser object(可有可無)
//
//this line uses three built-in JavaScript features:
// ✅1. localStorage is a built-in browser feature that lets you save data on the user's computer.
//    getItem("key") retrieves a value saved under a specific key.
// ✅2. Number() This converts whatever value you pass into a number.
// ✅3. The OR operator ||
//       The OR operator returns the right side when the left side is:
//            *false
//            *0
//            *""
//            *null
//            *undefined
//            *NaN
// Means: “If the value from localStorage is not usable (ex: null, NaN)…then use 0 instead.”

// 3️⃣ Display the visit message
// If the user has visited before → show the number.
// If it’s the first visit → show a welcome message.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ Increment the visit count
// Adds 1 to the number.
// So if they visited 5 times before, it becomes 6.
numVisits++;

// 5️⃣ Save the new value back into localStorage
//This saves the number, so when the user visits again, the value will still be there.
//The data stays even if the user:
// *refreshes the page
// *closes the browser
// *turns off the computer
//(localStorage does NOT erase automatically.)
localStorage.setItem("numVisits-ls", numVisits);

//setItem() stores a value in localStorage using a key–value pair.
//localStorage.setItem(key, value);
//This means: “Save the value of numVisits under the key numVisits-ls.”

//🧠 Related methods (important!)
//localStorage has only 4 main methods:
//Method: 	                What it does:
//setItem(key, value)	      Saves data
//getItem(key)	            Retrieves data
//removeItem(key)	          Deletes one key
//clear()	                  Deletes all localStorage data

// 💡A client can view the localStorage data using the Applications panel in 
// the browsers's DevTools - check it out on any major site.
