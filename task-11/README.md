# Task 11: Unit Testing the REST API

## Description

In our final task, we'll test our Services and Controllers using JUnit and Mockito.

## Walkthrough

### Step 1: Add Mockito to the project

> #### Useful Resources for this step
>
> - [Mockito Framework](https://site.mockito.org/)
> - [JUnit 5](https://junit.org/junit5/)

In this step, we'll include the mockito framework dependency in the `build.gradle` file.

1. Open the `build.gradle` file and include the following dependency:

```gradle
  	testCompile "org.mockito:mockito-core:3.7.7"
```

2. Sync Gradle again and verify that the dependency is downloaded and no errors occur.

### Step 2: Testing API Services

> #### Useful Resources for this step
>
> - [Mockito Verify](https://www.journaldev.com/21855/mockito-verify)

In this step, we'll test some of the methods of the `ItemService` implementation `ItemServiceMySQL`. In order to achieve this we will need to mock the `ItemRepository` class so we can verify the interactions with this component.

1. Create a new class inside the `test` package called `ItemServiceMySQLTest.java`.
2. Annotate the `ItemServiceMySQLTest.java` with `@SpringBootTest` and `@TestInstance( TestInstance.Lifecycle.PER_CLASS)`.
3. Create a new function called `saveCallsItemsRepositorySave` and annotate it with `@Test`.
4. Add an `ItemRepository` attribute inside the `ItemServiceMySQLTest.java` and annotate it with `@Mock`
5. Create a new function called `setup` and annotate it with `@BeforeAll` so it runs before each test inside the `ItemServiceMySQLTest.java`.
6. Create a new attribute for the `ItemService` class and instantiate it with `ItemServiceMySQL` inside the `setup` function(pass the `itemRepository` mock as constructor argument).
7. Write the code inside the `saveCallsItemsRepositorySave` function so the `itemService.save` method is invoked and check for the interaction with the `itemRepository` mock using the `verify` function.

```java

import org.generation.ItemsAPI.repository.ItemRepository;
import org.generation.ItemsAPI.repository.entity.Item;
import org.generation.ItemsAPI.service.ItemService;
import org.generation.ItemsAPI.service.ItemServiceMySQL;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

@SpringBootTest
@TestInstance( TestInstance.Lifecycle.PER_CLASS)
public class ItemServiceMySQLTest
{

    @Mock
    ItemRepository itemRepository;

    ItemService itemService;

    @BeforeAll
    public void setup()
    {
        itemService = new ItemServiceMySQL( itemRepository );
    }

    @Test
    public void saveCallsItemsRepositorySave()
    {
        Item itemMock = mock( Item.class );
        itemService.save( itemMock );
        verify( itemRepository ).save( itemMock );
    }
}

```

> #### Test Your Code!
>
> Now is a good chance to test your code, run the method `saveCallsItemsRepositorySave()`:
>
> 1. Click the play button next to the method signature.
>
> **Expected Result**
> You should see all the tests pass, they will be colored green!

8. Write additional tests to verify the correct behaviour of the `ItemService` implementation: `ItemServiceMySQL`.
9. Create additional test classes to test the other services of your application.

### Step 3: Testing your Controllers

In this step, we'll test the REST controllers of your API.

Make sure to adjust any examples you reference to fit your code.

1. Use what you have learnt to unit test the following methods on the `ItemsController` class:

- `getItems`
- `save`
- `findItemById`
- `update`
- `delete`

2. Implement additional unit test for other controllers of your application.
   Hint: Make good use of the verify method to check for mock interactions!

## Results

Right click the test package and run all your test to see the Test Results pannel. If your tests were implemented correctly, you should see all green passed tests!

## Example

Stuck? Check out the provided example in the [example/](example/) folder
