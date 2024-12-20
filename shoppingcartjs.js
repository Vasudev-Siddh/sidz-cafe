let iconCart = document.querySelector('.shoppingcart');
let closeCart=document.querySelector('.close')
let body= document.querySelector('body');
let listProductHTML= document.querySelector('.menu');
let listCartHTML=document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.shoppingcart span');


let listProducts=[];
let carts=[];

iconCart.addEventListener('click',() => {
    body.classList.toggle('showcart')
})
closeCart.addEventListener('click' ,() => {
    body.classList.toggle('showcart')
})

listProductHTML.addEventListener('click',(event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addcart')){
        alert('1');
    }
})









const initApp=() =>{
    
    fetch('dishes.json')
    .then(response => response.json())
    .then( data => {
        listProducts = data;
        console.log(listProducts);

    })
}
initApp();