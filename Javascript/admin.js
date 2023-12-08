// Admin
document.querySelector('#CurrentYr').textContent =
new Date().getFullYear()

let admin = JSON.parse(localStorage.getItem('items')) || []
let adminWrap = document.querySelector('[admin-table]')
let adminSort = document.querySelector('[admin-sort]')
function displayAdmin(){
    adminWrap.innerHTML = ''
        if(admin.length){
            admin.forEach( (items, i ) =>{
                adminWrap.innerHTML += `
                <tr>
                <td>${items.id}</td>
                <td><img src="${items.Image}" id="MinI"></td>
                    <td>${items.Name}</td>
                    <td>R${items.Amount}</td>
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal${i}">
                        <i class="bi bi-pen-fill"></i>
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="updateModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel${i}"></h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                              <div class="col">
                                <label for="recipient-name${i}" class="col-form-label">Name:</label>
                                <input type="text" class="form-control" id="recipient-Name${i}" value="${items.Name}">
                                </div>
                                <div class="col">
                                <label for="recipient-name${i}" class="col-form-label">Id:</label>
                                <input type="text" class="form-control" id="recipient-id${i}" value="${items.id}">
                                </div>
                                <div class="col">
                                <<label for="recipient-name${i}" class="col-form-label">Price:</label>
                                <input type="text" class="form-control" id="recipient-Amount${i}" value="R${items.Amount}">
                                </div>
                                <div class="col">
                                <label for="recipient-name${i}" class="col-form-label">Image:</label>
                                <input type="text" class="form-control" id="recipient-Image${i}" value="${items.Image}">
                                </div>
                                
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                            </div>
                          </div>
                        </div>
                    </td>
                    <td>
                    <div>
                    <button class="btn" onclick='deleteItem(${JSON.stringify(i)})'><i class="bi bi-x-lg"></i></button>
                        </div>
                    </td>
                </tr>
                `   
            })
        }else {
            adminWrap.innerHTML = 'No Item Was Found'
        }
}
displayAdmin()

adminSort.addEventListener('click',()=>{
    admin.sort((Arg1 , Arg2) => {
            return Arg1.Amount - Arg2.Amount 
        })
        displayAdmin()
})

function deleteItem(index) {
    admin.splice(index, 1)
    localStorage.setItem('items', JSON.stringify(admin))
    displayAdmin()
}



