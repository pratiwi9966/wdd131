/*-------------------Learning Activity3: Document Object Model-----------------------------*/
/*--declare three (3) variables that hold references to the input, button, and list elements.--*/
const input = document.querySelector("#favchap"); // The text input field
const button = document.querySelector('button'); // The "Add Chapter" button
const list = document.querySelector('ul'); // The list where items will be added

/*-------------------Learning Activity4: Handling DOM Events-----------------------------*/
/*--Create a click event listener for the"Add Chapter button" using an addEventListener.--*/
button.addEventListener('click', function () { 

    // Check to make sure the input is not blank
    if (input.value.trim() !== '') {

        //Create a new li and delete button each time button is clicked
        const li = document.createElement('li'); // Create a new list item
        const deleteButton = document.createElement('button'); // Create a delete button

         //Add content to the elements
        li.textContent = input.value;  // Set list item text to user's input
        deleteButton.textContent = '❌'; // Give the delete button an emoji or symbol

        //Add event listener to delete button (removes the li when clicked)
        deleteButton.addEventListener('click', function () {
            list.removeChild(li); // remove that specific list item
            input.value = '';  // Empty the text box
            input.focus();  // refocus the input field(Move cursor back to input)
        });

        // Append the delete button to the list item, and the list item to the list
        li.append(deleteButton);
        list.append(li);
     }
})

