
// Weather ------------------------------------- //
const temperature = 28; // °C
const windSpeed = 15;   // km/h

// Function to calculate wind chill (Celsius version)
function calculateWindChill(temp, wind) {
  // Formula from Environment Canada for °C & km/h
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(wind, 0.16) +
    0.3965 * temp * Math.pow(wind, 0.16)
  );
}

// Decide whether wind chill can be calculated
let windChillValue;

if (temperature <= 10 && windSpeed > 4.8) {
  // Conditions are met (true) → calculate the wind chill
    windChillValue = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
    //.toFixed(1) + " °C";
    //Rounds the result to 1 decimal place and adds the text " °C" to the end
    //.toFixed() turns the number into a string, not a number anymore.
} else {
  // Conditions not met (false)→ show N/A
  windChillValue = "N/A";
}

// Display wind chill on the page
document.querySelector("#weather-card .data-list span:last-child").textContent =
  windChillValue;


//Footer-------------------------------------//
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