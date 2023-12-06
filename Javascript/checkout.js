// Cart
document.querySelector('#CurrentYr').textContent =
new Date().getFullYear()

let GbName = Object.groupby(items => items.Name)

let check = JSON.parse(localStorage.getItem('purchase'))

let checkWrap = document.querySelector('[data-table]')

function checkoutDisplay(){
    checkWrap.innerHTML = ''
    if(check){
        check.forEach( items =>{
            checkWrap.innerHTML += `
            <tr>
                <th scope="row"></th>
                <td>${items.id}</td>
                <td>${items.Name}</td>
                <td>#</td>
                <td>#</td>
                <td>${items.Amount}</td>
              </tr>
            `
        })
    }else{
    checkWrap.innerHTML = 'Add Items'
    }
    checkoutDisplay()
}
    