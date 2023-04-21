const tableList = document.getElementById('table-shopping-list');
const inputAddItem = document.getElementById('input-add-item');
const logField = document.getElementById('log-field');
const btnAdd = document.getElementById('btn-add');
const btnRemove = document.getElementById('btn-remove');

let shoppingList = [];

btnAdd.addEventListener("click", function (event) {
    event.preventDefault();
    if (inputAddItem.value.length !== 0) {
        shoppingList.push(inputAddItem.value);
        tableList.innerHTML += `
        <tr>
            <th scope="row">${shoppingList.length}</th>
            <td>test item</td>
        </tr>
        `
        logColor("success");
        logField.value = "Item added";
    } else {
        logColor("warning");
        logField.value = "Input is empty";
    }
});

btnRemove.addEventListener("click", function (event) {
   event.preventDefault();

});

function logColor(color) {
    switch (color) {
        case "success":
            logField.classList.remove("text-bg-warning");
            logField.classList.add("text-bg-success");
            break;
        case "warning":
            logField.classList.remove("text-bg-success")
            logField.classList.add("text-bg-warning");
            break;
    }
}

