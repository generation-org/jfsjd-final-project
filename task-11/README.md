# Task 11: Test TaskManager

## Description

In our final task, we'll test our `TaskManager` class using Jasmine.

## Walkthrough

### Step 1: Add Jasmine to the project

> #### Useful Resources for this step
> - [Jasmine - Getting Started](https://jasmine.github.io/pages/getting_started.html)

In this step, we'll download and add Jasmine to our project.

1. Download the current Jasmine standalone zip from the [Jasmine Github Releases page](https://github.com/jasmine/jasmine/releases)
2. Unzip the downloaded folder and place the following files and folders in your project directory:
  - `lib/`
  - `spec/`
  - `SpecRunner.html`
3. Clean up the files by removing any file in `spec`, and remove the references to source code and spec files in `SpecRunner.html`

### Step 2: Testing TaskManager Methods

> #### Useful Resources for this step
> - [Jasmine - Documentation](https://jasmine.github.io/api/3.6/global)

In this step, we'll test some of the methods that exist on our `TaskManager` class.

1. Add `js/TaskManager.js` as a source file in a `<script></script>` within `SpecRunner.html`.
2. Create a new spec for the `TaskManager` in the `specs` folder.
3. Add the spec in `SpecRunner.html`.
4. Use what you have learnt on testing to unit test the following methods on the `TaskManager` class:
  - `addTask`
  - `deleteTask`
  - `getTaskById`
5. Add a test case that tests how the `TaskManager` is initialized, ie: the `constructor` being called when a `new TaskManager()` is initialized.

> #### Test Your Code!
> Now is a good chance to test your code, follow the steps below:
> 1. Open `SpecRunner.html`.
>
> **Expected Result**
> You should see the tests all pass, green! 

### Step 3: Testing TaskManager Methods - CHALLENGE (OPTIONAL)

> #### Useful Resources for this step
> - [Jasmine - Documentation](https://jasmine.github.io/api/3.6/global)

In this step, we'll test the remaining methods on our `TaskManager` class. These are much more tricky than the previous methods, so make good use of the provided [example/spec/taskManager.js](example/spec/taskManager.js) if you get stuck.

Make sure to adjust any examples you reference to fit your code.

1. Use what you have learnt on testing to unit test the following methods on the `TaskManager` class:
  - `render`
  - `save`
  - `load`

Hint: Make good use of Spies! 

## Results

Open up `SpecRunner.html` in your browser and bask in all the green from the passed tests!

## Example

Stuck? Check out the provided example in the [example/](example/) folder
