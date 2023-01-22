console.log('JavaScript is running!');

/* longer JS block comment 
- const is a type of variable - a bit of memory that can hold a value

JS uses (can use) ANY valid CSS selector to make a connection to ANY elment on the page - it works the same way as CSS selectors do, because it's USING css selectors to find matching element(s).

the document is the DOM - the web page and all of its elements

querySelector is the method (function) that makes the connection between JS and the DOM (the elements)
*/

// step 1 - make the connection to the element(s) you want to interact with
const icon1 = document.querySelector('#acoustic');

function logThisId() {
    console.log('clicked on this element:', this.id);
}

// step 2 - decide how you want the user to interact with the obect you created in step 1
icon1.addEventListener('click', logThisId);

const icon2 = document.querySelector('#electric');
function logThisId() {
    console.log('clicked on this element:', this.id);
}
icon2.addEventListener('click', logThisId);

const icon3 = document.querySelector('#flute');
function logThisId() {
    console.log('clicked on this element:', this.id);
}
icon3.addEventListener('click', logThisId);

const icon4 = document.querySelector('#piano');
function logThisId() {
    console.log('clicked on this element:', this.id);
}
icon4.addEventListener('click', logThisId);

const icon5 = document.querySelector('#trombone');
function logThisId() {
    console.log('clicked on this element:', this.id);
}
icon5.addEventListener('click', logThisId);

const icon6 = document.querySelector('#tuba');
function logThisId() {
    console.log('clicked on this element:', this.id);
}
icon6.addEventListener('click', logThisId);

const icon7 = document.querySelector('#bird');
function logThisId() {
    console.log('clicked on this element:', this.id);
}
icon7.addEventListener('click', logThisId);

const icon8 = document.querySelector('#book');
function logThisId() {
    console.log('clicked on this element:', this.id);
}
icon8.addEventListener('click', logThisId);

const icon9 = document.querySelector('#moon');
function logThisId() {
    console.log('clicked on this element:', this.id);
}
icon9.addEventListener('click', logThisId);

const icon10 = document.querySelector('#airplane');
function logThisId() {
    console.log('clicked on this element:', this.id);
}
icon10.addEventListener('click', logThisId);