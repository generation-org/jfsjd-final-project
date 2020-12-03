# Task 10: Deleting Tasks

## Description

Now that we are persisting tasks to `localStorage`, we need a way to delete old tasks so that they don't fill up the list over time.

## Walkthrough

### Step 1: Add A Delete Button to the Task HTML

> #### Useful Resources for this step
> - [Bootstrap Buttons](https://getbootstrap.com/docs/4.5/components/buttons/)

In this step, we'll need to make sure we have a button on each of our tasks to delete the task.

1. In `js/taskManager.js`, find the function `createTaskHtml`.
2. In the returned HTML, add a `button` to delete the task, giving it a class `delete-button` that we will use later to check if the button was clicked.

> #### Test Your Code!
> Now is a good chance to test your code, follow the steps below:
> 1. Open `index.html` in the browser and create a new task using the form.
>
> **Expected Result**
> You should see tasks you have created now have a "Delete" button.

### Step 2: Create the deleteTask Method on TaskManager

> #### Useful Resources for this step
> - [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

Now we'll need a way to delete the task. For this, we'll create a `deleteTask` method on our `TaskManager` class.

In this method, we'll be removing the task from the `this.tasks` array. Interestingly, there is no simple way to remove an element from an array. Instead, we can tackle this problem in one of two ways:

- Use the `slice()` method to remove a section of the array
- Create a new array **without** the elements we want removed included.

For this step, we'll go with the second way. It's more _explicit_ and clear.

1. In `js/taskManager.js`, create a `deleteTask` method on the `TaskManager` class. It should take one parameter, `taskId`, the id of the task we want deleted.
2. In the `deleteTask` method, create an empty array and store it in a new variable, `newTasks`.
3. Loop over the tasks, in the loop
    - Get the current task in the loop, store it in a variable, `task`.
    - Check if `task.id` is **not** equal to the `taskId` passed as a parameter.
    - If the `task.id` is **not** equal to the `taskId`, push the `task` into the `newTasks` array.
4. Set `this.tasks` to `newTasks`.

### Step 3: Setting an EventListener to the Delete Button on Tasks

> #### Useful Resources for this step
> - [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
> - [Using Data Attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

Now we have our `deleteTask` method ready, we need to connect it to the delete buttons we created in Step 1.

We'll be using the `delete-button` class we added to the buttons to find them. It's all very similar to the code we did for the "Mark As Done" button. After the deleting the task, remember to `taskManager.save()` and `taskManager.render()` the tasks!

1. In `js/index.js`, find the `EventListener` for the `click` event on the `Tasks List` we created in Task 8.
2. At the bottom of the function, after our code that handles the "Mark As Done" button, create a new `if` statement to check if the `event.target.classList` `contains` the class `'delete-button'`.
3. If it does, get the `parentTask` and store it as a variable.
4. Get the `taskId` of the parent task from its `data-task-id` property - **remember**, since it's stored as a string in a `data` attribute, we need to convert it to a number, just like we did for task 8!
5. Delete the task, passing the `taskId` to `taskManager.deleteTask()`
6. Save the tasks to `localStorage` using `taskManager.save()`
7. Render the tasks using `taskManager.render()`.
    
## Results

Open up `index.html` and add a task. Find the task in the Task List and click the delete button. The task should now be deleted!

Refresh the page to make sure the new list with the task deleted is saved. When you refresh the page, you should _not_ see the deleted task in the list.

## Example

Stuck? Check out the provided example in the [example/](example/) folder
