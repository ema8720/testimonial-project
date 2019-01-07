// create immediate invoked function 
(function(){

let customers = [];
// create a variable called index that will act as a counter
let index = 0; 
// create an object cunstructor function and we will be creating instances of an object and then create a function that works with an array 
function Customer(name, img, text){
this.name = name;
this.img = img;
this.text = text;
}

// Now we create the function that will call the constructor function
function createCustomer(name, img, text){
// full image path
let fullImg = `img/customer-${img}.jpg`;
// create a new customer instance
const customer = new Customer(name, fullImg, text);
// add to all customers
customers.push(customer);
}
// now we are going to call the create Customer function
createCustomer('john', 1, 'great service experience. Fred treated me very cordial and proffesional. He was clear and was listening to my expectations. ');
createCustomer('camila', 2, 'It was amazing the time I was with you and your family');
createCustomer('Jose Luis', 3, 'Amazing brother. Still don\'t understand him sometimes. ');

// console.log(customers);
// create the document.querySelector()with a forEach() that has an addEvent Listener inside
document.querySelectorAll('.btn').forEach(function(item) {
item.addEventListener('click', function(e){
e.preventDefault();
// console.log(event.target)
if (e.target.parentElement.classList.contains('prevBtn')){
    if (index === 0 ) {
        index = customers.length
    }
index--;
document.getElementById('customer-img').src = customers[index].img;
document.getElementById('customer-name').textContent = customers[index].name;
document.getElementById('customer-text').textContent = customers[index].text;
}

})
})



})();