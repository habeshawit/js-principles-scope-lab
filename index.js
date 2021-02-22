// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = "jill";


function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "bob";
}

// changeLeastFavoriteCustomer() does not reassign leastfavoritecustomer;
// Uncaught SyntaxError: Identifier 'leastFavoriteCustomer' has already been declared