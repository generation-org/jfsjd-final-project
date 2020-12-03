// Add an data-task-id attribute to each task
// OPTIONAL 1: Add visible or invisible class to the "Mark As Done" button depending on if the status is 'TODO'
// OPTIONAL 2: Change the styling of the status pill depending on the passed in status
const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => `
    <li class="list-group-item" data-task-id=${id}>
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge ${status === 'TODO' ? 'badge-danger' : 'badge-success'}">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>${description}</p>
        <div class="d-flex w-100 justify-content-end">
            <button class="btn btn-outline-success done-button ${status === 'TODO' ? 'visible' : 'invisible'}">Mark As Done</button>
        </div>
    </li>
`;

class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(name, description, assignedTo, dueDate) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };

        this.tasks.push(task);
    }

    getTaskById(taskId) {
        // Create a variable to store the found task
        let foundTask;

        // Loop over the tasks and find the task with the id passed as a parameter
        for (let i = 0; i < this.tasks.length; i++) {
            // Get the current task in the loop
            const task = this.tasks[i];

            // Check if its the right task by comparing the task's id to the id passed as a parameter
            if (task.id === taskId) {
                // Store the task in the foundTask variable
                foundTask = task;
            }
        }

        // Return the found task
        return foundTask;
    }

    render() {
        const tasksHtmlList = [];

        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];

            const date = new Date(task.dueDate);
            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

            // Pass the task id as a parameter
            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);

            tasksHtmlList.push(taskHtml);
        }

        const tasksHtml = tasksHtmlList.join('\n');

        const tasksList = document.querySelector('#tasksList');
        tasksList.innerHTML = tasksHtml;
    }
}

