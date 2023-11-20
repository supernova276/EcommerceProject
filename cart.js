import { createHorizontalCard } from "./createhorizontalCard.js";

let cartElement=document.getElementById("cart")

let cart=JSON.parse(localStorage.getItem("cart")) || [];
let action;
createHorizontalCard(cart,cartElement);

cartElement.addEventListener("click",(e)=>{

let action=e.target.dataset.type;
let id=e.target.dataset.id;

// console.log(cart)

switch(action){

case "remove" :

cart=cart.filter(({_id})=>_id!==id)
cartElement.innerHTML="";   //this will update the result in realtime
localStorage.setItem("cart",JSON.stringify(cart))
createHorizontalCard(cart,cartElement)
break;

case "inc" :
    let currele=cart.filter(({_id})=>_id===id)[0]  //currele is an array although it contains only one thing
    //so i have used the  based indexing to return the correct result
    currele.quantity+=1;
    cart=[...cart,currele];
    cartElement.innerHTML="";   //this will update the result in realtime
    localStorage.setItem("cart",JSON.stringify(cart))
    createHorizontalCard(cart,cartElement)
    break;

case "dec":
    let curr=cart.filter(({_id})=>_id===id)[0]  //currele is an array although it contains only one thing
    //so i have used the  based indexing to return the correct result
    curr.quantity=curr.quantity>0?curr.quantity-1:curr.quantity;
    cart=[...cart,curr];
    cartElement.innerHTML="";   //this will update the result in realtime
    localStorage.setItem("cart",JSON.stringify(cart))
    createHorizontalCard(cart,cartElement)
}

    })