package com.example.FullStackDeveloper;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import  org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class FullStackDeveloperApplication {

	public static void main(String[] args) {

		SpringApplication.run(FullStackDeveloperApplication.class, args);
	}

	@GetMapping("/hola")
	public String hola(@RequestParam(value = "name", defaultValue = "world") String name) {
		return String.format("Hi %s!" , name);
	}


}
