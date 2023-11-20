
import { createHorizontalCard } from "./createhorizontalCard.js";

let wishlistContainer=document.getElementById("wishlist")
let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[]
console.log(wishlistContainer)
console.log("called from wishlist")
createHorizontalCard(wishlist,wishlistContainer);
let action;

wishlistContainer.addEventListener("click",(e)=>{
    let id=e.target.dataset.id;
    action=e.target.dataset.type;

    switch(action){
      case "remove" :

      wishlist=wishlist.filter(({_id})=>_id!==id)
      wishlistContainer.innerHTML="";   //this will update the result in realtime
      localStorage.setItem("wishlist",JSON.stringify(wishlist))
      createHorizontalCard(wishlist,wishlistContainer)
      break;

      case "wishlist" :
        location.href="./cart.html"
        //remove from the original cart
    }

})
