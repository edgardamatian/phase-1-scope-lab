var customerName = 'bob'; // Declare and assign customerName in the global scope

function getCustomerName() {
  return customerName; // Return the value of customerName from the global scope
}

function upperCaseCustomerName() {
 customerName = 'BOB'; // Modify customerName to be 'BOB'
}

function setBestCustomer() {
    bestCustomer = 'not bob';
  }

  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }

  const leastFavoriteCustomer = 'John';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Jane';
}

// console.log(getCustomerName()); // Output: 'bob'

// upperCaseCustomerName(); // Call the function to modify the customerName variable

// console.log(getCustomerName()); // Output: 'BOB'