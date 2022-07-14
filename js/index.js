// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
 
  let onePrice = price.innerText;
  let oneValue = quantity.value;
  
  let quantityprice = onePrice * oneValue;
  
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = quantityprice;
  return quantityprice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  //const productElement = document.querySelectorAll(.product);
  let allProduct = document.getElementsByClassName('product');
  let sum = 0;
  for (let i=0; i < allProduct.length; i++){
    sum += updateSubtotal(allProduct[i]);
  };

  // ITERATION 3
  //... your code goes here
  // updates the subtotal element on each product row <tr>
   //let allProduct = updateSubtot(oneProduct); 
   // totalPrice += productTotal; 
  let totalPriceElement = document.querySelector("#total-value span");
  totalPriceElement.innerHTML = sum;
}

// ITERATION 4

function removeProduct(event) {
  //... your code goes here
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const productToRemove = target.parentNode.parentNode;
  cartElement.removeChild(productToRemove);

  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let nameElement = document.querySelector('.create-product input[type="text"]');
  let priceElement = document.querySelector('.create-product input[type="number"]');
  
  console.log(nameElement);
  console.log(priceElement);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
