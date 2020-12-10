# Task 4: Model Object List(posts or products)

## Description

For this task, we'll be creating the feature to display the objets list of the selected project:
* Products List
* Posts List

## Walkthrough

### Step 1: Define the item card layout

In this step, we'll create the item represantion using [card component](https://getbootstrap.com/docs/4.4/components/card/)

1. Read the documentation and understand how to use the [card components](https://getbootstrap.com/docs/4.4/components/card/)
2. Add a `div` element with id `list-items` to add your list items dinamically with JavaScript.
3. Add 3 different sample item cards inside your dive
> **Expected Result**
> You should see the items list display correctly

### Step 2: Add your JavaScript to make it interactive

In this step, we'll create a `ItemsController` class that
will be responsible for adding and removing items to the HTML div with id `list-items`

> #### Useful Resources for this step
> - [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

1. Create a `ItemsController` class in `js/itemsController.js`
2. Within the `constructor` of the `ItemsController` class, initialize a `this.items` property on the class equal to an empty array.

> #### Test Your Code!
> Now is a good chance to test your code, head over to `js/itemsController.js` and do the following
>
> 1. Initialize a new instance of `ItemsController`
> 2. `console.log()` the `items` property
>
> **Expected Result**
> You should see an empty array logged to the browser.

### Step 3: Adding A New Item Programmatically

In this step, we'll add a method to the `ItemsController` class that will allow us to add items to the div with id `list-items`.

As part of this process, we're going to create a unique `id` for each item.

For each item for have a unique `id`, we will need to keep track of what `id` the latest task was created with, so that we can increment that `id` for the next task.

For example, pay attention to the two `items` objects below:
```js
const product1 = {
    id: 1,
    name: ''Tayto'',
    description: 'Cheese & Onion Chips',
    img: 'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg'
    createdAt: '2020-09-20'
};

const post1 = {
    id: 2,
    name: 'My first post',
    text: 'This is my first post',
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Post-greenland-uummannaq.jpg/1200px-Post-greenland-uummannaq.jpg"
    author: 'Andres Lowles',
    createdAt: '2020-09-20'
};
```

Notice how each item has a unique `id`? We will be using this `id` in future steps to keep track of the different items. 

> #### Useful Resources for this step
> - [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

1. In the `ItemsController`'s `constructor`, accept a `currentId` parameter, with a default value of `0`.
2. Assign the `currentId` to a new property on the class, `this.currentId`.
3. Create a method on the class, `addItem`. This method should accept all the nessecary information from the form to create an item as parameters.
    * Product
    - `name`
    - `description`
    - `img`
    - `createdAt`
    * Post
    - `name`
    - `text`
    - `img`
    - `author`
    - `createdAt`
 
4. Within the `addItem` method, increment the `this.currentId`
5. `push` a new task into the `this.items` array, with the correct properties of the item, using the values passed in as parameters as well as the new `this.currentId`
    **Note** Make sure to include the `id`

> #### Test Your Code!
> Now is a good chance to test your code, head over to `js/itemsController.js` and do the following
>
> 1. Initialize a new instance of `ItemsController`
> 2. Use the `addItem` method to add a new item
> 2. `console.log()` the `items` property
>
> **Expected Result**
> You should see an array containing the added item logged to the browser.

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
