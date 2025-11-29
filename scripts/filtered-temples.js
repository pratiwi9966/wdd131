

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
   Temple Data Array
   ============================================================ */
const temples = [
  {
    templeName: "Bacolod Philippines Temple",
    location: "Bacolod, Philippines",
    dedicated: "2021, December, 11",
    area: 26700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bacolod-philippines-temple/bacolod-philippines-temple-65909.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-45813.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add 3 more temple objects here...
  {
    templeName: "Taipei Taiwan",
    location: "Taipei, Taiwan",  
    dedicated: "1984, November, 17",
    area: 9945,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/taipei-taiwan-temple/taipei-taiwan-temple-8302.jpg"
  },
  {
    templeName: "Idaho Falls Temple",
    location: "Idaho, United States",  
    dedicated: "1945, September, 23",
    area: 85624,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-1903.jpg"
  },
  {
    templeName: "Apia Samoa Temple",
    location: "Pesega, Apia, Samoa",  
    dedicated: "2005, September, 9",
    area: 18691,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13903.jpg"
  }
];


// Display ALL temples when the page loads
displayTemplesCard(temples)

/* ============================================================
   Function: Display Temple Cards
   ============================================================ */
function displayTemplesCard(filteredTemples) { 
  gallery.innerHTML = ""; //Clear gallery before inserting new cards

  // console.log(filteredTemples)
  filteredTemples.forEach(temple => {

    // Add the temple name
    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    // Add location
    const location = document.createElement("p");
    location.innerHTML = `<span>Location:<span> ${temple.location}`;

    // Add dedicated date*
    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<span>Dedication:<span> ${temple.dedicated}`;

    // Add area
    const area = document.createElement("p");
    area.innerHTML = `<span>Size:<span> ${temple.area} sq ft`;

    // Add temple image
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    // Create a card <section>
    const card = document.createElement("section");
    card.classList.add("temple-card");

    // Add all Elements to the card
    card.append(name, location, dedicated, area, img);
    
    // Add all elements to the card
    gallery.append(card);
  });
  
}
  
/* ============================================================
   Navigation Filters
   ============================================================ */
//Select All <a> links inside the <nav> and loop through them
document.querySelectorAll("nav a").forEach(link => {

  // Add a click event listener to each link
  link.addEventListener("click", (event) => {

    event.preventDefault();
    //Prevents the browser from reloading the page
    //(because <a> normally tries to go to a new URL)

    const filter = event.target.textContent;
    //Get the text inside the clicked link
    //Example: "Home", "Old", "New", "Large", "Small"

    document.getElementById("page-title").textContent = filter === 'Home' ? 'Temple Gallery' : `${filter} Temple Gallery`;
    //if statement in one line: comparison ? if true : if false 
    // ternary

    
    // console.log(filter)
       //============Filter Options===============
    if (filter === "Home") {
      // document.getElementById("page-title").textContent = "Temple Gallery";

      //Show all temples
      displayTemplesCard(temples);
    }

    else if (filter === "Old") {
      // document.getElementById("page-title").textContent = "Old Temple Gallery";
      //Show temples dedicated before 1900
      const old = temples.filter((temple) => parseInt(temple.dedicated) < 1990);
      displayTemplesCard(old);
    }

    else if (filter === "New") {
      // document.getElementById("page-title").textContent = "New Temple Gallery";
      // Show temples dedicated AFTER 2000
      const newtemples = temples.filter((temple) => parseInt(temple.dedicated) > 2000);
      displayTemplesCard(newtemples);
    }

    else if (filter === "Large") {
      // document.getElementById("page-title").textContent = "Large Temple Gallery";
        // Show temples with area GREATER than 90,000 sq ft
      const large = temples.filter((temple) => parseInt(temple.area) > 90000);
      displayTemplesCard(large);
    }
   
    else if (filter === "Small") { 
      // document.getElementById("page-title").textContent = "Small Temple Gallery";
      // Show temples with area LESS than 10,000 sq ft
      const small = temples.filter((temple) => parseInt(temple.area) < 10000);
      displayTemplesCard(small);
    }

  });
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


