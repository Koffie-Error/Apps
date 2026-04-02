const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addTodo(text);
  input.value = '';
});

function addTodo(text) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.classList.add('todo-text');
  span.textContent = text;
  span.setAttribute('role', 'button');
  span.setAttribute('tabindex', '0');
  span.setAttribute('aria-label', 'Toggle completion for: ' + text);
  function toggleCompleted() {
    li.classList.toggle('completed');
  }
  span.addEventListener('click', toggleCompleted);
  span.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleCompleted();
    }
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = '✕';
  deleteBtn.setAttribute('aria-label', 'Delete todo');
  deleteBtn.addEventListener('click', function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);
}
