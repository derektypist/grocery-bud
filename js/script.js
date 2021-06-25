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

// Clear Items
clearBtn.addEventListener('click',clearItems);



// Functions
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    if (value) {

    }
    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        const element = document.createElement('article');
        // Add class
        element.classList.add('grocery-item');
        // Add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
                    <div class="btn-container">
                        <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
                        <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
                        </div>`;

        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');

        deleteBtn.addEventListener('click',deleteItem);
        editBtn.addEventListener('click',editItem);
        // Append child
        list.appendChild(element);
        // Display alert
        displayAlert("item added to the list","success");
        // Show container
        container.classList.add('show-container');
        // Add to local Storage
        addToLocalStorage(id,value);
        // Set Back to Default
        setBackToDefault();
    } else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert("value changed","success");
        // Edit local Storage
        editLocalStorage(editID,value);
        setBackToDefault();
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

// Clear Items

function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    if (items.length >0) {
        items.forEach(function(item) {
            list.removeChild(item);
        });
    }

    container.classList.remove('show-container');
    displayAlert("empty list","danger");
    setBackToDefault();
}

// Delete Item

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if (list.children.length===0) {
        container.classList.remove('show-container');
    }
    displayAlert("item removed","danger");
    setBackToDefault();
    // Remove from local Storage
    removeFromLocalStorage(id);
}

// Edit Item

function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;

    // Set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;

    // Set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";

}

// Set Back to Default
function setBackToDefault() {
    grocery.value = '';
    editFlag = false;
    editID = "";
    submitBtn.textContent = 'submit';
}

// Local Storage
function addToLocalStorage(id,value) {
    const grocery = {id,value};
    let items = getLocalStorage();
    items = items.filter(function(item) {
        if (item.id !==item) {
            return item;
        }
    });
    localStorage.setItem("list",JSON.stringify(items));

}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();

}

function editLocalStorage(id,value) {
    

}

function getLocalStorage() {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}

/*

    localStorage API
    setItem
    getItem
    removeItem
    Save As Strings
*/

localStorage.setItem("orange",JSON.stringify(["item","item2"]));
const oranges = JSON.parse(localStorage.getItem("orange"));
localStorage.removeItem("orange");

// Setup Items