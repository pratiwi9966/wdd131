
// Product array
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate product select options
const productSelect = document.getElementById('productSelect');

if (productSelect) { 
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;  // use id as value
    option.textContent = product.name;  // display name
    productSelect.appendChild(option);
  });
}


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
