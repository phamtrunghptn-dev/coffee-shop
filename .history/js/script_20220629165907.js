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
        price: 15,
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
        price: 16,
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
        price: 13,
        inCart: 0
    },
    {
        name: 'coffee 8',
        tag: 'coffee 8',
        price: 14,
        inCart: 0
    },
    {
        name: 'coffee 9',
        tag: 'coffee 9',
        price: 15,
        inCart: 0
    },
]

for( let i=0;i< carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumber(products[i]);
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
    cartItems = JSON
}

onLoadCartNumbers();