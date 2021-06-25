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

// Set Back to Default
function setBackToDefault() {
    grocery.value = '';
    editFlag = false;
    editID = "";
    submitBtn.textContent = 'submit';
}

// Local Storage
function addToLocalStorage(id,value) {

}
// Setup Items