// Declare customerName in global scope
var customerName = 'bob';

// Function to return customerName
function getCustomerName() {
    return customerName;
}

// Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Declare bestCustomer variable in global scope
var bestCustomer;

// Function to set bestCustomer (global scope assignment)
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Function to overwrite the best customer (global scope assignment)
function overwriteBestCustomer(newFavorite) {
    bestCustomer = newFavorite;
}

// Function attempting to change the least favorite customer (local scope issue)
function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'initial least favorite';
    leastFavoriteCustomer = 'new least favorite';
    // This will throw an error because you cannot reassign a const variable
    // leastFavoriteCustomer = 'new least favorite';
}

// Export all necessary variables and functions
module.exports = {
    customerName,
    getCustomerName,
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    changeLeastFavoriteCustomer
};




