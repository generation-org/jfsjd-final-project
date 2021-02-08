# Task 5: Displaying Items List(posts or products)

## Description

For this task, we'll be creating the feature to display the objects list of the selected project:
* Products List
* Posts List

## Walkthrough

### Step 1: Define the item card layout

In this step, we'll create the item representation using the [card component](https://getbootstrap.com/docs/4.4/components/card/)

1. Read the documentation and understand how to use the [card components](https://getbootstrap.com/docs/4.4/components/card/)
2. Define the HTML structure of the item card representation.
3. Add a `div` element with id `list-items` to add your list items dynamically with JavaScript. 
4. Add 3 different sample item cards inside your `div` element.
> **Expected Result**
> You should see the items list displayed correctly

### Step 2: Adding your items cards programmatically

In this step, we'll create a function `addItemCard(item)` that
will be responsible for adding new items to the list.

> #### Useful Resources for this step
> - [Document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

1. Define a function called `addItemCard(item)` inside your in `js/items.js`
2. Write the code so your function can create the same HTML structure of your item card representation replacing the item's information.

> #### Test Your Code!
> Now is a good chance to test your code, head over to you HTML page and open it on the browser:
>
> 1. Open the console from the Developer Tools. 
> 2. Excecute the `addItemCard(item)` function from the console
>
> **Expected Result**
> You should see a new item card added to the DOM.

### Step 3: Store and read Items from the LocalStorage

In this step, we'll connect the `ItemsController` class and `items.js` with the local storage to persist your items data.

1. Modify the `items.js` adding a new function to save sample items data in the local storage. Use the following JSON structure as 
reference(make sure you save the data as a String).

```javascript

        const sampleItems = [{'name':'juice',
        'img':'https://www.gs1india.org/media/Juice_pack.jpg',
        'description':'Orange and Apple juice fresh and delicious'},
        {'name':'Tayto',
        'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
        'description':'Cheese & Onion Chips'}];
        localStorage.setItem("items", JSON.stringify(sampleItems));
```

2. Modify the `ItemsController` so it loads the data from the storage implementing a new function `items.js` 

```javascript
    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items")
        if (storageItems) {
            const items = JSON.parse(storageItems)
            //TODO load the items into the local items structure (this.items)           
        }
    }
```

3. Implement a new function in the `items.js` that loads the items from the `ItemsController` using the function you already implemented `addItemCard(item)`.

4. Modify the `items.js` so it calls the `loadItemsFromLocalStorage()` and then iterate the `ItemsController.items` list to load the items into your  `items.html` page using the function implemented from  `addItemCard(item)`

## Results

We've now implemented a basic version of your application that persist the data on the local storage.

Test out your code by calling the funciton that loads the data from the local storage and verify the items are displayed correctly. You can also use the developer tools and navigate to the Application tab to verify that the items are saved in the local storage.

## Example

Stuck? Check out the provided example in the [example/](example/) folder!
