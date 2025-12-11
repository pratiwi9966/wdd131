
/* ============================================================
   Responsive Navigation Menu (Hamburger Menu)
   ============================================================ */

// Select the hamburger button   
const hamButton = document.querySelector('#menu');
// Select the nav element
const navigation = document.querySelector('nav');
// Select the gallery element
const gallery = document.querySelector('#gallery');

// Add a click event to open/close the navigation menu
hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');// Show/hide the menu
  hamButton.classList.toggle('open');// Change icon (☰ ↔ ❌)
});


// Increment review counter
let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
reviewCount++;
localStorage.setItem('reviewCount', reviewCount);


// Display the number of reviews
document.addEventListener('DOMContentLoaded', () => {
  const counterEl = document.getElementById('reviewCount');
  if (counterEl) {
    counterEl.textContent = reviewCount;
  }
});


/* ============================================================
   Footer: Year + Last Modified
   ============================================================ */
// Create a new Date object for the current date and year
const currentDate = new Date();

// get the current year using "getFullYear()""
const currentYear = currentDate.getFullYear();

// Show the current year to the footer’s first <p> element
//    (The <span id="currentYear">...</span> in HTML)
document.getElementById("currentYear").textContent = currentYear;

// Show the document’s last modified date/time
//    (Using the built-in document.lastModified property)
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

//Array function & object
const greetings = ['Welcome!', 'Hello!', 'Nihao!','大家好!','我不好!','你好!'];

function getRandomGreeting() {
  return greetings[getRandomInteger(greetings.length)];
}

function getRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

const pages = [
  {
    name: 'home.html',
    greeting: true
  },
  {
    name: 'penghu.html',
    greeting: true
  },
  {
    name: 'orchid-island.html',
    greeting: true
  },
  {
    name: 'references.html',
    greeting: false
  }
]

const pagesWithGreetings = pages
  .filter((page) => page.greeting)
  .map((page) => page.name);

if (pagesWithGreetings.some((page) => location.pathname.endsWith(page))) {
  document.getElementById('greeting').textContent = getRandomGreeting();
}
