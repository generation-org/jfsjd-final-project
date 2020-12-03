# Task 6: Adding Tasks

## Description

For this task, we'll be creating a class to manage the tasks, adding a method to the class to keep track of tasks in our application, and connecting up the **New Task** form to create tasks.

## Walkthrough

### Step 1: The Setup

In this step, we'll re-organise our folder structure in preparation for the next few steps.

1. Create a `js` folder in your project if one does not already exist
2. Copy the existing js file into your `js` folder, and rename it to `index.js`
3. Update the `<script>` tag in your `html` file to use the new location of the `js/index.js` file.
4.  Create a `taskManager.js` file in the `js` folder
5. Add a `<script>` tag pointing to the `js/taskManager.js` file _before_ the `<script>` tag pointing to the `js/index.js` file.

### Step 2: The TaskManager Class

In this step, we'll create a `TaskManager` class that
will be responsible for managing the tasks in the application.

> #### Useful Resources for this step
> - [ECMAScript 2015 Classes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance#ECMAScript_2015_Classes)

1. Create a `TaskManager` class in `js/taskManager.js`
2. Within the `constructor` of the `TaskManager` class, initialize a `this.tasks` property on the class equal to an empty array.

> #### Test Your Code!
> Now is a good chance to test your code, head over to `js/index.js` and do the following
>
> 1. Initialize a new instance of `TaskManager`
> 2. `console.log()` the `tasks` property
>
> **Expected Result**
> You should see an empty array logged to the browser.

### Step 3: Adding A New Task Programmatically

In this step, we'll add a method to the `TaskManager` class that will allow us to add tasks to it's `tasks` property.

As part of this process, we're going to create a unique `id` for each task.

For each task for have a unique `id`, we will need to keep track of what `id` the latest task was created with, so that we can increment that `id` for the next task.

For example, pay attention to the two `task` objects below:
```js
const task1 = {
    id: 1,
    name: 'Take out the trash',
    description: 'Take out the trash to the front of the house',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'TODO'
};

const task2 = {
    id: 2,
    name: 'Cook Dinner',
    description: 'Prepare a healthy serving of pancakes for the family tonight',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'TODO'
};
```

Notice how each task has a unique `id`? We will be using this `id` in future steps to keep track of the different tasks. 

> #### Useful Resources for this step
> - [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

1. In the `TaskManager`'s `constructor`, accept a `currentId` parameter, with a default value of `0`.
2. Assign the `currentId` to a new property on the class, `this.currentId`.
3. Create a method on the class, `addTask`. This method should accept all the nessecary information from the form to create a task as parameters.
    - `name`
    - `description`
    - `assignedTo`
    - `dueDate`
4. Within the `addTask` method, increment the `this.currentId`
5. `push` a new task into the `this.tasks` array, with the correct properties of the task, using the values passed in as parameters as well as the new `this.currentId`
    **Note** Make sure to include the `id` and a default `status` of `'TODO'`

> #### Test Your Code!
> Now is a good chance to test your code, head over to `js/index.js` and do the following
>
> 1. Initialize a new instance of `TaskManager`
> 2. Use the `addTask` method to add a new task
> 2. `console.log()` the `tasks` property
>
> **Expected Result**
> You should see an array containing the added task logged to the browser.

### Step 4: Adding Tasks With The Form

In this final step, we will use the `TaskManager` class to keep track of tasks we add with the **New Task** form.

**Note**: For now, if your **New Task** form is on a seperate page to your **Task List**, copy it over to your **Task List** so it's all on the one page.

> #### Useful Resources for this step
> - [Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
> - [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
> - [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)

1. Make sure a new `TaskManager` is initialized near the top of the file.
2. In `index.js`, add an event listener to the **New Task** form, listening to the `submit` event. If there is already an event listener used for validation, use that one.
3. When the `submit` event fires, if validation of the form is successful, use the values of each `input` in the form to call the `taskManager`'s `addTask` method.
    - **Note**: Make sure to prevent the default action of the form!
4. Clear the values from each form input, ready for the next submission.

## Results

We've now set up the `TaskManager` class, created an `addTask` and hooked it up to our **New Task** form!

Test out your code by adding some tasks using the **New Task** form, and checking the `TaskManager` instance's `tasks` array for the tasks.

## Example

Stuck? Check out the provided example in the [example/](example/) folder!