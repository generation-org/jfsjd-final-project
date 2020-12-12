# Task 5: Displaying Items List(posts or products)

## Description

For this task, we'll be creating the feature to display the objets list of the selected project:
* Products List
* Posts List

## Walkthrough

### Step 1: Define the item card layout

In this step, we'll create the item represantation using the [card component](https://getbootstrap.com/docs/4.4/components/card/)

1. Read the documentation and understand how to use the [card components](https://getbootstrap.com/docs/4.4/components/card/)
2. Add a `div` element with id `list-items` to add your list items dinamically with JavaScript.
3. Add 3 different sample item cards inside your `div` element.
> **Expected Result**
> You should see the items list display correctly

### Step 2: Adding your items cards programmatically ItemsManager Class

In this step, we'll create a function `addItemCard(item)` that
will be responsible for adding new items to list.

> #### Useful Resources for this step
> - [appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

1. Define a function the `addItemCard(item)` inside your in `js/index.js`
2. Write the code so your function can create the same HTML structure of your item card representation replacing the item information.

> #### Test Your Code!
> Now is a good chance to test your code, head over to you HTML page and open it on the browser
>
> 1. Open the console from the Developer Tools. 
> 2. Excecute the `addItemCard(item)` function from the console
>
> **Expected Result**
> You should see a new item added to your HTML.

### Step 3: Connecting your ItemsController with the FrontEnd

In this step, we'll connect the `ItemsController` class with the `addItemCard(item)` so when you create a new item is also displayed in the HTML items list.

1. In the `TaskManager`'s `constructor`, accept a `currentId` parameter, with a default value of `0`.
2. Assign the `currentId` to a new property on the class, `this.currentId`.
3. Create a method on the class, `addTask`. This method should accept all the nessecary information from the form to create a task as parameters.
    - `name`
    - `description`
    - `assignedTo`
    - `dueDate`

## Results

We've now implemented up the `addItemCard(item)` and connected to the `ItemsController`.

Test out your code by adding some items using the **New Item** form, and checking the items are displayed correctly.

## Example

Stuck? Check out the provided example in the [example/](example/) folder!
