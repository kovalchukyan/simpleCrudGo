let searchCustomer = document.getElementById("search-customer");
let sortBtn = document.getElementById("sort-btn");

let state = {
    sort: 'ASC',
    searchValue: '',
    customers: [
        { name: 'Yan', lastname: 'Kovalchuk', age: 27, gender: 'Male', email: 'user@mail.com', city: 'Tallinn', isEdit: false },
        { name: 'John', lastname: 'Wick', age: 51, gender: 'Male', email: 'john@mail.com', city: 'Boston', isEdit: false }
        ]
};


searchCustomer.addEventListener('keyup', function (event) {
    state.searchValue = event.target.value.toLowerCase();
    let filteredCustomers = state.customers.filter(function (customer) {
        return customer.name.toLowerCase().includes(state.searchValue);
    });

    console.log(filteredCustomers);
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

    console.log(sortedCustomers);
});