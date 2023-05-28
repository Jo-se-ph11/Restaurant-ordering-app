import { menuArray } from "./assests.js";
const main = document.getElementById("main");

menuArray.forEach((menu) => {
    render(menu);
})

function render(item) {
    
let myMenu = `

<div class = "my-menu">
    
    <div class = "emojo">
        <div class = "emoji" >${item.emoji}</div>
        <div class = "para-line-height">
            <p class = "name">${item.name}</p>
            <p class = "ingredient">${item.ingredients.join(", ")}</p>
            <p class = "price">${"$" + item.price}</p>
        </div>
        
    </div>
     <div class="circle" data-id = "${item.id}">+</div> 
    </div>
    `
main.innerHTML += myMenu;

}
   
      






// `
// <div class="your-order">
//     <p class="first-order">FIRST ORDER</p>
//     <p class="second-order">SECOND ORDER</p>
//     <p class="total-price">TOTAL PRICE</p>
// </div>
// `

{/* */}