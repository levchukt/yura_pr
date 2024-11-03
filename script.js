
async function getProducts(){
    let response = await fetch("items.json")
    let products = await response.json()
    return products
}
function getCardHTML(product){
    let productData = JSON.stringify(product)
    
    return `
    <div class="product">
    <img src="img/${product.image}" alt="">
    
    <h3 class="product_name">${product.title}</h3>
    <p class="product_price">${product.price}</p>
    <div class="product_info">
        <button class="buy">Купити</button>

    </div>
    </div>
    `
}

function buyItem() {
    
}
// getProducts().then(function(products){
//     console.log("hj")
//     let productsList = document.querySelector('.products')
//     if (productsList){
//         products.forEach(product =>  {
//             productsList.innerHTML += getCardHTML(product)
//         });
//     }
//     let buyButtons = document.querySelectorAll('.buy')
//     if ( buyButtons){
//         buyButtons.forEach(button =>{
//             button.addEventListener('click', buyItem)
//         })
//     }
// })

getProducts().then(function(products){
    console.log("hj")
    let productsList = document.querySelector('.products')
    if (productsList){
        for (let i = 0; i < 2; i++) {
            const product = products[i];
            productsList.innerHTML += getCardHTML(product)
        }
    }
    let buyButtons = document.querySelectorAll('.buy')
    if ( buyButtons){
        buyButtons.forEach(button =>{
            button.addEventListener('click', buyItem)
        })
    }
})

let moreBtn = document.querySelector('.more')
moreBtn.addEventListener('click', ()=>{
    
     getProducts().then(function(products){
    
    let productsList = document.querySelector('.products')
    productsList.innerHTML = ''
    if (productsList){
        products.forEach(product =>  {
            productsList.innerHTML += getCardHTML(product)
        });
    }
    let buyButtons = document.querySelectorAll('.buy')
    if ( buyButtons){
        buyButtons.forEach(button =>{
            button.addEventListener('click', buyItem)
        })
    }
    moreBtn.style.display = 'none'
})
})