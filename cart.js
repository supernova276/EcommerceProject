import { createHorizontalCard } from "./createhorizontalCard.js";

let cartElement=document.getElementById("cart")

let cart=JSON.parse(localStorage.getItem("cart")) || [];
let action;
createHorizontalCard(cart,cartElement,1);

let valueElement=document.querySelector(".count-value")
let integerValue=1;
cartElement.addEventListener("click",(e)=>{
   
    console.log(cart)
cart=cart.filter(({_id})=>_id!==e.target.dataset.id)


   cartElement.innerHTML="";   //this will update the result in realtime
   localStorage.setItem("cart",JSON.stringify(cart))
   createHorizontalCard(cart,cartElement,integerValue)
    })