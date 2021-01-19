package org.generation.ItemsAPI.controller;

import org.generation.ItemsAPI.repository.ItemsRepository;
import org.generation.ItemsAPI.repository.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/item")
public class ItemController{

    final ItemsRepository itemsRepository;


    public ItemController(@Autowired ItemsRepository itemsRepository )
    {
        this.itemsRepository = itemsRepository;
    }

    @GetMapping
    public Iterable<Item> getItems(){
        return itemsRepository.findAll();
    }
}


