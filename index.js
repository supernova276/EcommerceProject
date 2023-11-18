import { products } from "./db/product.js";
import { createProductCard } from "./createProduct.js";
import { findProduct } from "./utils/findProduct.js";

let productElement=document.getElementById("products")
console.log(products)

let cart=JSON.parse((localStorage.getItem("cart"))) || [];
 productElement.addEventListener("click",(e)=>{
 const isProductInCart=findProduct(cart,e.target.dataset.id);
 const cartbutton=e.target;
 if(!isProductInCart){
    
 const  productsAddtoCart=products.filter(({_id})=>_id===e.target.dataset.id)
 cart=[...cart,...productsAddtoCart];
 console.log(typeof productsAddtoCart)

 localStorage.setItem("cart",JSON.stringify(cart))
 console.log("hello")
 cartbutton.innerHTML="go to cart <span class='material-icons-outlined'>shopping_cart </span>"
 }
 else{
     location.href="./cart.html" //if the item is alerady in the cart it would be taken to the cart page
 }
   //it means all the prev itmes of the cart and also add productstocart
//  console.log(cart,cart[0]._id)
})
createProductCard(products,productElement,findProduct,"products")