import { menuArray } from "./assests.js";
const main = document.getElementById("main");
const order = document.getElementById("order");
const formDisplay = document.getElementById("form-display");
let pizzaQuantity = 1;
let pizzaResult = 14;
let hamburgerQuantity = 1;
let hamburgerResult = 12;
let beerQuantity = 1;
let beerResult = 12;

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
     <button class="circle" data-id = "${item.id}">+</button> 
</div>
    `
main.innerHTML += myMenu;
const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {
    circle.addEventListener("click", () => {
            if(circle.dataset.id == 0) {
                getPizza()
                circle.disabled = true
                
            }else if(circle.dataset.id == 1) {
                getHamburger()
                circle.disabled = true

            }else if(circle.dataset.id == 2)  {
                getBeer()
                circle.disabled = true

            }
        })
    })   
}

function getPizza(){
    
    let myOrder = document.createElement('div');
    myOrder.classList.add('your-order');
    myOrder.innerHTML = `
            <div class="first-order pizza">
                <div>${menuArray[0].name}</div>
                <div class = "pizza-price">$${menuArray[0].price}</div>
                <div>
                    <span class="quantity">Qty: 1</span>
                    <button id="add-btn-pizza">+</button>
                    <button id="subtract-btn-pizza">-</button>
                </div>
               
            </div>
`;
order.appendChild(myOrder);
const addBtnPizza = document.getElementById("add-btn-pizza")
const subtractBtnPizza = document.getElementById("subtract-btn-pizza")
addBtnPizza.addEventListener("click", (event)=>{
    event.preventDefault()
    getMorePizza()
})
subtractBtnPizza.addEventListener("click", (event)=>{
    event.preventDefault()
    getLessPizza()
})
}

function getMorePizza(){
    
    pizzaResult += Number( `${menuArray[0].price}`)
    console.log(pizzaResult)
    const pizzaPrice = document.querySelector(".pizza-price")
    const qty = document.querySelector(".quantity");
    pizzaPrice.textContent = "$" + pizzaResult
    pizzaQuantity += 1;
    qty.textContent = ` Qty: ${pizzaQuantity}`
    const subtractBtnPizza = document.getElementById("subtract-btn-pizza")
    subtractBtnPizza.disabled = false
}

function getLessPizza(){
    pizzaResult -= Number( `${menuArray[0].price}`)
    console.log(pizzaResult)
    const pizzaPrice = document.querySelector(".pizza-price")
    const qty = document.querySelector(".quantity");
    pizzaQuantity -= 1;
    if( pizzaQuantity >= 0 &&  pizzaResult >= 0 ){
        qty.textContent = ` Qty: ${pizzaQuantity}`
        pizzaPrice.textContent = "$" + pizzaResult        
    }else if( (pizzaQuantity == 0|| -14) &&  (pizzaResult == 0|| -1) ){
        const subtractBtnPizza = document.getElementById("subtract-btn-pizza")
        subtractBtnPizza.disabled = true

    }
   
}

function getHamburger(){
    let myOrder = document.createElement('div');
    myOrder.classList.add('your-order');
    myOrder.innerHTML = `
        <div class = "hamburger third-order">
            <div>${menuArray[1].name}</div>
            <div class = "burger-price" >${"$" + menuArray[1].price}</div>
            <div>
                    <span class = "burger-quantity" >Qty: 1</span>
                    <button id= "add-btn-burger" >+</button>
                    <button id = "subtract-btn-burger" >-</button>
                </div>
               
        </div>
`
   
order.appendChild(myOrder);
const addBtnBurger = document.getElementById("add-btn-burger")
const subtractBtnBurger = document.getElementById("subtract-btn-burger")
addBtnBurger.addEventListener("click", (event)=> {
    event.preventDefault()
    getMoreHamBurger()
})
subtractBtnBurger.addEventListener("click", (event)=> {
    event.preventDefault()
    getLessHamBurger()
})

}
function getMoreHamBurger(){
    const subtractBtnBurger = document.getElementById("subtract-btn-burger")
    subtractBtnBurger.disabled = false;
    hamburgerResult += Number( `${menuArray[1].price}`)
    console.log(hamburgerResult)
    const burgerPrice = document.querySelector(".burger-price")
    const qty = document.querySelector(".burger-quantity");
    burgerPrice.textContent = "$" + hamburgerResult
    hamburgerQuantity += 1;
    qty.textContent = ` Qty: ${hamburgerQuantity}`
}

function getLessHamBurger(){
    hamburgerResult -= Number( `${menuArray[1].price}`)
    console.log(hamburgerResult)
    const burgerPrice = document.querySelector(".burger-price")
    const qty = document.querySelector(".burger-quantity");
    hamburgerQuantity -= 1;
    if( hamburgerQuantity >= 0 &&  hamburgerResult >= 0 ){
        qty.textContent = ` Qty: ${hamburgerQuantity}`
        burgerPrice.textContent = "$" + hamburgerResult
    }else if( (hamburgerQuantity == 0|| -12) &&  (hamburgerResult == 0|| -1) ){
        const subtractBtnBurger = document.getElementById("subtract-btn-burger")
        subtractBtnBurger.disabled = true
        console.log("too low")

    }
   
}

function getBeer(){
    let myOrder = document.createElement('div');
    myOrder.classList.add('your-order');
    myOrder.innerHTML = `
            <div class="second-order beer">
                <div>${menuArray[2].name}</div>
                <div class = "beer-price">${'$' + menuArray[2].price}</div>
                <div>
                    <span class="beer-quantity">Qty: 1</span>
                    <button id="add-btn-beer">+</button>
                    <button id="subtract-btn-beer">-</button>
                </div>
               
            </div>
