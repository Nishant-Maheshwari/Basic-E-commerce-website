let productContainer = document.querySelector('.productContainer') 
let cartQautityDisplay = document.querySelector('.cart') 
let cartQuatity = 0

let productHTML = ``;

products.forEach((product)=>{
productHTML += `<div>
<div> ${product.productName}</div>
<div>${product.priceCents}</div>
<div>${product.review.rating}</div>
<div>${product.review.count}</div>
<button class = "cartBtn" data-product-name=${product.productName}>ADD TO CART</button>

</div> 
` 




})


productContainer.innerHTML = productHTML

let AddToCartBtn = document.querySelectorAll('.cartBtn')
console.log(AddToCartBtn); 
AddToCartBtn.forEach((button)=>{
button.addEventListener('click',()=>{
  let productName = button.dataset.productName
  
  cart.push({
    product: productName,
    quatity:1
  })
  console.log(cart);
  
  cartQuatity++;
  cartQautityDisplay.innerHTML = `Cart quatity:${cartQuatity}`
})
})