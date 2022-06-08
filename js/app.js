/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navFragment = document.createDocumentFragment();  // New fragment to store new list items
const sectionList = document.querySelectorAll('section');  // Create a node list of all section elements

for (let i = 0; i < sectionList.length; i++) {
    const newItem = document.createElement('li');
    const newLink = document.createElement('a');
    let sectionData = sectionList[i].getAttribute('data-nav');
    let sectionId = sectionList[i].id;
    //newItem.className = 'navbar__item';  // Set the class name of the li element
    newLink.className = 'menu__link';  // 
    newLink.href = '#' + sectionId;
    newLink.innerText = sectionData;
    newItem.appendChild(newLink);
    navFragment.appendChild(newItem);
}

document.querySelector('ul#navbar__list').appendChild(navFragment);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


