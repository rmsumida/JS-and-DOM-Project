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

// for loop to build the nav list based on the sections in the page
for (let i = 0; i < sectionList.length; i++) {
    const newItem = document.createElement('li');
    const newLink = document.createElement('a');
    let sectionData = sectionList[i].getAttribute('data-nav'); // Get data attribute of section
    let sectionId = sectionList[i].id;  // Get id of section
    newLink.className = 'menu__link';  // Set the class name of the anchor tag to menu__link
    newLink.href = '#' + sectionId;  // Set the href of anchor tag to use the section id
    newLink.innerText = sectionData;  // Set the anchor text to use the data-nav attirbute value
    newItem.appendChild(newLink);  // Append the anchor tag to the li tag
    navFragment.appendChild(newItem);  // Append the li and anchor to the fragment
}

document.querySelector('ul#navbar__list').appendChild(navFragment);  // Append the nav fragment to the ul with id navbar__list

// Add class 'active' to section when near top of viewport

/**
// Intersection Observer w/o inline functions
//  For observer target elements use the variable 'sectionList' previously declared for building the nav
//  Create variable for the root element
const sectionContainer = document.querySelector('section.section-container');

//  Intersection Observer Options
const sectionIoOptions = {
    root: sectionContainer,  // Set the section-container as the root element 
    rootMargin: '-25% 0px -75% 0px',
    threshold: 0  // Default value.  Element will be observed as soon as one pixel is visable
};

//  Create the intersection observer
const sectionIoObserver = new IntersectionObserver (changeActive,sectionIoOptions);

//  Set the intersection observer targets
sectionList.forEach(section => {
    sectionIoObserver.observe(section);
});

//  Callback function used for sectionIoObserver
function changeActive (entries, observer) {
    entries.forEach(entry => {
        entry.target.classList.toggle('active-section', entry.isIntersecting);
    });
};
*/


// Intersection Observer with inline functions
//  For observer target elements use the variable 'sectionList' previously declared for building the nav
//  Create variable for the root element
const sectionContainer = document.querySelector('section.section-container');

//  Intersection Observer Options
const sectionIoOptions = {
    root: sectionContainer,  // Set the section-container as the root element 
    rootMargin: '-25% 0px -75% 0px',
    threshold: 0  // Default value.  Element will be observed as soon as one pixel is visable
}; 

//  Create the Intersection Observer
const sectionIoObserver = new IntersectionObserver ((entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle('active-section', entry.isIntersecting);
    });
},sectionIoOptions);

//  Set the intersection observer targets
sectionList.forEach(section => {
    sectionIoObserver.observe(section);
});

/**
let sectionObserver = new IntersectionObserver((entries, self) => {
    console.log(entries);
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                let targetSectionId = entry.target.id; // Observer target element id
                let activeSection = document.querySelector('section.active-section');  // Section element with class 'active-class'
                let changeTargetToActive = document.querySelector('#' + targetSectionId);  //  Observer target that triggered intersection.  Change this to active
                activeSection.classList.remove('active-section');  // Remove class 'active-section' from target
                changeTargetToActive.classList.add('active-section');  // Add class 'active-section' to target
            }
        })
        }, observerOptions);

// Observe each each section
sectionList.forEach(section => {
    sectionObserver.observe(section);
});
*/

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


