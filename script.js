const tableList = document.getElementById('table-shopping-list');
const inputAddItem = document.getElementById('input-add-item');
const logField = document.getElementById('log-field');
const btnAdd = document.getElementById('btn-add');
const btnRemove = document.getElementById('btn-remove');

let shoppingList = ["lemons", "beer", "juice", "cola", "bread"];

for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList.at(i));
    tableList.innerHTML += `
        <tr id="item${i + 1}">
            <th scope="row">${i + 1}</th>
            <td>${shoppingList.at(i)}</td>
        </tr>
        `
}

btnAdd.addEventListener("click", function (event) {
    event.preventDefault();
    if (inputAddItem.value.length !== 0) {
        shoppingList.push(inputAddItem.value);
        tableList.innerHTML += `
        <tr id="item-${inputAddItem.value.replace(/\s/g, '-')}">
            <th scope="row">${shoppingList.length}</th>
            <td>${inputAddItem.value}</td>
        </tr>
        `
        logColor("success");
        logField.value = "Item added";
        inputAddItem.value = "";
    } else {
        logColor("warning");
        logField.value = "Input is empty";
    }
});

btnRemove.addEventListener("click", function (event) {
    event.preventDefault();
    // remove element from DOM
    document
        .getElementById(`item-${inputAddItem.value.replace(/\s/g, '-')}`)
        .remove();
    // remove item from list
    shoppingList.splice(shoppingList.indexOf(inputAddItem.value), 1);

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

// // soluzione ciclo while
// function printShoppingList() {
//     let i = 0;
//     while (i < shoppingList.length) {
//         console.log(shoppingList.at(i));
//         i++;
//     }
// }
