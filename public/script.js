document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
    }
});

function addTodoItem(text) {
    const li = document.createElement('li');
    li.textContent = text;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        li.remove();
    });
    li.appendChild(removeButton);
    document.getElementById('todo-list').appendChild(li);
}
