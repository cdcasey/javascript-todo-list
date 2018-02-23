let addButton = document.querySelector('#add_todo');
let inputField = document.querySelector('#inputField');
let todoItems = document.querySelector('#ul--todo-items');

addButton.addEventListener('click', () => {
    console.log(inputField.value);
    let newItem = document.createElement('li');
    newItem.innerText = inputField.value;
    todoItems.appendChild(newItem);

})