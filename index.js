


let carts = document.querySelectorAll('.add-cart');
//localStorage.removeItem("productsInCart");
// get all carts from html
const product =[
  {
    id: 1,
    name:'Brown Bed',
    tag: 'brownbed',
    price: 5000,
    incart:0,
    image:"https://images.unsplash.com/photo-1634253539596-a4c873ae0f26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
  },
  {
    id: 2,
    name:'White big bed',
    tag:'whitebigbed',
    price:10000,
    incart:0,
    image:"https://images.unsplash.com/photo-1633809365429-2fa048a02119?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 3,
    name:'master ensuite',
    tag:'masterensuite',
    price:8000,
    incart:0,
    image:"https://images.unsplash.com/photo-1633605015660-b0f2dbad3bf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 4,
    name:'white bed',
    tag:'whitebed',
    price:7500,
    incart:0,
    image:"https://images.unsplash.com/photo-1633944095397-878622ebc01c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
  },
  {
    id: 5,
    name:'massage bed',
    tag:'massagebed',
    price:3000,
    incart:0,
    image:"https://images.unsplash.com/photo-1633893669258-938b9aac9006?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
  },
  
  {
    id: 6,
    name:'extra-white bed',
    tag:'extrawhitebed',
    price:25000,
    incart:0,
    image:"https://images.unsplash.com/photo-1633505650701-6104c4fc72c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80"
  },
  {
    id: 7,
    name:'white-headrest bed',
    tag:'whiteheadrestbed',
    price:50000,
    incart:0,
    image:"https://images.unsplash.com/photo-1633331009623-10915ddb2d83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
  },
  {
    id: 8,
    name:'simple bed',
    tag:'simplebed',
    price:15000,
    incart:0,
    image:"https://images.unsplash.com/photo-1632829401795-2745c905ac77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80"
  },
  {
    id: 9,
    name:'tourist bed',
    tag:'touristbed',
    price:18000,
    incart:0,
    image:"https://images.unsplash.com/photo-1632210702485-e1841e30752a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80"
  },
  {
    id: 10,
    name:'prison bed',
    tag:'prisonbed',
    price:1000,
    incart:0,
    image:"https://images.unsplash.com/photo-1632143696877-c7c0d4ae5cc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
  }
]

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click',() => { //associate item in carts with eventlistener 
    cartNumbers(product[i]);
    totalCost(product[i]);
  })
}

function cartNumbers(product){
  let productNumbers = localStorage.getItem('cartNumbers');//get item number
  // let ProductNumbers = JSON.parse(localStorage.getItem('cartNumbers'))
  
  productNumbers=parseInt(productNumbers);//convert product numbers string to number 

  if (productNumbers){ // check if product number is in local storage 
    localStorage.setItem('cartNumbers', productNumbers + 1); // if present add 1 to product item instance
    document.querySelector('.cart span').textContent = productNumbers + 1;
    //document.querySelector('.quantity span').textContent = productNumbers + 1;
    //console.log(document.querySelector('.cart span').parentNode)
  } else {
  localStorage.setItem('cartNumbers',1);// else set the initial value to 1
  document.querySelector('.cart span').textContent = 1;
  //document.querySelector('.quantity span').textContent = 1;

  }
  setItems(product)
}

function setItems(product){
  let cartItems = localStorage.getItem('productsInCart');// gets item already in local storage 
  cartItems = JSON.parse(cartItems);//converting it to js object from string

  if (cartItems != null){// distinguishing different product than the first one we clicked on

    if (cartItems[product.id] == undefined) { //update cart item to be an object : using previous data in cart item add new product
      cartItems = {
        ...cartItems,[product.id]:product//spread and ad new product to existing json
      }
    }
    cartItems[product.id].incart += 1 ;// check if the value in storage exists; if present add 1
  } else {
      product.incart = 1;// set default of value incart when first clicked
      cartItems = {
        [product.id]:product
      }
  }
  localStorage.setItem('productsInCart', JSON.stringify(cartItems)); // placing one instance product object to local storage
  // if (product == []){
  //   cartItems = {}
  //   localStorage.setItem('productsInCart', JSON.stringify(cartItems));
  // }
  
  // as a json object

}

function onLoadCartNumbers(){// get item number from local storage for the first time
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers){
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function totalCost(product){

  let cartCost = localStorage.getItem("totalCost");
  //when we get data back from the local storage it comes as a string
  
  if (cartCost != null){ // check if cartCost exist
    cartCost = parseInt(cartCost);//when we get data back from the local storage it comes as a string, therefore convert to number
    localStorage.setItem("totalCost",cartCost + product.price);//if exist add new amount to existing total cost
  }else {
    localStorage.setItem("totalCost",product.price);// else place new price as initial amount
  }

}
// function reduceCounter(){
//   let productNumbers = localStorage.getItem('cartNumbers');
//   productNumbers -= 
//   console.log(localStorage.setItem('productsInCart', JSON.stringify(productNumbers)))

// }
function displayCart(){
  // minButton=document.querySelector("fa-minus-circle");
  // maxButton=document.querySelector("fa-plus-circle");

  // minButton.addEventListener("click",reduceCounter());

  let cartItems = {}
  cartItems = JSON.parse(localStorage.getItem("productsInCart"));
  let productContainer = document.querySelector(".products");//check if page has div to render products
  let totalContainer = document.querySelector(".cart-total");

  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && productContainer){
    productContainer.innerHTML ='';//load no html at first
    Object.values(cartItems).map(item => {// next time add html without overridding existing (+=)
      productContainer.innerHTML += `
      <div class="item-container">
        <div class="products_img">
          <i class="fas fa-window-close"></i>
          <img src=${item.image}>
          <span>${item.name}</span>
        </div>
        <div class="price">Ksh ${item.price}.00</div>
        <div class="quantity" id="${item.id}">
          <i class="fas fa-minus-circle"></i>
          <span>  ${item.incart}  </span>
          <i class="fas fa-plus-circle"></i>
        </div>
        <div class="discount">Ksh 0.00</div>
        <div class="total">
          Ksh ${item.incart* item.price}.00
        </div>
      </div>
      `;
     });
     totalContainer.innerHTML +=`
     <div class="basketTotalContainer">
      <h4 class="basketTotalTitle">
          Basket Total = Ksh ${cartCost}.00
      </h4>
     </div>
     `;
  }
}


onLoadCartNumbers();
displayCart();


const plus = document.querySelectorAll(".fa-plus-circle")
// let minus = document.querySelectorAll(".fa-minus-circle")

plus.forEach(element => {
  element.addEventListener("click", (e)=>{
    let key = e.target.parentNode.id;
    cartNumbers(product[key-1])
  })
});
// let reset = document.querySelectorAll(".fa-window-close")
// reset.forEach(element => {
//   element.addEventListener("click", (e)=>{
//     let key = e.target.parentNode.id;
//     cartNumbers([])
//   })
// });

// minus.forEach(element => {
//   element.addEventListener("click", (e)=>{
//     let key = e.target.parentNode.id;
//     cartNumbers(product[key-1])
//   })
// });


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// // end of carousel