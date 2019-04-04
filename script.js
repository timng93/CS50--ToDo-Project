const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text"
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

function checkToDo(todo) {
  uncheckedCount += todo;
  uncheckedCountSpan.innerHTML = uncheckedCount;
}

function createToDo() {
  const checkBox = document.createElement("input");
  checkBox.className = classNames.TODO_CHECKBOX;
  checkBox.type = "checkbox";
  checkBox.onchange = toggleCheckbox;

  const text = document.createElement("span");
  text.className = classNames.TODO_TEXT;
  text.innerHTML = "New To Do";

  const listItem = document.createElement("li");
  listItem.className = classNames.TODO_ITEM;
  listItem.appendChild(checkBox);
  listItem.appendChild(text);

  return listItem;
}

function addTodo(item) {
  const todo = createToDo(item);
  list.appendChild(todo);
  addToDo(1);
  checkToDo(1);
}

function toggleCheckbox() {
  this.checked ? checkToDo(-1) : checkToDo(1);
}
