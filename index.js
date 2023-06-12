import { menuArray } from "./assests.js";
const main = document.getElementById("main");
const order = document.getElementById("order");
const smallOrder = document.querySelector(".btn-display")
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
                if(smallOrder.textContent == ""){
                    console.log("Joseph")
                    completOrderBtn()
                }
                
            }else if(circle.dataset.id == 1) {
                getHamburger()
                circle.disabled = true
                if(smallOrder.textContent == ""){
                    console.log("Joseph")
                    completOrderBtn()
                }

            }else if(circle.dataset.id == 2)  {
                getBeer()
                circle.disabled = true
                if(smallOrder.textContent == ""){
                    console.log("Joseph")
                    completOrderBtn()
                }

            }
        })
    })  
      
}

function getPizza(){
    let newOrder = document.createElement("div")
    let myOrder = ""
    myOrder = `
        <div class="your-order" id = "pizza">
            <div class="first-order pizza">
                <div>${menuArray[0].name}</div>
                <div class = "pizza-price">$${menuArray[0].price}</div>
                <div>
                    <span class="quantity">Qty: 1</span>
                    <button id="add-btn-pizza">+</button>
                    <button id="subtract-btn-pizza">-</button>
                </div>
               
            </div>
        </div>
`
newOrder.innerHTML += myOrder
order.appendChild(newOrder)
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
    let newOrder = document.createElement("div")
    let myOrder = ""
    myOrder = `
    <div class = "your-order" id = "burger" >
        <div class = "hamburger third-order">
            <div>${menuArray[1].name}</div>
            <div class = "burger-price" >${"$" + menuArray[1].price}</div>
            <div>
                    <span class = "burger-quantity" >Qty: 1</span>
                    <button id= "add-btn-burger" >+</button>
                    <button id = "subtract-btn-burger" >-</button>
                </div>
               
        </div>
    </div>
`
   
newOrder.innerHTML += myOrder
order.appendChild(newOrder)
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
    hamburgerResult -= Number( `${menuArray[1].price}`);
    console.log(hamburgerResult);
    const burgerPrice = document.querySelector(".burger-price")
    const qty = document.querySelector(".burger-quantity");
    hamburgerQuantity -= 1;
    if( hamburgerQuantity >= 0 &&  hamburgerResult >= 0 ){
        qty.textContent = ` Qty: ${hamburgerQuantity}`
        burgerPrice.textContent = "$" + hamburgerResult;
    }else if( (hamburgerQuantity == 0|| -12) &&  (hamburgerResult == 0 || -1) ){
        const subtractBtnBurger = document.getElementById("subtract-btn-burger")
        subtractBtnBurger.disabled = true;
        console.log("too low");

    }
   
}

