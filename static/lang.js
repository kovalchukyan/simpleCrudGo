let interfaceLang = document.getElementById("interface-lang");
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