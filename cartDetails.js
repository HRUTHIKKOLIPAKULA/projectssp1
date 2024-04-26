let cart=JSON.parse(localStorage.getItem("cart"))
console.log(cart)

let products=[
    {
        "id": 1,
        "name":" LD01 LOUNGE CHAIR",
        "price": 200,
        "image": "image/1.jpg"
    },
    {
        "id": 2,
        "name":" LD02 LOUNGE CHAIR",
        "price": 250,
        "image": "image/2.jpg"
    },
    {
        "id": 3,
        "name":" LD03 LOUNGE CHAIR",
        "price": 290,
        "image": "image/3.jpg"
    },
    {
        "id": 4,
        "name":" LD04 LOUNGE CHAIR",
        "price": 200,
        "image": "image/4.jpg"
    },
    {
        "id": 5,
        "name":" LD05 LOUNGE CHAIR",
        "price": 300,
        "image": "image/5.jpg"
    },
    {
        "id": 6,
        "name":" LD06 LOUNGE CHAIR",
        "price": 200,
        "image": "image/6.jpg"
    },
    {
        "id": 7,
        "name":" LD07 LOUNGE CHAIR",
        "price": 200,
        "image": "image/7.jpg"
    },
    {
        "id": 8,
        "name":" LD08 LOUNGE CHAIR",
        "price": 200,
        "image": "image/8.jpg"
    }

]

let listCartHTML = document.querySelector('.listCart');
let closeCart = document.querySelector('.close');

cart.map((item)=>{

    let newItem=document.createElement('div')
    newItem.classList.add('item')
    newItem.dataset.id = item.product_id;

    let positionProduct = products.findIndex((value) => value.id == item.product_id);
    let info = products[positionProduct];
    newItem.innerHTML=`<div class="image">
    <img src="${info.image}">
</div>
<div class="name">
${info.name}
</div>
<div class="totalPrice">$${info.price * item.quantity}</div>
<div class="quantity">
    <span class="minus"><</span>
    <span>${item.quantity}</span>
    <span class="plus">></span>
</div>`
    listCartHTML.appendChild(newItem)
})
