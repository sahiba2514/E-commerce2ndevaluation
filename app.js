// let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');


// openShopping.addEventListener('click', () => {
//     body.classList.add('active');
// });

// closeShopping.addEventListener('click', () => {
//     body.classList.remove('active');
// });

// // All products using the same online image URL
// let products = [
//     {
//         id: 1,
//         name: '1',
//         image: 'https://i.pinimg.com/564x/4f/8d/19/4f8d192e2303d7b26c92f7fb66e47866.jpg',
//         price: 350,
//         sizes: ['S', 'M', 'L', 'XL']
//     },
//     {
//         id: 2,
//         name: '2',
//         image: 'https://i.pinimg.com/736x/6d/af/ba/6dafbabf3399128177435ebc7bdd9b36.jpg',
//         price: 1200,
//         sizes: ['S', 'M', 'L', 'XL']
//     },
//     {
//         id: 3,
//         name: '3',
//         image: 'https://i.pinimg.com/564x/bb/35/00/bb3500bb3c31265a0730b0d752e66888.jpg',
//         price: 700,
//         sizes: ['S', 'M', 'L', 'XL']
//     },
//     {
//         id: 4,
//         name: '4',
//         image: 'https://i.pinimg.com/564x/ca/63/d2/ca63d2f648337de0dccde060cf26728b.jpg',
//         price: 600,
//         sizes: ['S', 'M', 'L', 'XL']
//     },
//     {
//         id: 5,
//         name: '5',
//         image: 'https://i.pinimg.com/736x/bb/4a/df/bb4adf145f1adc26b1fdb983098b3dd3.jpg',
//         price: 850,
//         sizes: ['S', 'M', 'L', 'XL']
//     },
//     {
//         id: 6,
//         name: '6',
//         image: 'https://i.pinimg.com/736x/bb/4a/df/bb4adf145f1adc26b1fdb983098b3dd3.jpg',
//         price: 1000,
//         sizes: ['S', 'M', 'L', 'XL']
//     },
//     {
//         id: 7,
//         name: '7',
//         image: 'https://i.pinimg.com/474x/bc/54/42/bc54420291e0fd99e04c225162cd619f.jpg',
//         price: 1200,
//         sizes: ['S', 'M', 'L', 'XL']
//     },
//     {
//         id: 8,
//         name: '8',
//         image: 'https://i.pinimg.com/236x/07/8e/00/078e001c9d9429a80f8be7105ee19546.jpg',
//         price: 1099,
//         sizes: ['S', 'M', 'L', 'XL']
//     },
//     {
//         id: 9,
//         name: '9',
//         image: 'https://i.pinimg.com/474x/7f/f2/1c/7ff21cf0ee909e6960cd792900bb1dde.jpg',
//         price: 999,
//         sizes: ['S', 'M', 'L', 'XL']

//     },
//     {
//         id: 10,
//         name: '10',
//         image: 'https://i.pinimg.com/474x/cb/ed/cc/cbedcca7f6b506543b2f11cf1c99e45a.jpg',
//         price: 799,
//         sizes: ['S', 'M', 'L', 'XL']

//     },
//     {
//         id: 11,
//         name: '11',
//         image: 'https://i.pinimg.com/474x/fe/60/d1/fe60d1f19ea4ab558af5b1a783d408c3.jpg',
//         price: 899,
//         sizes: ['S', 'M', 'L', 'XL']

//     },
//     {
//         id: 12,
//         name: '12',
//         image: 'https://i.pinimg.com/474x/46/b3/63/46b36359bd42028b63305624325dc536.jpg',
//         price: 899,
//         sizes: ['S', 'M', 'L', 'XL']

//     },
//     {
//         id: 13,
//         name: '13',
//         image: 'https://i.pinimg.com/474x/c9/96/28/c99628c6859ca292166c491c3b120565.jpg',
//         price: 899,
//         sizes: ['S', 'M', 'L', 'XL']

//     },
//     {
//         id: 14,
//         name: '14',
//         image: 'https://i.pinimg.com/236x/6a/0c/d8/6a0cd8f943eaf8ac66cbbe28fc7cde5f.jpg',
//         price: 899,
//         sizes: ['S', 'M', 'L', 'XL']

//     },
//     {
//         id: 15,
//         name: '15',
//         image: 'https://i.pinimg.com/474x/52/f8/a3/52f8a33a1d403774519de56eb8cef261.jpg',
//         price: 899,
//         sizes: ['S', 'M', 'L', 'XL']

//     }


// ];

// let listCards = [];

// function initApp() {
//     products.forEach((value, key) => {
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//             <img src="${value.image}" alt="${value.name}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Add To Card</button>`;
//         list.appendChild(newDiv);
//     });
// }

// initApp();

// function addToCard(key) {
//     if (listCards[key] == null) {
//         // Copy product from list to list card
//         listCards[key] = JSON.parse(JSON.stringify(products[key]));
//         listCards[key].quantity = 1;
//     }
//     reloadCard();
// }

// function reloadCard() {
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listCards.forEach((value, key) => {
//         if (value != null) {
//             totalPrice += value.price;
//             count += value.quantity;

//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="${value.image}" alt="${value.name}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                 </div>`;
//             listCard.appendChild(newDiv);
//         }
//     });
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }

// function changeQuantity(key, quantity) {
//     if (quantity === 0) {
//         delete listCards[key];
//     } else {
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }
//     reloadCard();
// }
// function addToCard(key) {
//     const selectedSize = document.getElementById(`size-select-${key}`).value;

