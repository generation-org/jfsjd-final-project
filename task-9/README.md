# Task 9: Implementing the REST API

## Description

In this task, we'll implement our REST API so you can perform the CRUD(Create, Read, Update and Delete) operations
over your data model using the HTTP protocol.

## Walkthrough

### Step 1: Implementing the ItemService

> #### Useful Resources for this step
>
> - [Spring Beans and Dependency Injection](https://docs.spring.io/spring-boot/docs/2.0.x/reference/html/using-boot-spring-beans-and-dependency-injection.html)

In this step, we'll define our Service interface and create an implentation that handles the interaction with MySQL Database. An interface is a structure or syntax that allows software developers to define a component's behavior without worrying about the implementation.

1. Create a new package in your Spring Boot project called `service`
2. Create the `ItemService` interface with the functions needed to implement the Items CRUD:

   ```java
        public interface ItemService
        {

            Item save( Item item );

            boolean delete( int itemId );

            List<Item> all();

            Item findById( int itemId );

        }
   ```

3. Create an implementation of the `ItemService` called `ItemServiceMySQL` and inject the `ItemRepository`.

   ```java
           public class ItemServiceMySQL implements ItemService
           {
               private final ItemRepository itemRepository;

               public ItemServiceMySQL(@Autowired ItemRepository itemRepository )
               {
                   this.itemRepository = itemRepository;
               }

               @Override
               public Item save( Item item )
               {
                   //TODO implement this method
                   return null;
               }

               @Override
               public void delete( int itemId )
               {
                   //TODO implement this method
               }

               @Override
               public List<Item> all()
               {
                   //TODO implement this method
                   return null;
               }

               @Override
               public Item findById( int itemId )
               {
                   //TODO implement this method
                   return null;
               }
           }

   ```

4. Implement the methods so you persist and retrieve your data using the `ItemRepository`.
5. Annotate the `ItemServiceMySQL` with `@Service` so it can be injected into the `ItemController`

   > #### Test Your Code!
   >
   > Now is a good chance to test your code, follow the steps below:
   >
   > 1. Inject the `ItemService` inside the `ItemController`
   > 2. Add a breakpoint inside the `getItems` function on the line 24 of the `ItemController`.
   > 3. Run your project on Debug Mode and open `http://localhost:8080/item` on your browser.
   >
   > **Expected Result**
   > You should see that the `ItemService` variable is instantiated with the `ItemServiceMySQL`

### Step 2: Connecting your ItemController with the ItemService

Now that we have defined the `ItemService` behavior and created an implementation `ItemServiceMySQL` - we can use this service to implement our REST API methods to fulfill the CRUD operations.

1. Inject `ItemService` inside the `ItemController`.
2. Modify the endpoint to retrieve the list of items to be `/item/all` and change the funciton implementation so it calls the `itemService.all()`
3. Create a new package inside the `controller` called `dto` for the Data Transfer Objects, these are Java classes used to map the JSON data structure sent and received by the REST controller.
4. Add a new class called `ItemDto` inside the `dto` package.

   ```java
   public class ItemDto
   {

       private String name;

       private String description;

       private String imageUrl;

       public ItemDto( String name, String description, String imageUrl )
       {
           this.name = name;
           this.description = description;
           this.imageUrl = imageUrl;
       }

       public String getName()
       {
           return name;
       }

       public void setName( String name )
       {
           this.name = name;
       }

       public String getDescription()
       {
           return description;
       }

       public void setDescription( String description )
       {
           this.description = description;
       }

       public String getImageUrl()
       {
           return imageUrl;
       }

       public void setImageUrl( String imageUrl )
       {
           this.imageUrl = imageUrl;
       }
   }
   ```

5. Implement a new function inside the `ItemController` to create a new Item using the `@PostMapping` annotation and the `@RequestBody` annotation to receive an `ItemDto` as parameter on the POST request.

6. Call the `itemService.save` to persist the item received in the request.

```java
    @PostMapping
    public Item save( @RequestBody ItemDto itemDto )
    {
        return itemService.save( new Item( itemDto ) );
    }
```

7. Implement a new function inside the `ItemController` to retrive a specifc item using the item Id
   ```java
       @GetMapping("/{id}")
       public Item findItemById( @PathVariable Integer id ){
           return itemService.findById( id );
       }
   ```
8. Implement the remaining CRUD methods using the `@PutMapping` to update an item and `@DeleteMapping` to delete an item.

   ```java
       @PutMapping( "/{id}" )
       public Item update( @RequestBody ItemDto itemDto, @PathVariable Integer id )
       {
           Item item = itemService.findById( id );
           item.setName( itemDto.getName() );
           item.setDescription( itemDto.getDescription() );
           item.setImageUrl( itemDto.getImageUrl() );
           return itemService.save( item );
       }

       @DeleteMapping( "/{id}" )
       public void delete( @PathVariable Integer id )
       {
           itemService.delete( id );
       }
   ```

## Results

Start your server and test your Item's endpoint using any HTTP client like [Postman](https://www.postman.com/) - [Example of how to send requests in postman](https://learning.postman.com/docs/sending-requests/requests/)

## Example

Stuck? Check out the provided example in the [example/](example/) folder
