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
                                <label for="Item-Name${i}" class="col-form-label">Name:</label>
                                <input type="text" class="form-control" id="Item-Name${i}" value="${items.Name}">
                                </div>
                                <div class="col">
                                <label for="Item-id${i}" class="col-form-label">Id:</label>
                                <input type="text" class="form-control" id="Item-id${i}" value="${items.id}">
                                </div>
                                <div class="col">
                                <label for="Item-Amount${i}" class="col-form-label">Price:</label>
                                <input type="text" class="form-control" id="Item-Amount${i}" value="${items.Amount}">
                                </div>
                                <div class="col">
                                <label for="Item-Image${i}" class="col-form-label">Image:</label>
                                <input type="text" class="form-control" id="Item-Image${i}" value="${items.Image}">
                                </div>
                                
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onclick='new UpdateItem(${JSON.stringify(items)}, 
                                ${JSON.stringify(i)})'>Save changes</button>
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

function UpdateItem(items,i){
  this.id = items.id 
  this.Name = document.querySelector(`#Item-Name${i}`).value
  this.Amount = document.querySelector(`#Item-Amount${i}`).value
  this.Image = document.querySelector(`#Item-Image${i}`).value
  admin[i] = Object.assign({}, this)
  localStorage.setItem('items', JSON.stringify(admin))
  displayAdmin()
  location.reload()
}

function addNewItem() {
  try {
      let item = {
          id: admin.length + 1,
          Name: document.querySelector('#item-name').value,
          id: document.querySelector('#item-id').value,
          Amount: document.querySelector('#item-amount').value,
          Image: document.querySelector('#item-image').value
      }
      admin.push(item);
      localStorage.setItem('items', JSON.stringify(admin))
      location.reload()
      adminContent();
  } catch (error) {
      console.log(error.message);
  }
}

