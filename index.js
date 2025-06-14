var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

upperCaseCustomerName();
console.log(customerName); // 👉 "BOB"



function setBestCustomer() {
    bestCustomer = "not Bob"; // ✅ no 'var' means it's global (not best practice, but good for learning)
}

setBestCustomer();
console.log(bestCustomer); // 👉 "not Bob"


function overwriteBestCustomer(){
    bestCustomer="maybe bob"
}
overwriteBestCustomer()
console.log(bestCustomer)

const leastFavoriteCustomer="Bob";
 function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer="June"
 }

 changeLeastFavoriteCustomer();
 console.log(leastFavoriteCustomer);