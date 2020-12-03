const taskManager = new TaskManager(0);

const newTaskForm = document.querySelector('#newTaskForm');

newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');

    /*
        Validation code here
    */

    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;

    taskManager.addTask(name, description, assignedTo, dueDate);

    // Render the tasks
    taskManager.render();

    newTaskNameInput.value = '';
    newTaskDescription.value = '';
    newTaskAssignedTo.value = '';
    newTaskDueDate.value = '';
});