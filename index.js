// Write your solution in this file!

var customerName = "bob";
console.log(customerName);

function upperCaseCustomerName(){
  let cust =  customerName.toUpperCase()
  customerName = cust
}


function setBestCustomer() {
  bestCustomer = "not bob"
}


function overwriteBestCustomer(){
  return bestCustomer = "maybe bob"
}


const leastFavoriteCustomer = "not Me";

function changeLeastFavoriteCustomer(){
  return leastFavoriteCustomer = "them";
}
changeLeastFavoriteCustomer()