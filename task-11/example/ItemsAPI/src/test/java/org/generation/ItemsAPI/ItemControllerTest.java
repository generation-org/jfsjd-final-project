package org.generation.ItemsAPI;

import org.generation.ItemsAPI.controller.ItemController;
import org.generation.ItemsAPI.controller.dto.ItemDto;
import org.generation.ItemsAPI.repository.entity.Item;
import org.generation.ItemsAPI.service.ItemService;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

@SpringBootTest
@TestInstance( TestInstance.Lifecycle.PER_CLASS )
public class ItemControllerTest
{

    @Mock
    ItemService itemService;

    ItemController itemController;

    @BeforeAll
    public void setup()
    {
        itemController = new ItemController( itemService );
    }

    @Test
    public void saveCallsSaveOnItemService()
    {
        ItemDto itemDtoMock = mock( ItemDto.class );
        itemController.save( itemDtoMock );
        verify( itemService ).save( any(Item.class));
    }

    @Test
    public void getItemsCallsAllOnItemService(){
        itemController.getItems();
        verify( itemService ).all();
    }
}