//     if (listCards[key] == null) {
//         // Copy product from list to list card
//         listCards[key] = JSON.parse(JSON.stringify(products[key]));
//         listCards[key].quantity = 1;
//         listCards[key].selectedSize = selectedSize; // Save selected size
//     } else {
//         listCards[key].quantity += 1; // Increment quantity if item is already in cart
//     }

//     reloadCard();
// }

// function reloadCard() {
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listCards.forEach((value, key) => {
//         if (value != null) {
//             totalPrice += value.price * value.quantity; // Corrected to consider quantity
//             count += value.quantity;

//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="${value.image}" alt="${value.name}"/></div>
//                 <div>${value.name} (Size: ${value.selectedSize})</div>
//                 <div>${(value.price * value.quantity).toLocaleString()}</div> <!-- Show total price for quantity -->
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                 </div>`;
//             listCard.appendChild(newDiv);
//         }
//     });
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'https://i.pinimg.com/564x/4f/8d/19/4f8d192e2303d7b26c92f7fb66e47866.jpg',
        price: 350,
        sizes: ['S', 'M', 'L', 'XL','XXL']
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'https://i.pinimg.com/736x/6d/af/ba/6dafbabf3399128177435ebc7bdd9b36.jpg',
        price: 1200,
        sizes: ['S', 'M', 'L', 'XL','XXL']
    },
    // Add more products as needed
    {
id: 3,
name: '3',
image: 'https://i.pinimg.com/564x/bb/35/00/bb3500bb3c31265a0730b0d752e66888.jpg',
price: 700,
sizes: ['S', 'M', 'L', 'XL','XXL']
},
{
id: 4,
name: '4',
image: 'https://i.pinimg.com/564x/ca/63/d2/ca63d2f648337de0dccde060cf26728b.jpg',
price: 600,
sizes: ['S', 'M', 'L', 'XL','XXL']
},
{
id: 5,
name: '5',
image: 'https://i.pinimg.com/736x/bb/4a/df/bb4adf145f1adc26b1fdb983098b3dd3.jpg',
price: 850,
sizes: ['S', 'M', 'L', 'XL','XXL']
},
{
id: 6,
name: '6',
image: 'https://i.pinimg.com/564x/8b/09/04/8b090476cf0df7aa40a2c46890a11a6b.jpg',
price: 1000,
sizes: ['S', 'M', 'L', 'XL','XXL']
},
{
id: 7,
name: '7',
image: 'https://i.pinimg.com/474x/bc/54/42/bc54420291e0fd99e04c225162cd619f.jpg',
price: 1200,
sizes: ['S', 'M', 'L', 'XL','XXL']
},
{
id: 8,
name: '8',
image: 'https://i.pinimg.com/236x/07/8e/00/078e001c9d9429a80f8be7105ee19546.jpg',
price: 1099,
sizes: ['S', 'M', 'L', 'XL','XXL']
},
{
id: 9,
name: '9',
image: 'https://i.pinimg.com/474x/7f/f2/1c/7ff21cf0ee909e6960cd792900bb1dde.jpg',
price: 999,
sizes: ['S', 'M', 'L', 'XL','XXL']

},
{
id: 10,
name: '10',
image: 'https://i.pinimg.com/474x/cb/ed/cc/cbedcca7f6b506543b2f11cf1c99e45a.jpg',
price: 799,
sizes: ['S', 'M', 'L', 'XL','XXL']

},
{
id: 11,
name: '11',
image: 'https://i.pinimg.com/474x/fe/60/d1/fe60d1f19ea4ab558af5b1a783d408c3.jpg',
price: 899,
sizes: ['S', 'M', 'L', 'XL','XXL']

},
{
id: 12,
name: '12',
image: 'https://i.pinimg.com/474x/46/b3/63/46b36359bd42028b63305624325dc536.jpg',
price: 899,
sizes: ['S', 'M', 'L', 'XL','XXL']

},
{
id: 13,
name: '13',
image: 'https://i.pinimg.com/474x/c9/96/28/c99628c6859ca292166c491c3b120565.jpg',
price: 899,
sizes: ['S', 'M', 'L', 'XL','XXL']

},
{
id: 14,
name: '14',
image: 'https://i.pinimg.com/236x/6a/0c/d8/6a0cd8f943eaf8ac66cbbe28fc7cde5f.jpg',
price: 899,
sizes: ['S', 'M', 'L', 'XL','XXL']

},
{
id: 15,
name: '15',
image: 'https://i.pinimg.com/474x/52/f8/a3/52f8a33a1d403774519de56eb8cef261.jpg',
price: 899,
sizes: ['S', 'M', 'L', 'XL','XXL']

}
];

let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}" alt="${value.name}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <select class="size-select" id="size-select-${key}">
                ${value.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
            </select>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    });
}

initApp();

function addToCard(key) {
    const selectedSize = document.getElementById(`size-select-${key}`).value;

    if (listCards[key] == null) {
        // Copy product from list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
        listCards[key].selectedSize = selectedSize; // Save selected size
    } else {
        listCards[key].quantity += 1; // Increment quantity if item is already in cart
    }

    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        if (value != null) {
            totalPrice += value.price * value.quantity;
            count += value.quantity;

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}" alt="${value.name}"/></div>
                <div>${value.name} (Size: ${value.selectedSize})</div>
                <div>${(value.price * value.quantity).toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = products[key].price * quantity;
    }
    reloadCard();
}
