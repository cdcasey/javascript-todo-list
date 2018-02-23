let addButton = document.querySelector('#add_todo');
let inputField = document.querySelector('#input-field');
let todoItems = document.querySelector('#ul--todo-items');

let editField = document.createElement("input");
editField.setAttribute('class', 'input-edit-field');
let itemString = '<input class="check-off" type="checkbox"><span class="todo-text">%</span><span class="delete-item">X</span>';

addButton.addEventListener('click', () => {
    if (inputField.value) {
        let newItem = document.createElement('li');
        newItem.innerHTML = itemString.replace('%', inputField.value);
        todoItems.appendChild(newItem);
        inputField.value = "";
    }
})

todoItems.addEventListener('click', (event) => {
    // console.log(event.target.parentNode);
    if (event.target.classList.contains("check-off")) {
        event.target.parentNode.setAttribute('class', 'completed');
    } else if (event.target.classList.contains('delete-item')) {
        event.target.parentNode.remove();
    } else if (event.target.classList.contains('todo-text')) {
        let todoText = event.target.innerText;
        // TODO: remove text. insert edit vield with removed text. handle hitting the enter key
        event.target.parentNode.appendChild(editField);
        editField.value = todoText;
        event.target.remove();
    }

})