`;
order.appendChild(myOrder);
const addBtnBeer = document.getElementById("add-btn-beer")
const subtractBtnBeer = document.getElementById("subtract-btn-beer")
addBtnBeer.addEventListener("click", (event)=> {
    event.preventDefault();
    getMoreBeer()
})
subtractBtnBeer.addEventListener("click", (event)=> {
    event.preventDefault();
    getLessBeer()
})
}


function getMoreBeer(){
    const subtractBtnBeer = document.getElementById("subtract-btn-beer")
    subtractBtnBeer.disabled = false
    beerResult += Number( `${menuArray[2].price}`)
    console.log(beerResult)
    const beerPrice = document.querySelector(".beer-price")
    const qty = document.querySelector(".beer-quantity");
    beerPrice.textContent = "$" + beerResult
    beerQuantity += 1;
    qty.textContent = ` Qty: ${beerQuantity}`
}

function getLessBeer(){
    beerResult -= Number( `${menuArray[2].price}`)
    console.log(beerResult)
    const beerPrice = document.querySelector(".beer-price")
    const qty = document.querySelector(".beer-quantity");
    beerQuantity -= 1;
    if( beerQuantity >= 0 &&  beerResult >= 0 ){
        qty.textContent = ` Qty: ${beerQuantity}`
        beerPrice.textContent = "$" + beerResult
    }else if( (beerQuantity == 0|| -12) &&  (beerResult == 0|| -1) ){
        const subtractBtnBeer = document.getElementById("subtract-btn-beer")
    subtractBtnBeer.disabled = true
        console.log("too low")

    }
   
}

// function handleClicks(event){
//     const just = event.target
//     if(just.classList.contains("your-order")) {
//         if(just.textContent === "Pizza"){
//             console.log("na pizza ohhh")
//         }
//     }
    
// }

// function add(a,b) {
//     let num1 = Number(a);
//     let num2 = Number(b)
//     let price = num1 + num2;
//     console.log(price)
//     let myOrder = ""
//     myOrder = `
//     <div class="your-order">
//         <div class = total-container>
//         <div class = "total-price-text"></div>
//         <div class = "total-price"></div>
//         </div
       
//     </div>
// `

// order.innerHTML += myOrder
// const total = document.querySelector(".total-price");
// const totalText = document.querySelector(".total-price-text");
// total.textContent = "$" + price;
// totalText.textContent = "Total price ";
// completOrderBtn()
// }

// function completOrderBtn() {
//     let myOrder = ""
//     myOrder = `
//     <button class="complet-order-btn">
//         Complet oder
//         </div
       
//     </div>
// `
// order.innerHTML += myOrder;
// add( menuArray[0].price, menuArray[1].price)
// const completOrderBtn = document.querySelector(".complet-order-btn");
// completOrderBtn.addEventListener("click", () => {
//     console.log("complete order");
//     getForm() 
// })
// }

// function getForm() {

//     let myOrder = ""
//     myOrder = 
//     `
//     <form  id="myForm" method = "post>
//         <div class="display">Your Order</div>
//         <div class="form-el">
//             <input type="text" id = "food" required placeholder = "Enter your name" name = "name" id="name" aria-label="name">
//             <input type="tel" required placeholder = "Enter your number" name = "number" id="number" aria-label="number">
//             <input type="tel" required  placeholder = "Enter cvv" name = "tel" id= "card-number" aria-label="card-number">
//         </div>
//         <button  type="submit" class = "pay-btn">Pay</button>
//     </form>
//     `
//     formDisplay.innerHTML += myOrder;
//     order.appendChild(formDisplay) 
//     const payBtn = document.querySelector(".pay-btn");
//     payBtn.addEventListener("click", (event) => {
//         event.preventDefault();
//         console.log("food")
//         showCheckOutPage()
        
//     })
// }

// function showCheckOutPage() {
   
//     formDisplay.textContent =""
//     order.textContent = ""
//     main.innerHTML += `<div class = "thank-you-msg">
//     <div>thank you for buying</div>

//     </div>`
//     console.log("thank you")
// }
 
