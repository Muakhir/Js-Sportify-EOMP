// Cart
document.querySelector('#CurrentYr').textContent =
new Date().getFullYear()

let check = JSON.parse(localStorage.getItem('purchase'))
let uniqueData = Object.groupBy(check, item=> item.id)
let checkWrap = document.querySelector('[data-table]')

function checkoutDisplay(){
    checkWrap.innerHTML = ''
    if(uniqueData){
        for(let i in uniqueData){
            // console.log(i, uniqueData[i])
            checkWrap.innerHTML += `
            <tr>
            <td>${uniqueData[i][0].id}</td>
            <td>${uniqueData[i][0].Name}</td>
                <td>R${uniqueData[i][0].Amount}</td>
                <td>${uniqueData[i].length}</td>
                <td>R${uniqueData[i][0].Amount * 
                    uniqueData[i].length}</td>
              </tr>
             
            `   
        }
    }else{
        checkWrap.innerHTML = `Add Items`

    }
}
checkoutDisplay()

function clrBtn(){
        checkWrap.innerHTML = ""
        localStorage.removeItem("purchase")
}

function purchBtn(){
    checkWrap.innerHTML = "Thank You For Purchasing"
    
}