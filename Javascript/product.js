// Product
document.querySelector("#CurrentYr").textContent =
new Date().getFullYear()

let productsWrapper = document.querySelector('[data-items]')
let searchProduct = document.querySelector('[data-input]')
let productSort = document.querySelector('[data-sort]')
let items = JSON.parse( localStorage.getItem('items')) ? JSON.parse( localStorage.getItem('items'))
: localStorage.setItem('items',JSON.stringify(
    [
        {
            id: 1,
            Name: 'Man City Kit',
            Amount:"R999.99",
            Image: "https://i.postimg.cc/Fs3FmYJ3/Manchester-City-Home-Player-Version-Football-Shirt-23-24.jpg",
            
        },
        {
            id: 2,
            Name: 'Tottenham Hotspur Kit',
            Image: "https://i.postimg.cc/xd0LLDSp/Sqd8-Blb-KOf-UAk-HU-2fec0810-1be3-4af9-8ea1-0918fe2d1d04-540x.jpg",
            Amount:"R1199.99"
        },
        {
            id: 3,
            Name: 'Chelsea Kit',
            Image: "https://i.postimg.cc/zDxjFkDX/FBsy-UIAe-RHW.png",
            Amount:"R1400.00"
        },
        {
            id: 4,
            Name: 'Man United Kit',
            Image: "https://i.postimg.cc/8c3qrmJw/IP1739-03-laydown.jpg",
            Amount:"R1300.00"
        },
        {
            id: 5,
            Name: 'Liverpool Kit',
            Image: "https://i.postimg.cc/HLqNJdSf/1165863-REDWHITE-1-v1-6-Fk.jpg",
            Amount:"R1299.99"
        },  {
            id: 6,
            Name: 'Arsenal Kit',
            Image: "https://i.postimg.cc/V616cry6/image.png",
            Amount: "R1699.99"
        }
    ]
    ))
    function displayProduct(){
        productsWrapper.innerHTML = ''
        try{
            if(items){
                items.forEach( items =>{
                    productsWrapper.innerHTML += `<div class="card" style="width: 20rem;">
                    <img src="${items.Image}" class="card-img-top pimg" alt="${items.id}">
                    <div class="card-body">
                    <h5 class="card-title">${items.Name}</h5>
                    <p class="card-text">${items.Amount}</p>
                    <button class="btn btn-primary">Cart</button>
                    </div>
                    </div>`
                })
            }else{
                productsWrapper.innerHTML = ''
            }
        }catch(e){
            console.log(e.message)
        }
    }
    displayProduct()

    searchProduct.addEventListener('keyup',() =>{
        try{
            let searchproduct = items.filter( prod =>{
                return prod.Name.toLowerCase().includes(searchProduct.value.toLowerCase())
            })
            if(searchProduct.value.length > 0){
                productsWrapper.innerHTML = ''
                searchproduct.forEach(items =>{
                productsWrapper.innerHTML += `<div class="card" style="width: 20rem;">
                    <img src="${items.Image}" class="card-img-top pimg" alt="${items.id}">
                    <div class="card-body">
                    <h5 class="card-title">${items.Name}</h5>
                    <p class="card-text">${items.Amount}</p>
                    <button class="btn btn-primary">Cart</button>
                    </div>
                    </div>`
                })
            }else{
                displayProduct()
            }
        }catch(e){
            console.log(e.message);
        }
    })

    function sortItems(){
    items.sort((a , b) => {
            return a.Name.localeCompare(b.Name)
        });
        displayProduct()
    }
    
    productSort.addEventListener('click',sortItems)