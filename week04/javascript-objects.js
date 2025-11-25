/*----------JavaScript — Storing Data in an Object ----------*/
/*created one big JavaScript object named aCourse */
/*It contains:
    code → the course code
    title → course name
    credits → number of credits
    sections → an array of objects, one for each section

Each section has:
    sectionNumber
    enrolled
    instructor

This is a perfect example of using objects inside objects. */

let aCourse = {
  code: "WDD131",
  title: "Dynamic Web Fundamentals",
    credits: 2,
  
  sections: [
    {sectionNumber: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez"},
    { sectionNumber: "002", enrolled: 80, instructor: "Sarah Gobble" }
  ]
};

/*----------Function: setCourseInformation()----------- */
/*What it does:
    Finds the <caption> element with id="courseName".
    Fills it with something like:   WDD131 - Dynamic Web Fundamentals 
    So the table gets a title at the top.*/
function setCourseInformation(course) {
  document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`;
}

/*----------Function: renderSections()---------- */
function renderSections(course) {
  /*Find the <tbody> of the table */  
  const tbody = document.querySelector("#sections tbody");
  /*Create a variable to store all rows */
  let rows = "";
  /*Loop through all sections 
  This runs once for each section in the sections array. */
    for (const section of course.sections) {
        rows += `<tr>
        <td>${section.sectionNumber}</td>
        <td>${section.enrolled}</td>
        <td>${section.instructor}</td>
        </tr>`
    }
   /*Put all rows into the table */ 
  tbody.innerHTML = rows;
}

/*----------Calling the Functions----------*/
/*What this does:
    Fills in the course name at the top
    Fills the table with section data */
setCourseInformation(aCourse);
renderSections(aCourse);

/*🎉 Final Summary
    ✔ A JavaScript object containing course data
    ✔ Functions that insert that data into your HTML
    ✔ A styled table that displays everything cleanly

    This is exactly how real websites display data from a database
*/