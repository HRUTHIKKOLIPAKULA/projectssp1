let checker=document.querySelector(".checkerr")
let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let listCartHTML = document.querySelector('.listCart');

let cart=[]
if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
    // addCartToHTML();
}

let totalQuantity2=0;
console.log(cart)
cart.map((item)=>{
    totalQuantity2=totalQuantity2+item.quantity;
})
console.log(totalQuantity2)
checker.innerHTML=totalQuantity2


iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if (positionClick.classList.contains('plus')) {
            type = 'plus';
        }
        // changeQuantityCart(product_id, type);
    }
})

// const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity = totalQuantity +  item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
            
                <div class="name">
                ${info.name}
                </div>
                <div class="totalPrice">$${info.price * item.quantity}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
        })
    }
// }