# Task 10: Connecting the Frontend with the Backend

## Description

Now that we have implemented the frontend and the backend of the final project, its time to connect these two layers.

## Walkthrough

### Step 1: Using fetch to POST the new Item

> #### Useful Resources for this step
>
> - [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

In this step, we'll use the Fetch API to consume the save item endpoint.

1. In `js/ItemsController.js`, implement a new function called `save` that will POST the new item's data using the `fetch` function:

   ```javascript
       save({name, description, imageUrl}){
               const data = { name,  description, imageUrl };

               fetch('http://localhost:8080/item', {
               method: 'POST', // or 'PUT'
               headers: {
                   'Content-Type': 'application/json',
               },
               body: JSON.stringify(data),
               })
               .then(response => response.json())
               .then(data => {
               console.log('Success:', data);
               })
               .catch((error) => {
               console.error('Error:', error);
               });
           }
   ```

2. Modify the `save` method of the `ItemsController.java` to avoid the [CORS mechanism](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

   ```java
       @CrossOrigin
       @PostMapping
       public Item save( @RequestBody ItemDto itemDto )
       {
           return itemService.save( new Item( itemDto ) );
       }
   ```

3. Add a call to the `uploadItem` function inside the scope of `addItem` function (you could call it after the items are stored on the `localStorage`).

> #### Test Your Code!
>
> Now is a good chance to test your code, start your Server API and verify if the data is stored correctly on the MySQL database.
>
> 1. Open `item-form.html` in the browser and create a new item using the form.
>
> **Expected Result**
> You should see the success message on the console log.

### Step 2: Consuming REST API

> #### Useful Resources for this step
>
> - [How to use fetch api for crud operations](https://dev.to/duhbhavesh/how-to-use-fetch-api-for-crud-operations-57a0)

Now that we have made the implementation of the `save` function to consume the `POST /item` endpoint we'll implement the missing functions:

- update
- findByItemId
- delete

1. Implement the `update` function.
2. Change your code so the save button calls the `update` function.
3. Test the `update` function(make sure you send an existing item id)
4. Implement the `findItemById`
5. Change your code so the save button calls the `findItemById` function.
6. Populate the item's data into the corresponding form fields.
7. Test the `findItemById` function (make sure you send an existing item id)
8. Implement the `delete` function.
9. Change your code so the save button calls the `delete` function.
10. Test the `delete` function (make sure you send an existing item id)

## Results

Now you have all the methods to consume the REST API CRUD operations. Congratulations!

## Example

Stuck? Check out the provided example in the [example/](example/) folder
