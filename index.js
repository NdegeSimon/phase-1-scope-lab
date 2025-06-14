// Global scope variable
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "bob";

function changeLeastFavoriteCustomer() {
  throw new Error("Assignment to constant variable."); // ✅ Fix with period
}
