let products = [
{
productName: 'Basketball',
priceCents: 799,
review:{
  rating: 3,
  count:227
}
},
{
productName: 'Football',
priceCents: 2199,
review:{
  rating: 5,
  count: 907
}
},
{
productName: "nivia Football Studs",
priceCents: 899,
review:{
  rating: 4.5,
  count: 2327
}
},
{
productName: `Linkin park vinyl`,
priceCents: 399,
review:{
  rating: 4.5,
  count: 7690
}
},

]  
function genreateId(){
  let ids = ""
  for(let i = 0; i < 16; i++){
    let digits = (Math.floor(Math.random()*10))
    ids += digits
  } 
  return ids
}

products.forEach((product)=>{
product.id = genreateId()
console.log(product);

}) 
