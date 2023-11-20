import { createHorizontalCard } from "./createhorizontalCard.js";

let cartElement=document.getElementById("cart")

let cart=JSON.parse(localStorage.getItem("cart")) || [];
let wishlist=JSON.parse(localStorage.getItem("wishlist")) || []

createHorizontalCard(cart,cartElement);

cartElement.addEventListener("click",(e)=>{

let action=e.target.dataset.type;
let id=e.target.dataset.id;

// console.log(cart)
let currele;
switch(action){

case "remove" :

cart=cart.filter(({_id})=>_id!==id)
cartElement.innerHTML="";   //this will update the result in realtime
localStorage.setItem("cart",JSON.stringify(cart))
createHorizontalCard(cart,cartElement)
break;

case "inc" :
     currele=cart.filter(({_id})=>_id===id)[0]  //currele is an array although it contains only one thing
    //so i have used the  based indexing to return the correct result
    cart=cart.filter(({_id})=>_id!==id)
    currele.quantity+=1;
    cart=[currele,...cart];
    cartElement.innerHTML="";   //this will update the result in realtime
    localStorage.setItem("cart",JSON.stringify(cart))
    createHorizontalCard(cart,cartElement)
    break;

case "dec":
     currele=cart.filter(({_id})=>_id===id)[0]  //currele is an array although it contains only one thing
    //so i have used the  based indexing to return the correct result
    cart=cart.filter(({_id})=>_id!==id)
    currele.quantity=currele.quantity>0?currele.quantity-1:currele.quantity;
    cart=[currele,...cart];
    cartElement.innerHTML="";   //this will update the result in realtime
    localStorage.setItem("cart",JSON.stringify(cart))
    createHorizontalCard(cart,cartElement)
    break;

case "wishlist":
    currele=cart.filter(({_id})=>_id===id)[0]
    wishlist=[...wishlist,currele]
    localStorage.setItem("wishlist",JSON.stringify(wishlist))
    
}
    })

let total_items=document.querySelector(".total-items")
total_items.innerText=cart.length;
let product_price=document.querySelector(".product-price")
let productPrice=cart.reduce((acc,curr)=>acc+curr.oldPrice * curr.quantity,0)
product_price.innerText=`${productPrice}`
let total_discount=document.querySelector(".total-discount")

let totalDis=cart.reduce((acc,curr)=>acc+(curr.oldPrice-curr.newPrice * curr.quantity),0)
total_discount.innerText=`${totalDis}`
let total=document.querySelector(".total");
total.innerText=productPrice-totalDis+100;

let savings=document.querySelector(".savings")
savings.innerText=`${totalDis}`