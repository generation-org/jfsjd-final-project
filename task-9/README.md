# Task 9: Implementing the REST API

## Description

In this task, we'll implement our REST API so you can perfomr the CRUD(Create, Read, Update and Delete) operations
over your data model using the HTTP protocol.

## Walkthrough

### Step 1: Implementing your Items Service

> #### Useful Resources for this step
>
> - [Spring Beans and Dependency Injection](https://docs.spring.io/spring-boot/docs/2.0.x/reference/html/using-boot-spring-beans-and-dependency-injection.html)

In this step, we'll define our Service interface and create an implentation that handles the interaction with MySQL Database. An interface is a contract that good software developers use to define a component's behavior without worrying about the implementation.

1. Create a new package in your Spring Boot project called `service`
2. Create a the `ItemService` interface with the functions needed to implement the Items CRUD:

   ```java
        public interface ItemService
        {

            Item save( Item item );

            boolean delete( int itemId );

            List<Item> all();

            Item findById( int itemId );

        }
   ```

3. In the `save` method, create a JSON string of the tasks using `JSON.stringify()` and store it to a new variable, `tasksJson`.
4. Store the JSON string in `localStorage` under the key `tasks` using `localStorage.setItem()`.
5. Convert the `this.currentId` to a string and store it in a new variable, `currentId`.
6. Store the `currentId` variable in `localStorage` under the key `currentId` using `localStorage.setItem()`.
7. In `js/index.js`, after both adding a new task and updating a task's status to done, call `taskManager.save()` to save the tasks to `localSorage`.

> #### Test Your Code!
>
> Now is a good chance to test your code, follow the steps below:
>
> 1. Open `index.html` in the browser and create a new task using the form.
> 2. Open the developer tools and navigate to the `Application` tab.
> 3. In the sidebar, under `Storage`, expand `Local Storage` and select `file://`
>
> **Expected Result**
> You should see a key `tasks` with the stringified array of tasks as it's value, as well as a key `currentId` with the currentId as it's value.
> ![Image of Expected Result](images/1.png)

### Step 2: Adding the load method to TaskManager

> #### Useful Resources for this step
>
> - [Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
> - [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

Now that we have saved our tasks to `localStorage`, we need a way to load them back into our `TaskManager` when we load the application. As well as loading our `currentId` back into our `TaskManager`.

For this, we'll be converting the array we _stringified_ with `JSON.stringify()` back to an array, using `JSON.parse()`, before storing them back into the `TaskManager`'s `this.tasks`.

We'll also be converting the `currentId` number we converted as a string, back to a number.

1. In `js/taskManager.js`, add a new method called `load`. This method doesn't require any parameters.
2. In the `load` method, check if any tasks are saved in localStorage with `localStorage.getItem()`.
3. If any tasks are stored, get the JSON string of tasks stored in `localStorage` with `localStorage.getItem()`, making sure to pass the key we used to save the tasks, `tasks`. Store this string into a new variable, `tasksJson`.
4. Convert the `tasksJson` string to an array using `JSON.parse()` and store it in `this.tasks`.
5. Next, check if the `currentId` is saved in localStorage with `localStorage.getItem()`.
6. If the `currentId` is stored, get the `currentId` in localStorage using `localStorage.getItem()` and store it in a new variable, `currentId`.
7. Convert the currentId to a number before storing it to the `TaskManager`'s `this.currentId`
8. In `js/index.js`, near the top of the file, after _instantiating_ `taskManager`, `load` the tasks with `taskManager.load()` and render them with `taskManager.render()`.

## Results

Open up `index.html` and add a task. Now, when you re-visit the page (eg: close and open or refresh), you should see the previously created task loaded and rendered to the page!

Also, since we saved the `currentId`, any _new_ task we create should use the next `currentId`, after the one stored in `localStorage`.

## Example

Stuck? Check out the provided example in the [example/](example/) folder
