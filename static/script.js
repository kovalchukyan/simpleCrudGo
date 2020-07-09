let interfaceLang = document.getElementById("interface-lang");
let customersTable = document.getElementById("customers-table");
let searchCustomer = document.getElementById("search-customer");
let sortBtn = document.getElementById("sort-btn");
let navigationTitle = document.getElementById("nav-title");
let createBtnTitle = document.getElementById("create-title");
let modalTitle = document.getElementById("modal-title");
let closeBtn = document.getElementById("close-btn");
let saveBtn = document.getElementById("save-btn");
let firstNameLabel = document.getElementById("firstNameLabel");
let lastNameLabel = document.getElementById("lastNameLabel");
let cityLabel = document.getElementById("cityLabel");
let emailLabel = document.getElementById("emailLabel");
let ageLabel = document.getElementById("ageLabel");
let genderLabel = document.getElementById("genderLabel");
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

function deleteCustomer(id) {
    deleteId.value = id;
};

function editCustomer(customer) {
    //let id = customer.parentNode.children[0].innerHTML;
    let age = customer.parentNode.children[5].innerHTML;
    let city = customer.parentNode.children[3].innerHTML;
    let email = customer.parentNode.children[4].innerHTML;
    
    console.log(customer.parentNode.children[0].innerHTML);
    editId.value = customer.parentNode.children[0].innerHTML;
    inputEditAge.value = age;
    inputEditEmail.value = email;
    inputEditAddress.value = city;
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


let state = {
    interfaceLang: 'RU',
    sort: 'ASC',
    searchValue: '',
    customers: [
        { name: 'Yan', lastname: 'Kovalchuk', age: 27, gender: 'Male', email: 'user@mail.com', city: 'Tallinn' },
        { name: 'John', lastname: 'Wick', age: 51, gender: 'Male', email: 'john@mail.com', city: 'Boston' }
        ]
};

const dictionaries = {
    EN: {
        title: 'Customers list',
        createBtnTitle: 'Create new customer',
        closeBtn: 'Close',
        saveBtn: 'Save',
        firstName: 'First name',
        lastName: 'Last name',
        city: 'City',
        email: 'E-mail',
        age: 'Age',
        gender: 'Gender',
        deleteLabel: 'Delete customer',
        deleteTitle: 'Are you sure?',
        deleteCloseButton: 'Close',
        deleteButton: 'Delete',
        editTitle: 'Edit customer',
        editFormCloseButton: 'Close',
        editFormButton: 'Edit'
    },
    RU: {
        title: 'Список заказчиков',
        createBtnTitle: 'Создать нового заказчика',
        closeBtn: 'Закрыть',
        saveBtn: 'Сохранить',
        firstName: 'Имя',
        lastName: 'Фамилия',
        city: 'Город',
        email: 'Э-майл',
        age: 'Возраст',
        gender: 'Пол',
        deleteLabel: 'Удалить пользователя',
        deleteTitle: 'Вы уверены?',
        deleteCloseButton: 'Закрыть',
        deleteButton: 'Удалить',
        editTitle: 'Изменить пользователя',
        editFormCloseButton: 'Закрыть',
        editFormButton: 'Изменить'
    }
}



interfaceLang.addEventListener('click', function (event) {
    let lang = state.interfaceLang;
    event.preventDefault();
    if(lang === 'EN') {
        interfaceLang.innerHTML = 'RU';
        state.interfaceLang = 'RU';
    } else {
        interfaceLang.innerHTML = 'EN';
        state.interfaceLang = 'EN';
    }

    navigationTitle.innerHTML = dictionaries[lang].title;
    createBtnTitle.innerHTML = dictionaries[lang].createBtnTitle;
    modalTitle.innerHTML = dictionaries[lang].createBtnTitle;
    closeBtn.innerHTML = dictionaries[lang].closeBtn;
    saveBtn.innerHTML = dictionaries[lang].saveBtn;
    firstNameLabel.innerHTML = dictionaries[lang].firstName;
    lastNameLabel.innerHTML = dictionaries[lang].lastName;
    cityLabel.innerHTML = dictionaries[lang].city;
    emailLabel.innerHTML = dictionaries[lang].email;
    ageLabel.innerHTML = dictionaries[lang].age;
    genderLabel.innerHTML = dictionaries[lang].gender;
    deleteLabel.innerHTML = dictionaries[lang].deleteLabel;
    deleteTitle.innerHTML = dictionaries[lang].deleteTitle;
    deleteCloseButton.innerHTML = dictionaries[lang].deleteCloseButton;
    deleteButton.innerHTML = dictionaries[lang].deleteButton;
    editTitle.innerHTML = dictionaries[lang].editTitle;
    editFormCloseButton.innerHTML = dictionaries[lang].editFormCloseButton;
    editFormButton.innerHTML = dictionaries[lang].editFormButton;
    
});

searchCustomer.addEventListener('keyup', function (event) {
    state.searchValue = event.target.value.toLowerCase();
    let filteredCustomers = state.customers.filter(function (customer) {
        return customer.name.toLowerCase().includes(state.searchValue);
    });

    getCustomers(filteredCustomers);
});

sortBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let sortedCustomers = state.customers.sort(function (a, b) {
        if(state.sort === 'ASC') {
            state.sort = 'DESC';
            return a.name < b.name ? -1 : 1;
        } else {
            state.sort = 'ASC';
            return a.name > b.name ? -1 : 1;
        }
    });

    getCustomers(sortedCustomers);
    console.log(state.customers);
});