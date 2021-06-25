// Select Items
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// Edit Option
let editElement;
let editFlag = false;
let editID = "";

// Event Listeners

// Submit form
form.addEventListener('submit',addItem);

// Functions
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    if (value) {

    }
    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        
    } else if (value && editFlag) {

    } else {
        displayAlert('please enter value','danger');
    }
}

// Display alert
function displayAlert(text,action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // Remove alert
    setTimeout(function() {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    },1000);
}

// Local Storage

// Setup Items