# Task 6: Creating new items using the form

## Description

For this task, we'll be creating new Items using a form and validating the input data.

## Walkthrough

### Step 1: The Setup

1. Create a new file called `item-form.js` inside the `js` folder.
2. Add a `<script>` tag in your `item-form.html` file to include the `js/item-form.js` file.

### Step 2: Adding Items With The Form

In this step, we will use the `ItemsController` class to keep track of items we add with the **New Item** form.

> #### Useful Resources for this step
> - [Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
> - [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
> - [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)

1. Make sure a new `ItemsController` is initialized near the top of the `item-form.js` file.
2. In `item-form.js`, add an event listener to the **New Item** form, listening to the `submit` event. If there is already an event listener used for validation, use that one.
3. When the `submit` event fires, if validation of the form is successful, use the values of each `input` in the form to call the `itemsController`'s `addItem` method.
    - **Note**: Make sure to prevent the default action of the form!
4. Update the items list in local storage so the data is also reflected on the `items.html`.
4. Clear the values from each form input, ready for the next submission.

## Results

We've now set up the `ItemsController` class, used `addItem` and hooked it up to our **New Item** form!

Test out your code by adding some items using the **New Item** form, and checking the `ItemsController` instance's `items` array for the items.

## Example

Stuck? Check out the provided example in the [example/](example/) folder!