function getBeer(){
    let newOrder = document.createElement("div")
    let myOrder = ""
        myOrder = `
        <div class="your-order" id = "beer">
            <div class="second-order beer">
                <div>${menuArray[2].name}</div>
                <div class = "beer-price">${"$" + menuArray[2].price}</div>
                <div>
                    <span class="beer-quantity">Qty: 1</span>
                    <button id="add-btn-beer">+</button>
                    <button id="subtract-btn-beer">-</button>
                </div>
               
            </div>
        </div>
`
newOrder.innerHTML += myOrder
order.appendChild(newOrder)
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

function completOrderBtn() {
    const displayBtn = document.querySelector(".btn-display")
        let myOrder = ""
        myOrder = `
        <div>
            <button class="complet-order-btn">
                Complet oder
            </button>
        </div>
    `
    displayBtn.innerHTML += myOrder
    const btn = document.querySelector(".complet-order-btn")
    btn.addEventListener("click", () => {
        const pizza = document.getElementById("pizza");
        const burger = document.getElementById("burger");
        const beer = document.getElementById("beer");
        getAmount()
        const circles = document.querySelectorAll(".circle");
        btn.disabled = true;
        circles.forEach(circle => {
            circle.disabled = true;
        })
        if(order.contains(pizza) && order.contains(beer) && order.contains(burger)){

            disableBeerIncrementAndDecrementBtn()
            disableBurgerIncrementAndDecrementBtn()
             disablePizzaIncrementAndDecrementBtn()
             
        }else if(order.contains(burger) && order.contains(beer)){

            disableBeerIncrementAndDecrementBtn()
            disableBurgerIncrementAndDecrementBtn()
            
        }  else if(order.contains(pizza) && order.contains(burger)) {

            disableBurgerIncrementAndDecrementBtn()
            disablePizzaIncrementAndDecrementBtn()
            
        }else if(order.contains(pizza) && order.contains(beer)) {

            disablePizzaIncrementAndDecrementBtn()
            disableBeerIncrementAndDecrementBtn()

        }else if(order.contains(pizza)){

            disablePizzaIncrementAndDecrementBtn()
        }else if(order.contains(burger)){

            disableBurgerIncrementAndDecrementBtn()
        }else if(order.contains(beer)){

            disableBeerIncrementAndDecrementBtn()
        }
            getForm()

    })
}

function  disablePizzaIncrementAndDecrementBtn() {
    const addBtnPizza = document.getElementById("add-btn-pizza");
    const subtractBtnPizza = document.getElementById("subtract-btn-pizza");
    subtractBtnPizza.disabled = true;
    addBtnPizza.disabled = true;
}

function disableBurgerIncrementAndDecrementBtn() {
    const addBtnBurger = document.getElementById("add-btn-burger")
    const subtractBtnBurger = document.getElementById("subtract-btn-burger")
    addBtnBurger.disabled = true;
    subtractBtnBurger.disabled = true;
}

function  disableBeerIncrementAndDecrementBtn(){
   
    const addBtnBeer = document.getElementById("add-btn-beer")
    const subtractBtnBeer = document.getElementById("subtract-btn-beer")
    subtractBtnBeer.disabled = true;
    addBtnBeer.disabled = true;

}

function getAmount(){
   const pizza = document.getElementById("pizza");
   const burger = document.getElementById("burger");
   const beer = document.getElementById("beer");
   const beerPrice = document.querySelector(".beer-price")
   const burgerPrice = document.querySelector(".burger-price")
   const pizzaPrice = document.querySelector(".pizza-price")
   const total = document.querySelector(".total-price");
   if(order.contains(pizza) && order.contains(beer) && order.contains(burger)){
      
       let myPizzaPrice  = removeDollarSign(`${pizzaPrice.textContent} `)
       let myBeerPrice = removeDollarSign(`${beerPrice.textContent} `)
       let myBurgerPrice = removeDollarSign(`${burgerPrice.textContent} `)
       getTotalOfItems( myPizzaPrice,myBurgerPrice,myBeerPrice)

    }else if(order.contains(pizza) && order.contains(beer)) {
       
        let myBeerPrice = removeDollarSign(`${beerPrice.textContent} `)
        let myPizzaPrice  = removeDollarSign(`${pizzaPrice.textContent} `)
        getTotalOfItems( myPizzaPrice,myBeerPrice)

   }else if(order.contains(pizza) && order.contains(burger)){

        let myPizzaPrice  = removeDollarSign(`${pizzaPrice.textContent} `)
        let myBurgerPrice = removeDollarSign(`${burgerPrice.textContent} `)
        getTotalOfItems( myPizzaPrice,myBurgerPrice)
        
   }else if(order.contains(burger) && order.contains(beer)){

        let myBurgerPrice = removeDollarSign(`${burgerPrice.textContent} `)
        let myBeerPrice = removeDollarSign(`${beerPrice.textContent} `)
        getTotalOfItems( myBeerPrice,myBurgerPrice)
        
   }else if(order.contains(burger)){

        let myBurgerPrice = removeDollarSign(`${burgerPrice.textContent} `)
        getTotalOfItems(myBurgerPrice)
        
   }else if( order.contains(beer)){
    
        let myBeerPrice = removeDollarSign(`${beerPrice.textContent} `)
        getTotalOfItems( myBeerPrice)

   }else if(order.contains(pizza)){

        let myPizzaPrice  = removeDollarSign(`${pizzaPrice.textContent} `)
        getTotalOfItems(myPizzaPrice)

   }    
}

function removeDollarSign(){
    let arr = [];
    for(let i = 0; i < arguments.length; i++){

        let numberWithDollar = Number(arguments[i].replace("$", ""));
        arr.push( numberWithDollar)
       
    }
    return arr    
}

function getTotalOfItems(){
    const totalContainer = document.querySelector(".total")
    let displayTotal = document.createElement("div")
    let myOrder = ""
    myOrder = `
    <div class="your-order">
        <div class = total-container>
            <div class = "total-price-text"></div>
            <div class = "total-price"></div>
        </div
       
    </div>
`
displayTotal.innerHTML += myOrder
totalContainer.appendChild(displayTotal)
const total = document.querySelector(".total-price");
const totalText = document.querySelector(".total-price-text");

totalText.textContent = "Total price ";
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        const arg = arguments[i]
        if(Array.isArray(arg)){
            for(let j = 0; j < arg.length; j++)
                sum += arg[j]
        }else {
            sum += arg
        }
    }
    total.textContent =  sum
}

function getForm() {
    let form = document.createElement("div");
    let myOrder = ""
    myOrder = 
    ` 
    <form  id="myForm" method = "#">
        <div class="display">Enter Your Details</div>
        <div class="form-el">
            <input type="text" required placeholder = "Enter your name" name = "name" id="name" aria-label="name">
            <input type="tel" required placeholder = "Enter your number" name = "number" id="number" aria-label="number">
            <input type="tel" required  placeholder = "Enter card number" name = "tel" id= "card-number" aria-label="card-number">
        </div>
        <button  type="submit" class = "pay-btn">Pay</button>
    </form>
    `
    form.innerHTML += myOrder;
    formDisplay.appendChild(form)
    const name = document.getElementById("name");
    const myNumber = document.getElementById("number")
    const cardNumber = document.getElementById("card-number");
  
    const payBtn = document.querySelector(".pay-btn");
    payBtn.addEventListener("click", (e)=> {
        e.preventDefault()
        if(name.value != "" && myNumber.value != "" && cardNumber.value != "" ) {
            showCheckOutPage()
            // clearBase()
        }else{
          alert("oga fill the form!! No stress me abeg")
        }
      
    }, {once: true})
}

function showCheckOutPage() {
  
    main.innerHTML += `
    <div class = "thank-you-msg">
        <div>thank you for buying</div>

    </div>`
    clearBase()
}

function clearBase() {
   
    order.remove()

}
