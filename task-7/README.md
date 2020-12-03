# Task 7: Display The Tasks

## Description

For this task, we'll be writing the code to dislay the `TaskManager`'s `tasks` array on the page.

## Walkthrough

### Step 1: Using Javascript to Create the Task HTML

> #### Useful Resources for this step
> - [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

In this step, we'll create a function using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to return the HTML for each individual task.

1. In `js/taskManager.js`, above the `TaskManager` class definition, create a new function, `createTaskHtml`. The function should accept the following parameters:
    - `name`
    - `description`
    - `assignedTo`
    - `dueDate`
    - `status`

    **Hint**: Try using an arrow function!

2. Within the `createTaskHtml` function, create a string using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), copying the HTML of a single task from the `index.html`

    For example:
    ```js
    const html = `
        <li class="list-group-item">
            <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
                <h5>Take out trash</h5>
                <span class="badge badge-danger">TODO</span>
            </div>
            <div class="d-flex w-100 mb-3 justify-content-between">
                <small>Assigned To: Nick</small>
                <small>Due: 20/09/2020</small>
            </div>
            <p>Take out the trash to the front of the house</p>
        </li>
    `
    ```

3. Using the template literal placeholders (`${}`), replace each section of the task HTML with the correct parameter

4. Return the HTML from the function

> #### Test Your Code!
> Now is a good chance to test your code, head over to `js/index.js` and do the following
>
> 1. Create a `taskHtml` variable with the result of calling the `createTaskHtml` function, making sure to pass a value for each parameter.
> 2. `console.log()` the `taskHTML` varirable
>
> **Expected Result**
> You should see HTML for the task in the console, for example:
>
> ```html
><li class="list-group-item">
>   <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
>       <h5>Take out trash</h5>
>       <span class="badge badge-danger">TODO</span>
>   </div>
>   <div class="d-flex w-100 mb-3 justify-content-between">
>       <small>Assigned To: Nick</small>
>       <small>Due: 20/09/2020</small>
>   </div>
>   <p>Take out the trash to the front of the house</p>
></li>
> ```

### Step 2: The render method

> #### Useful Resources for this step
> - [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
> - [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
> - [Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
> - [Array.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
> - [Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

To display the tasks, we'll be creating a new method on our `TaskManager` class called `render`.

"Render" is a term used in computer science that means to "create a visual reference of". In this step, we are _rendering_ our tasks, so that they are visible on the page.

We can mostly rely on the data stored for each task in the `TaskManager`'s `tasks` property to display the task nicely on the page. The one change we will need to make is to format the `dueDate` of the task so that it is human-readable. To do this, we'll be using JavaScript's `Date` object.

1. In `js/taskManager.js`, within the `TaskManager` class, create a `render()` method. This method does not need any parameters.

2. Create a variable storing an empty array to hold the HTML of all the tasks' html, `tasksHtmlList`.

3. Loop over the `TaskManager`'s tasks, for each task:

    1. Store the current task in a variable

    2. Create a `date` variable, storing a `new Date()`, passing in the current task's `dueDate` to the `Date` constructor.

    3. Create a `formattedDate` variable, storing a readable `string` representing the date, using methods of the `date` we just created. 

        **Hint**: Use MDN's [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) reference to see what methods are available to format a date. Build a string using string concatination or template literals. Check the [example/taskManager.js](example/taskManager.js) to see how it can be done if you get stuck.
    
    4. Create a `taskHtml` variable to store the HTML of the current task, by calling the `createTaskHtml` function and using the properties of the current task, as well as the new `formattedDate` variable for the parameters.

    5. `push` the `taskHtml` into the `tasksHtmlList` array.

4. After looping through each task, create a `tasksHtml` variable, set the variable to a string of HTML of all the tasks by `join`ing the `tasksHtmlList` array together, seperating each task's html with a newline.

    **Hint**: `\n` can be used to represent a newline.

5. Make sure the tasks list in `index.html` has an `id` so it can be selected.

6. Select the tasks list element and set its `innerHTML` to the `tasksHtml`.

### Step 3: Calling render

> #### Useful Resources for this step
> - [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

Now that the `TaskManager` class has a `render()` method, we need to make sure to call it each time a new task is added, so that it is _rendered_ to the page!

1. In `js/index.js`, in the event listener for the `submit` even on the **New Task** form, find the call to the `TaskManager`'s `addTask`.

2. After `addTask` is called, call the `TaskManager`'s `render` method.

## Results

Go ahead and open `index.html` in the browser and add some tasks using the form. You should see each new task populate the task list!

## Example

Stuck? Check out the provided example in the [example/](example/) folder








