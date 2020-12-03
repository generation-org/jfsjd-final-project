// Create the HTML for a task
// Add an data-task-id attribute to each task
// OPTIONAL 1: Add visible or invisible class to the "Mark As Done" button depending on if the status is 'TODO'
// OPTIONAL 2: Change the styling of the status pill depending on the passed in status
// Add a Delete button with the class delete-button
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
            <button class="btn btn-outline-success done-button mr-1 ${status === 'TODO' ? 'visible' : 'invisible'}">Mark As Done</button>
            <button class="btn btn-outline-danger delete-button">Delete</button>
        </div>
    </li>
`;

// Create a TaskManager class
class TaskManager {
    // Set up the tasks and currentId property in the contructor
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    // Create the addTask method
    addTask(name, description, assignedTo, dueDate) {
        const task = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };

        // Push the task to the tasks property
        this.tasks.push(task);
    }

    // Create the deleteTask method
    deleteTask(taskId) {
        const newTasks = [];

        // Loop over the tasks
        for (let i = 0; i < this.tasks.length; i++) {
            // Get the current task in the loop
            const task = this.tasks[i];

            // Check if the task id is not the task id passed in as a parameter
            if (task.id !== taskId) {
                // Push the task to the newTasks array
                newTasks.push(task);
            }
        }

        // Set this.tasks to newTasks
        this.tasks = newTasks;
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

    // Create the render method
    render() {
        // Create an array to store the tasks' HTML
        const tasksHtmlList = [];

        // Loop over our tasks and create the html, storing it in the array
        for (let i = 0; i < this.tasks.length; i++) {
            // Get the current task in the loop
            const task = this.tasks[i];

            // Format the date
            const date = new Date(task.dueDate);
            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

            // Create the task html
            // Pass the task id as a parameter
            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);

            // Push it to the tasksHtmlList array
            tasksHtmlList.push(taskHtml);
        }

        // Create the tasksHtml by joining each item in the tasksHtmlList
        // with a new line in between each item.
        const tasksHtml = tasksHtmlList.join('\n');

        // Set the inner html of the tasksList on the page
        const tasksList = document.querySelector('#tasksList');
        tasksList.innerHTML = tasksHtml;
    }

    // Create the save method
    save() {
        // Create a JSON string of the tasks
        const tasksJson = JSON.stringify(this.tasks);

        // Store the JSON string in localStorage
        localStorage.setItem('tasks', tasksJson);

        // Convert the currentId to a string;
        const currentId = String(this.currentId);

        // Store the currentId in localStorage
        localStorage.setItem('currentId', currentId);
    }

    // Create the load method
    load() {
        // Check if any tasks are saved in localStorage
        if (localStorage.getItem('tasks')) {
            // Get the JSON string of tasks in localStorage
            const tasksJson = localStorage.getItem('tasks');

            // Convert it to an array and store it in our TaskManager
            this.tasks = JSON.parse(tasksJson);
        }

        // Check if the currentId is saved in localStorage
        if (localStorage.getItem('currentId')) {
            // Get the currentId string in localStorage
            const currentId = localStorage.getItem('currentId');

            // Convert the currentId to a number and store it in our TaskManager
            this.currentId = Number(currentId);
        }
    }
}

