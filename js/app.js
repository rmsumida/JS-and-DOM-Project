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

const sectionList = document.querySelectorAll("section");  // Create a node list of all section elements
const navbarList = document.getElementById("navbar-list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Scroll to event target
function scrollTo(evt) {
    console.log(evt.target + " was clicked.")
    document.querySelector("section#" + evt.target.id).scrollIntoView({
        behavior: "smooth"
    });
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Code to Build the Nav Menu
// For loop will be used to create  li > a structure.
// New fragment to store list items
const navFragment = document.createDocumentFragment();

// for loop to build the nav list based on the sections on the page
for (let i = 0; i < sectionList.length; i++) {
    let newItem = document.createElement("li");
    let newBtn = document.createElement("button");
    //let newLink = document.createElement("a");
    let sectionData = sectionList[i].getAttribute("data-nav"); // Get data attribute of section
    let sectionId = sectionList[i].id;  // Get id of section
    newItem.className = sectionId;  // Set the class name of the li tag to use the section id
    //newLink.className = "menu-link";  // Set the class name of the anchor tag to menu-link
    newBtn.id = sectionId;
    newBtn.className = " menu-link";
    newBtn.setAttribute("type", "button");
    //newLink.href = "#" + sectionId;  // Set the href of anchor tag to use the section id
    //newLink.innerText = sectionData;  // Set the anchor text to use the data-nav attirbute value
    newBtn.innerText = sectionData;
    //newItem.appendChild(newLink);  // Append the anchor tag to the li tag
    newItem.appendChild(newBtn);
    navFragment.appendChild(newItem);  // Append the li and anchor to the fragment
}

// Append the nav fragment to the ul with id navbar-list
document.querySelector("ul#navbar-list").appendChild(navFragment);
// Add Event Listener to navbar-list
document.querySelector("ul#navbar-list").addEventListener('click',scrollTo);





/**
* Intersection Observer w/o inline function.
* The following IO code is no longer used in favor of IO code in the next section
* that includes an inline function. This code will remain in the project file as
* a reference.
* The variable "sectionList" that was previously declared in the global variables
* section will be used as the observer targets.
*/

/**
//  Create variable for the root element
const sectionContainer = document.querySelector("section.section-container");

//  Intersection Observer Options
const sectionIoOptions = {
    root: sectionContainer,  // Set the section-container as the root element 
    rootMargin: "-25% 0px -75% 0px",
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
        entry.target.classList.toggle("active-section", entry.isIntersecting);
    });
};
*/


/**
* Intersection Observer with inline function
* The variable "sectionList" that was previously declared in the global variables
* section will be used as the observer targets
*/

//  Create variable for the root element
const sectionContainer = document.querySelector("section.section-container");

//  Intersection Observer Options
const sectionIoOptions = {
    root: sectionContainer,  // Set the section-container as the root element 
    rootMargin: "-25% 0px -75% 0px",
    threshold: 0  // Default value.  Element will be observed as soon as one pixel is visable
}; 

//  Create the Intersection Observer with inline function to toggle class
const sectionIoObserver = new IntersectionObserver ((entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("active-section", entry.isIntersecting);
        //document.querySelector("li." + entry.target.id).classList.toggle("active-section", entry.isIntersecting);
        document.querySelector(".menu-link#" + entry.target.id).classList.toggle("active-section", entry.isIntersecting);
    });
},sectionIoOptions);

//  Set the intersection observer targets
sectionList.forEach(section => {
    sectionIoObserver.observe(section);
});




/**
 * End Main Functions
*/
