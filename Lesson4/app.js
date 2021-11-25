let phoneList = [
  {
    name: "John",
    email: "john@gmail.com",
    add: "Long an",
    sdt: "123 456 789",
  },
  {
    name: "Annie",
    email: "annie@gmail.com",
    add: "New York",
    sdt: "86745392075",
  },
  {
    name: "Mark",
    email: "mark@gmail.com",
    add: "Bình Định",
    sdt: "0285265656",
  },
  {
    name: "Ben",
    email: "ben@gmail.com",
    add: "Hà Nội",
    sdt: "345253532445",
  },

];
let table = document.getElementById('table');
let formWrapper = document.getElementById('form-wrapper');

function handleSubmit(event) {


}
let showForm = false;
function showFormEdit() {
  showForm = true;
  if (showForm == true) {
    formWrapper.innerHTML = `
        <form id="edit-information" onsubmit="handleSubmit()">
        <input type="text" placeholder="name">
        <input type="text" placeholder="email">
        <input type="text" placeholder="add">
        <input type="text" placeholder="phone">
        <button type="submit" class="btn bg-green">Cập nhật</button>
        </form>`
  }
}

var listUserRender = phoneList.map((user, index) => {
    return `<tr>
    <td>
        <input type="checkbox">
    </td>
    <th>${index + 1}</th>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.add}</td>
    <td>${user.sdt}</td>
    <td>
        <img onclick="showFormEdit()" src="https://img.icons8.com/material-outlined/24/000000/pencil--v1.png"/>
        <img src="https://img.icons8.com/external-tulpahn-flat-tulpahn/64/000000/external-bin-mobile-user-interface-tulpahn-flat-tulpahn.png"/>

    </td>
</tr>`
  }).join("\n");

console.log(typeof listUserRender);
console.log(listUserRender);

table.innerHTML = `
<thead class="row">
                    <th>
                        <input type="checkbox">
                    </th>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Email</th>
                    <th>Địa chỉ</th>
                    <th onclick="changePhoneNumber()" >SĐT</th>
                    <th>Thao tác</th>
            </thead>
${listUserRender}`


let changePhone = document.getElementById('change-phonenumber')
let showFormPhone = false;
var changenumber;
function changePhoneNumber(){
changenumber = prompt('Bạn muốn thay đổi số điện thoại của ai?')

        for (let i = 0; i < phoneList.length; i++) {
            if(changenumber == phoneList[i].name){
            showFormPhone = true;
            if(showFormPhone == true){
                changePhone.innerHTML = `
                <form id="edit-phonenumber">
                <input type="text" placeholder="phone for">
                <button>Cập nhật</button>
                </form>
                `}  
            }
}
}













