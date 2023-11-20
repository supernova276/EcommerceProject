import { products } from "./db/product.js";
import { createProductCard } from "./createProduct.js";
import { findProduct } from "./utils/findProduct.js";

let productElement=document.getElementById("products")
const filterContainer=document.querySelector(".side-bar")

let cart=JSON.parse((localStorage.getItem("cart"))) || [];
let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];
 productElement.addEventListener("click",(e)=>{
  
  let action=e.target.dataset.type;

  switch(action){

  case "add":
 const isProductInCart=findProduct(cart,e.target.dataset.id);
 const cartbutton=e.target;
 if(!isProductInCart){
    
 const  productsAddtoCart=products.filter(({_id})=>_id===e.target.dataset.id)   //this will give one product at a time
 cart=[...cart,...productsAddtoCart];
 localStorage.setItem("cart",JSON.stringify(cart))
 cartbutton.innerHTML="go to cart <span class='material-icons-outlined'>shopping_cart </span>"
 }
 else{
     location.href="./cart.html" //if the item is alerady in the cart it would be taken to the cart page
 }
   //it means all the prev itmes of the cart and also add productstocart
//  console.log(cart,cart[0]._id)
break;

case "heart":

 const isProductInWishlist=findProduct(wishlist,e.target.dataset.id);
 if(!isProductInWishlist){
    
const  productsAddtoWishList=products.filter(({_id})=>_id===e.target.dataset.id)   //this will give one product at a time
    wishlist=[...wishlist,...productsAddtoWishList];
     e.target.style="color:red"

     localStorage.setItem("wishlist",JSON.stringify(wishlist))
  }
  else{
    e.target.style="color:none";
    //remove from wishlist
  }

}})
createProductCard(products,productElement,findProduct,"products")

filterContainer.addEventListener("click",(e)=>{
  const updateProducts=products.filter(({rating})=>rating>=Number(e.target.dataset.rating));
  productElement.innerText="";
  createProductCard(updateProducts,productElement,findProduct,"products")
})