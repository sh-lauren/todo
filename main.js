const tasks = document.querySelector('.tasks'),
      form = document.querySelector('.text-form'),
      input = document.querySelector('.text');

const currentItem = tasks.querySelectorAll('.task');
currentItem.forEach(item => addListener(item));

function addListener(item) {
  const deleteButton = item.querySelector('.delete');
  deleteButton.addEventListener('click', () => item.remove());
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value;
  input.value = '';
  addItem(text);
})

function addItem(text) {
  if (text.trim() === '') return;
  const todoItem = createItem(text);
  addListener(todoItem);
  tasks.append(todoItem);
}

function createItem(text) {
  const item = document.createElement('div');
  item.className = 'task';
  const deleteButton = document.createElement('div');
  deleteButton.className = 'delete';
  item.append(text, deleteButton);
  return item;
}