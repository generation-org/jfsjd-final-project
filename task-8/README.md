# Task 8: Update A Task

## Description

For this task, we'll write the code to update a task's status to "DONE" once a "Mark As Done" button on the task is clicked.

Note, for this task, we are _not_ using the "Update Task" form. This is part of the re-structuring of the project. This step will be added as a **stretch goal** to the end of the course.

## Walkthrough

### Step 1: Adding the "Mark As Done" button

> #### Useful Resources for this step
> - [Bootstrap - Buttons](https://getbootstrap.com/docs/4.5/components/buttons/)

In this step, we'll add a "Mark As Done" button to the tasks, so that a user can click the button to mark that specific task as done.

1. In `js/taskManager.js`, within the `createTaskHtml` function, add a button to the task html to mark the task as done.
2. Add a 'done-button' class to the "Mark As Done" button. We'll use this later to check if the button has been clicked.

> #### Test Your Code!
> Now is a good chance to test your code, open `index.html` in the browser and create a new task using the form.
>
> **Expected Result**
> You should see your tasks now have a "Mark As Done" button.

### Step 2: Adding an Event Listener to the Task List

> #### Useful Resources for this step
> - [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
> - [Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
> - [Event.eventTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)
> - [Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
> - [DOM Traversal](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#The_document_object_model)
> - [Node.parentElement](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)

In this step, we'll add an Event Listener to our **Task List**, so that we can check if one of our Task's buttons is clicked.

Note that we're not adding an Event Listener to the "Mark As Done" buttons, this is because instead of adding Event Listener's to each "Mark As Done" button, we can add a singular Event Listener to the **Task List** and use [DOM Traversal](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#The_document_object_model) to find the Task that was clicked. **DOM Traversal** is the act of using code to _traverse_ up and down the **DOM Tree** to find a specific **DOM Element**.

This way, we can avoid having to add Event Listeners to each and every "Mark As Done" button on the page.

1. Make sure the **Task List** in `index.html` has an id you can use to select it, I went with `tasksList`.

2. In `js/index.js`, at the bottom of the file, use `querySelector` to select the **Task List** and store it in a variable.

3. Add an Event Listener to the **Task List**, listening for the 'click' event.

4. In the Event Handler, we'll need to take the `event` parameter. 

    For example:
    ```js
    tasksList.addEventListener('click', (event) => { // "event" here is the event parameter

    });
    ```

5. Using the `event.target`, using an `if` statement, check if the `target`'s `classList` contains the class we added to the button, `'done-button'`. If the `classList` contains `'done-button'`, we know we clicked on the "Mark As Done" button from earlier!

6. Use [DOM Traversal](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#The_document_object_model), such as the `parentElement` property of the `target` ([Node.parentElement](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)) to _traverse_ the DOM and find the task's element. (Eg, it's `<li>`). Store the `<li>` in a `parentTask` variable.

    **Note**: This one is tricky! Head over to the [example/js/index.js](example/js/index.js) file to see how I did it.

> #### Test Your Code!
> Now is a good chance to test your code, open `js/index.js` and do the following:
> 1. Directly after the code that traverses the DOM to find the `parentTask`, `console.log()` the `parentTask`.
> 2. Open `index.html` in the browser.
> 3. Create a new task with the form.
> 4. Click the "Mark As Done" button on the newly created task.
>
> **Expected Result**
> In the browser console, you should see the Task's element logged.

### Step 3: Adding the Task id to the DOM

> #### Useful Resources for this step
> - [Using Data Attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
> - [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

In order to find the correct Task we want to update, we need a way to find which `TaskManager`'s `Task`'s "Mark As Done" button we clicked on the page. To do this, we'll be using our unique `id` we set for each task in the previous project steps.

Before we do however, we'll need to make sure we add this `id` to the HTML of each `task`, so that we can later retrieve the `id` and use it to look up which `task` we clicked.

1. In `js/taskManager.js`, find the `createTaskHtml` function created in the project's **Task 7**.

2. Add a new parameter to the function, `id`.

3. Within the HTML of the task, use a placeholder (`${}`) in the template literal to add the `id` as the value of a `data-task-id` attribute of the surrounding `task` element - Either the `<li>` or the `<div>`, depending on which one your group used.

    **Note** Check the [Using Data Attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) resource to see how this is done!

4. In `js/taskManager.js`, find the `render()` method of the `TaskManager` class.

5. Find where `createTaskHtml` is used, and pass in the `task.id` as the new `id` parameter.

> #### Test Your Code!
> Now is a good chance to test your code, open `js/index.js` and do the following:
> 1. In the previous test your code, we logged out the Task DOM element, re-implement the same test code.
>
> **Expected Result**
> In the browser console, you should see the Task's element logged, the Task element should now have a `data-task-id` attribute set to the `id` of the task.

### Step 4: Adding getTaskById to the TaskManager class

> #### Useful Resources for this step
> - [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

Now that we have our task `id` in our HTML, we need a way to use the `id` to find the correct task. In this step, we'll implement a `getTaskById` method on our `TaskManager` class to do just that. The `getTaskById` will compare a passed in `taskId` parameter to the ids of the `TaskManager` `tasks`. If it finds a matching task, it will return it from the method.

1. In `js/taskManager.js`, find the `TaskManager` class.

2. Add a new method, `getTaskById()`, it should accept a `taskId` as a parameter.

3. In the `getTaskById()` method, create a `foundTask` variable to store the found task.

    **Note** Since we'll be _mutating_ (modifying) this variable, be sure to declare it with `let`!

4. Loop over the `this.tasks` array, for each task in the loop:

    1. Store the current task in a variable called `task`

    2. Compare `task.id` to the passed in `taskId`, if its a match, store the `task` to the variable `foundTask`

5. After the loop, return the `foundTask` variable from the method.

> #### Test Your Code!
> Now is a good chance to test your code, open `index.html` in the browser and do the following:
> 1. Add a task using the new task form
> 2. Open the JavaScript console
> 3. Call `getTaskById()` using the `TaskManager` instance created in `js/index.js`, using `0` as the `taskId` eg: `taskManager.getTaskById(0)`.
>
> **Expected Result**
> In the browser console, you should see an object representing the task with an `id` of `0`.

### Step 5: Update the status of the selected Task to 'DONE'

> #### Useful Resources for this step
> - [Using Data Attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
> - [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

Now that we have the code in place that adds each `task.id` to the DOM, as well as a method `getTaskById` to retrieve the right ask from our `TaskManager`, we can combine the two to update the `task.status` to `'DONE'` once the "Mark As Done" button is clicked.

1. In `js/index.js`, find the Event Listener for the **Task List** `click` event we created in **Step 2**.

2. After finding the `parentTask`, create a `taskId` variable, setting the value to the `taskId` `data-attribute` of the DOM element.

    **Note**: The `data-attribute` will be a `String`, but our `id`s are stored as `Number`s, make sure to convert the `String` to a `Number` before setting it to the `taskId` variable. Check [example/js/index.js](example/js/index.js) if you get stuck!

3. Using the `taskId` as it's parameter, call the `getTaskById()` method on the `taskManager`, storing the result in a `task` variable.

4. Change the `status` of the `task` to `'DONE'`.

5. Render the updated task by calling the `render()` method on the `taskManager`. 

> #### Test Your Code!
> Now is a good chance to test your code, open `index.html` in the browser and do the following:
> 1. Add a task using the new task form
> 2. Click the "Mark As Done" button on the newly created task
>
> **Expected Result**
> You should see the `status` of the task update to `'DONE'` in the browser!

### (OPTIONAL 1) Step 6: Stretch Goal - Hiding the "Mark As Done" Button For Completed Tasks

> #### Useful Resources for this step
> - [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Conditional_ternary_operator)

Stretch Goals are optional steps to attempt once your group has completed **all** previous steps. Stretch Goals require out-of-the-box thinking and do not include a step-by-step walkthrough. It's a challenge, good luck!

For this Stretch Goal, we want to hide the "Mark As Done" button for Task's that are already done.

In `js/taskManager.js`, in the HTML for each Task, add an `invisible` class to the "Mark As Done" button if the `status` parameter is `'TODO'`, and the `visible` class if it isn't.

Check out [example/js/taskManager.js](example/js/taskManager.js) for a completed example!

### (OPTIONAL 2) Step 7: Stretch Goal - Change the Styling of the Task Status.

> #### Useful Resources for this step
> - [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Conditional_ternary_operator)

Stretch Goals are optional steps to attempt once your group has completed **all** previous steps. Stretch Goals require out-of-the-box thinking and do not include a step-by-step walkthrough. It's a challenge, good luck!

For this Stretch Goal, we want to add specific styles to our Task Status depending on whether the Status is `'DONE'` or `'TODO'`.

In `js/taskManager.js`, in the HTML for each Task, change the style (eg: color) of the Task Status, depending on whether the passed in `status` is equal to `'TODO'` or not.

Check out [example/js/taskManager.js](example/js/taskManager.js) for a completed example!

## Results

Open up `index.html` and add a task. Now we should we able to click the "Mark As Done" button below each task, to change the status from "TODO" to "DONE".

## Example

Stuck? Check out the provided example in the [example/](example/) folder
