package com.flyaway.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.flyaway.exceptions.NoSuchUrlException;

@Controller
@RequestMapping(path="/user")
public class MainController {
	@GetMapping(path = "/")
	public String getHome() {
		return "views/home";
	}
	
	@PostMapping(path="/available-flights") 
	public String getAvailableFlightsList() throws NoSuchUrlException {
		return "views/available-flights";
	}
	
	
	
}
