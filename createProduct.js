 export let createProductCard=(products,productElement,findProduct,pageType)=>{

    for(let product of products){

        //     productElement.innerHTML=`<div class="card card-vertical d-flex direction-column relative shadow">
        //     <div class="card-image-container">
        //          <img class="card-image" src="https://uilight.netlify.app/assets/shoes.jpg" alt="shoes">
        //     </div>
        //     <div class="card-details">
        //          <div class="card-title">Premium Collection</div>
        //          <div class="card-description">
        //               <p class="card-des">Men Sneakers</p>
        //               <p class="card-price">
        //                  Rs. 1750
        //                     <span class="price-strike-through">Rs. 2499</span>
        //                  <span class="discount">(30% OFF)</span>
        //               </p>
        //          </div>
        //          <div class="cta-btn">
        //               <button class="button btn-primary btn-icon cart-btn d-flex                          align-center justify-center gap cursor btn-margin">
        //               <img src="/assets/cart-white.png" alt="cart"> 
        //                 Add To Cart
        //               </button>
        //          </div>
        //     </div>
        // </div>`
        
        
        let productCard=document.createElement("div")
        productCard.classList.add("card",
              "card-vertical",
               "d-flex" ,
               "direction-column",
                "relative",
              "shadow"
              )
        productElement.appendChild(productCard)
        //image container
        
        let imageContainer=document.createElement("div")
        imageContainer.classList.add("card-image-container")
        let prodImg=document.createElement("img")
        prodImg.classList.add("card-image")
        prodImg.src=product.img
        imageContainer.appendChild(prodImg)
        productCard.appendChild(imageContainer)
        
        //card detaissssss
        
        let cardDetails=document.createElement("div");
        productCard.appendChild(cardDetails)
        // card title
        let cardTitle=document.createElement("div");
        cardTitle.classList.add("card-title")
        cardTitle.innerText=product.brand;
        cardDetails.appendChild(cardTitle)
        // card description
         
        let cardDes=document.createElement("div");
        productCard.appendChild(cardDes)
        let prodPrice=document.createElement("p");
        let prodDes=document.createElement("p");
        prodDes.classList.add("card-des")
        prodDes.innerText=product.name;
        prodPrice.classList.add("card-price","d-flex","align-end","gap-sm")
        prodPrice.innerText=`Rs ${product.newPrice} `
        cardDes.appendChild(prodPrice);
        cardDes.appendChild(prodDes)
        
        let priceStrike=document.createElement("span")
        priceStrike.innerText=` Rs ${product.oldPrice} `
        priceStrike.classList.add("price-strike-through")
        prodPrice.appendChild(priceStrike)
        let prodDiscnt=document.createElement("span")
        prodDiscnt.classList.add("discount")
        prodDiscnt.innerText=`${product.discount} % Off`
        prodPrice.appendChild(prodDiscnt);
        
        const ratings = document.createElement("p");
        ratings.classList.add("d-flex", "align-center");
    
        const rating = document.createElement("span");
        rating.innerText = product.rating;
        ratings.appendChild(rating);

       const star = document.createElement("span");
       star.classList.add("material-icons-outlined", "star");
       star.innerText = "star";
       ratings.appendChild(star);
       cardDes.appendChild(ratings);
      //  cardDetailsContainer.appendChild(descriptionContainer);
        
        let cta_btn=document.createElement("div");
        cta_btn.classList.add("cta-btn")
        productCard.appendChild(cta_btn)
        
        let btn=document.createElement("button")
        btn.classList.add("button","btn-primary","btn-icon","cart-btn","d-flex","align-center","justify-center","gap",
           "cursor","btn-margin")
           btn.setAttribute("data-id",product._id)
        
        cta_btn.appendChild(btn);
        let cartImage=document.createElement("span")
        cartImage.classList.add("material-icons-outlined", "nav-icon")
        cartImage.innerText=`shopping_cart`
        let cartTitle=document.createElement("span")
        
        let cart=JSON.parse(localStorage.getItem("cart"))||[]
        let isproductInCart=findProduct(cart,product._id)     
        cartTitle.innerText=isproductInCart && pageType==="cart"
        ?"remove": isproductInCart && pageType==="products"
        ?"go to cart":"add to cart"
        btn.appendChild(cartImage)
        btn.appendChild(cartTitle)
        
        }
        
}