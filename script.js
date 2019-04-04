const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete"
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

let itemCount = 0;
let uncheckedCount = 0;

function addToDo(todo) {
  itemCount += todo;
  itemCountSpan.innerHTML = itemCount;
}

function removeToDo(todo) {
  uncheckedCount += todo;
  uncheckedCountSpan.innerHTML = uncheckedCount;
}

function newTodo() {
  addToDo(1);
  removeToDo(1);
  // alert('New TODO button clicked!')
}
