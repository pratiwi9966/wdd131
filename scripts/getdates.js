
// Create a new Date object for the current date and year
const currentDate = new Date();

// Extract the current year using getFullYear()
const currentYear = currentDate.getFullYear();

// Output the current year to the footer’s first <p> element
//    (The <span id="currentYear">...</span> in your HTML)
document.getElementById("currentYear").textContent = currentYear;

// Output the document’s last modified date/time
//    (Using the built-in document.lastModified property)
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;