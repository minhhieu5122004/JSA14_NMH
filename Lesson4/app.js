let table = document.getElementById("table");
table.innerHTML = `
<thead>
<tr>
  <th><input type="checkbox">
</th>
  <th>STT</th>
  <th>Name</th>
  <th>Email</th>
  <th>Address</th>
  <th onclick="changePhoneNumber()">Phone</th>
  <th>Action</th>
</tr>
</thead>`;

var listContact;
if (localStorage.getItem("listContact")){
  listContact = JSON.parse(localStorage.getItem("listContact"));
  // Xóa
  function deleteContact() {
    var delContact = prompt("Bạn muốn xóa ai khỏi danh bạ?");
    console.log(delContact);
    for (let a = 0; a < listContact.length; a++) {
    if(listContact[a].newname === delContact) {
    listContact.splice(a, 1);
    }
   }
}

  let renderListPhone = listContact.map((value, index) => {
    return `<tr>
  <th>
      <input type="checkbox">
  </td>
  <th>${index + 1}</th>
  <th>${value.newname}</td>
  <th>${value.newemail}</td>
  <th>${value.newaddress}</td>
  <th>${value.newphone}</td>
  <th>
      <img onclick="showFormEdit()" src="https://img.icons8.com/material-outlined/24/000000/pencil--v1.png"/>
      <img src="https://img.icons8.com/external-tulpahn-flat-tulpahn/64/000000/external-bin-mobile-user-interface-tulpahn-flat-tulpahn.png"/>
  </th>
</tr>`
}).join("\n");
table.innerHTML += `
${renderListPhone}`;
} else {
  listContact = [];
}

let formWrapper = document.getElementById('form-wrapper');

// Hỏi tên người cần sửa và sửa số 
let changePhone = document.getElementById('change-phonenumber');
let showFormPhone = false;
var changenumber;
function changePhoneNumber(){
changenumber = prompt('Bạn muốn thay đổi số điện thoại của ai?')

for (let i = 0; i < arrConverted.length; i++) {
if(changenumber == phoneList[i].name){
showFormPhone = true;
if(showFormPhone == true){
changePhone.innerHTML = `
<form id="edit-phonenumber">
<input type="text" placeholder="new phone number">
<button class="btn bg-green">Update</button>
</form>
`}  
}
}
}

// Thêm người vào danh bạ
let showForm = false;
function showFormEdit() {
  showForm = true;
  if (showForm == true) {
      formWrapper.innerHTML = `<form id="edit-information">
      <input type="text" id="addname" class="width-200" placeholder="Name" required>
      <input type="text" id="addemail" class="width-200" placeholder="Email - Format: [...]@gmail.com" required pattern="[a-z,0-9]+@gmail.com">
      <input type="text" id="addaddress" class="width-200" placeholder="Address" required>
      <input type="tel" id="addphone" class="width-200" placeholder="Phone" required>
      <button onclick="handleSubmit()" class="btn bg-green">Add</button>
  </form>`
  }
}

function handleSubmit(event) {
  
var newname = document.forms["edit-information"]["addname"].value;
var newemail = document.forms["edit-information"]["addemail"].value;
var newaddress = document.forms["edit-information"]["addaddress"].value;
var newphone = document.forms["edit-information"]["addphone"].value;

var newContact = [newname, newemail, newaddress, newphone]; 
if (localStorage.getItem("listContact")) {
  listContact = JSON.parse(localStorage.getItem("listContact"));

}else {
  listContact = [];
}
if (newname && newemail && newaddress && newphone) {
  listContact.push({newname, newemail, newaddress, newphone});
  localStorage.setItem("listContact", JSON.stringify(listContact));
}
console.log(listContact);
}



