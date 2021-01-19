package org.generation.ItemsAPI;

import org.generation.ItemsAPI.repository.ItemsRepository;
import org.generation.ItemsAPI.repository.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ItemsApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ItemsApiApplication.class, args);
	}

}
