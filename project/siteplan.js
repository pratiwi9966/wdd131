
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
