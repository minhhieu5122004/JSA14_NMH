let phoneList = [
    {
        name: 'John',
        email: 'john@gmail.com',
        add: "Long An",
        phone: '123-456-7890',
    },
    {
        name: 'Annie',
        email: 'annie@gmail.com',
        add: "New York",
        phone: '86745392075',
    },
    {
        name: 'Messi',
        email: 'messi@gmail.com',
        add: "Bình Định",
        phone: '0285265656',
    },
    {
        name: 'Messi',
        email: 'messi@gmail.com',
        add: "Bình Định",
        phone: '0285265656',
    },
];
let table = document.getElementById('table');
let formWrapper = document.getElementById('form-wrapper');

function handleSubmit(event) {

}
let showForm = false;
function showFormedit() {
    showForm = true;
    if (showForm == true) {
        formWrapper.innerHTML = `<form id="edit-infomation" onsubmit="handleSubmit()">
        <input type="text" placeholder="name">
        <input type="text" placeholder="sdt">
        <input type="" placeholder="email">
        <input type="text" placeholder="diachi">
        <button type="submtextit" class="btn bg-green">Cập nhật</button>
    </form>`
    }
}


let listUserRender = phoneList.map((user, index) => {
    return `<tr>
    <td><input type="checkbox" id="check"></td>
    <td>${index + 1}</td>
    <td>${user.name}</td>
    <td>${user.phone}</td>
    <td>${user.email}</td>
    <td>${user.add}</td>
    <td>
        <i class="fas fa-pen padding-5" onclick="showFormedit()"></i>
        <i class="fas fa-trash padding-5"></i>
    </td>
</tr>`
}).join("\n");
console.log(typeof listUserRender);
console.log(listUserRender);

table.innerHTML = `<thead class="row">
<th>
    <input type="checkbox" name="check-all" id="check-all">
</th>
<th>STT</th>
<th>Họ tên</th>
<th>Số điện thoại</th>
<th>Email</th>
<th>Địa chỉ</th>
<th>Thao tác</th>
</thead>
${listUserRender}
`