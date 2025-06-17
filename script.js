function addTask(taskText, save = true) {
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create list item
    const li = document.createElement('li');

    // Add task text node (instead of setting .textContent)
    const taskTextNode = document.createTextNode(taskText);
    li.appendChild(taskTextNode);

    // Create the remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Remove task on click and update Local Storage
    removeBtn.addEventListener('click', () => {
        li.remove();
        removeTaskFromStorage(taskText);
    });

    // Append the remove button to the li
    li.appendChild(removeBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Save task to Local Storage
    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Clear input field
    taskInput.value = '';
}
