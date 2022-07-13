let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscoll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// add to cart
let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'coffee 1',
        tag: 'coffee 1',
        price: 15.00,
        inCart: 0
    },
    {
        name: 'coffee 2',
        tag: 'coffee 2',
        price: 14.99,
        inCart: 0
    },
    {
        name: 'coffee 3',
        tag: 'coffee 3',
        price: 13.99,
        inCart: 0
    },
    {
        name: 'coffee 4',
        tag: 'coffee 4',
        price: 16.99,
        inCart: 0
    },
    {
        name: 'coffee 5',
        tag: 'coffee 5',
        price: 16.00,
        inCart: 0
    },
    {
        name: 'coffee 6',
        tag: 'coffee 6',
        price: 15.99,
        inCart: 0
    },
    {
        name: 'coffee 7',
        tag: 'coffee 7',
        price: 13.00,
        inCart: 0
    },
    {
        name: 'coffee 8',
        tag: 'coffee 8',
        price: 14.00,
        inCart: 0
    },
    {
        name: 'coffee 9',
        tag: 'coffee 9',
        price: 15.00,
        inCart: 0
    },
]

for( let i=0;i< carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumber(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumber(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItem(product);
}

function setItem(product){
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems !== null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag] : product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else{
        product.inCart = 1;
        cartItems = {
            [product.tag] : product
        }
    }
    localStorage.setItem('productInCart', JSON.stringify(cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost !== null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price)
    }
}

function displayCart(){
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products-box');
    let cartCost = localStorage.getItem('totalCost');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product-box" > 
                <div class="product">
                    <ion-icon name="close-circle-outline"></ion-icon>
                    <img src="./images/${item.tag}.png">
                    <span>${item.name}</span>
                </div>
                <div class="price">$${item.price}</div>
                <div class="quantity">
                    <ion-icon name="arrow-back-circle-outline" class="minusInCart"></ion-icon>
                    <span>${item.inCart}</span>
                    <ion-icon name="arrow-forward-circle-outline" class="addInCart"></ion-icon>
                </div> 
                <div class="total">
                    $${item.inCart * item.price}
                </div>
            </div> 
            `;
        })

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total:
                </h4>
                <h4 class="basketTotal">
                    $${cartCost}
                </h4>
        `;

    }
}

let add = document.querySelector('.addInCart');

add.addEventListener("click", () => {
    products[i]
})

onLoadCartNumbers();
displayCart();