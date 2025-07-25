let productContainer = document.querySelector('.productContainer') 
let cartQuantityDisplay = document.querySelector('.cart') 
let cartQuantity = 0

let productHTML = ``;

products.forEach((product)=>{
productHTML += `<div>
<div> ${product.productName}</div>
<div>${product.priceCents}</div>
<div>${product.review.rating}</div>
<div>${product.review.count}</div>
<button class = "cartBtn" data-product-id=${product.productId}>ADD TO CART</button>

</div> 
` 




})


productContainer.innerHTML = productHTML

let AddToCartBtn = document.querySelectorAll('.cartBtn')
console.log(AddToCartBtn);  

AddToCartBtn.forEach((button) => {
const productId = button.dataset.productId
let matchingitem;
button.addEventListener('click',()=>{
  cart.push({
    productId:productId,
    quatity:1
  })
  console.log(cart);
  
})
})


// AddToCartBtn.forEach((button)=>{
//   const ProductName = button.dataset.productName
//   let matchingitem;
// button.addEventListener('click',()=>{
//   console.log(ProductName); 
//   cart.forEach((item)=>{
//     if(item.productName === ProductName){
//  matchingitem = item}
//   }) 

//   if(matchingitem){
//     matchingitem.quantity++
//   }else{
// cart.push({
//     productName:ProductName,
//     quantity:1
//   })
  
//   }
  // console.log(cart);
  
  
  

  
//   cartQuantity++;
//   cartQuantityDisplay.innerHTML = `Cart quatity:${cartQuantity}`
// })
// }) 
// console.log(products);

