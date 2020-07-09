let modalTitle = document.getElementById("modal-title");
let closeBtn = document.getElementById("close-btn");
let saveBtn = document.getElementById("save-btn");
let inputFirstName = document.getElementById("inputFirstName");
let inputLastName = document.getElementById("inputLastName");
let inputAddress = document.getElementById("inputAddress");
let inputEmail = document.getElementById("inputEmail");
let inputAge = document.getElementById("inputAge");
let inputGender = document.getElementById("inputGender");
let deleteId = document.getElementById("deleteId");
let deleteLabel = document.getElementById("deleteLabel");
let deleteTitle = document.getElementById("deleteTitle");
let deleteCloseButton = document.getElementById("deleteCloseButton");
let deleteButton = document.getElementById("deleteButton");
let editId = document.getElementById("editCustomerId");
let inputEditAge = document.getElementById("inputEditAge");
let inputEditEmail = document.getElementById("inputEditEmail");
let inputEditAddress = document.getElementById("inputEditAddress");
let editTitle = document.getElementById("editTitle");
let editFormCloseButton = document.getElementById("editFormCloseButton");
let editFormButton = document.getElementById("editFormButton");


let formIsValid = {
    inputFirstName: false,
    inputLastName: false,
    inputAddress: false,
    inputEmail: false,
    inputAge: false,
    inputEditAddress: true,
    inputEditEmail: true,
    inputEditAge: true
};

function formValidation() {
    let disable = !formIsValid.inputFirstName || !formIsValid.inputLastName || !formIsValid.inputAddress || !formIsValid.inputEmail || !formIsValid.inputAge;
    saveBtn.disabled = disable;
};

function formEditValidation() {
    let disable = !formIsValid.inputEditAddress || !formIsValid.inputEditEmail || !formIsValid.inputEditAge;
    editFormButton.disabled = disable;
};

inputFirstName.addEventListener('blur', function (event) {
    let nameRegex = /^[a-zA-Z]{1,100}$/.test(event.target.value);

    if(!nameRegex) {
        inputFirstName.classList.add('is-invalid');
        inputFirstName.classList.remove('is-valid');
        formIsValid.inputFirstName = false;
        formValidation();
    } 
    
    if (nameRegex) {
        inputFirstName.classList.remove('is-invalid')
        inputFirstName.classList.add('is-valid');
        formIsValid.inputFirstName = true;
        formValidation();
    }
})

inputLastName.addEventListener('blur', function (event) {
    let nameRegex = /^[a-zA-Z]{1,100}$/.test(event.target.value);

    if(!nameRegex) {
        inputLastName.classList.add('is-invalid');
        inputLastName.classList.remove('is-valid');
        formIsValid.inputLastName = false;
        formValidation();
    } 
    
    if (nameRegex) {
        inputLastName.classList.remove('is-invalid')
        inputLastName.classList.add('is-valid');
        formIsValid.inputLastName = true;
        formValidation();
    }
})

inputAddress.addEventListener('blur', function (event) {
    let nameRegex = /^[a-zA-Z]{1,200}$/.test(event.target.value);

    if(!nameRegex) {
        inputAddress.classList.add('is-invalid');
        inputAddress.classList.remove('is-valid');
        formIsValid.inputAddress = false;
        formValidation();
    } 
    
    if (nameRegex) {
        inputAddress.classList.remove('is-invalid')
        inputAddress.classList.add('is-valid');
        formIsValid.inputAddress = true;
        formValidation();
    }
}) 

inputEditAddress.addEventListener('blur', function (event) {
    let nameRegex = /^[a-zA-Z]{1,200}$/.test(event.target.value);

    if(!nameRegex) {
        inputEditAddress.classList.add('is-invalid');
        inputEditAddress.classList.remove('is-valid');
        formIsValid.inputEditAddress = false;
        formEditValidation();
    } 
    
    if (nameRegex) {
        inputEditAddress.classList.remove('is-invalid')
        inputEditAddress.classList.add('is-valid');
        formIsValid.inputEditAddress = true;
        formEditValidation();
    }
}) 


inputEmail.addEventListener('blur', function (event) {
    let nameRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(event.target.value);

    if(!nameRegex) {
        inputEmail.classList.add('is-invalid');
        inputEmail.classList.remove('is-valid');
        formIsValid.inputEmail = false;
        formValidation();
    } 
    
    if (nameRegex) {
        inputEmail.classList.remove('is-invalid')
        inputEmail.classList.add('is-valid');
        formIsValid.inputEmail = true;
        formValidation();
    }
})

inputEditEmail.addEventListener('blur', function (event) {
    let nameRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(event.target.value);

    if(!nameRegex) {
        inputEditEmail.classList.add('is-invalid');
        inputEditEmail.classList.remove('is-valid');
        formIsValid.inputEditEmail = false;
        formEditValidation();
    } 
    
    if (nameRegex) {
        inputEditEmail.classList.remove('is-invalid')
        inputEditEmail.classList.add('is-valid');
        formIsValid.inputEditEmail = true;
        formEditValidation();
    }
})

inputAge.addEventListener('blur', function (event) {
    let value = event.target.value;
    let isValid = value >= 18 && value <= 60;

    if(!isValid) {
        inputAge.classList.add('is-invalid');
        inputAge.classList.remove('is-valid');
        formIsValid.inputAge = false;
        formValidation();
    } 

    if(isValid) {
        inputAge.classList.add('is-valid');
        inputAge.classList.remove('is-invalid');
        formIsValid.inputAge = true;
        formValidation();
    }
    
})

inputEditAge.addEventListener('blur', function (event) {
    let value = event.target.value;
    let isValid = value >= 18 && value <= 60;

    if(!isValid) {
        inputEditAge.classList.add('is-invalid');
        inputEditAge.classList.remove('is-valid');
        formIsValid.inputEditAge = false;
        formEditValidation();
    } 

    if(isValid) {
        inputEditAge.classList.add('is-valid');
        inputEditAge.classList.remove('is-invalid');
        formIsValid.inputEditAge = true;
        formEditValidation();
    }
    
})