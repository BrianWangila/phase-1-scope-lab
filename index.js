// Write your solution in this file!

var customerName = "bob";
console.log(customerName);

function upperCaseCustomerName(){
  return customerName.toUpperCase()
}
upperCaseCustomerName()

let bestCustomer =  function setBestCustomer() {
  return "not bob"
}
console.log(bestCustomer())

function overwriteBestCustomer(){
  var customerName = "maybe bob"
  return customerName
}
console.log(customerName);


const leastFavoriteCustomer = "not Me"

function changeLeastFavoriteCustomer(leastFavoriteCustomer){
  return leastFavoriteCustomer;
}
console.log(changeLeastFavoriteCustomer("them"))