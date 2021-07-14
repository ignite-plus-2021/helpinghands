package com.targetplatform.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.targetplatform.model.User;

@Controller
@RequestMapping("/registration")
public class UserController {

	@ModelAttribute("user")
	public User userRegistration()
	{
		return new User();
	}

	@GetMapping
	public String showRegistrationForm(Model model)
	{
		return "registration";
	}
	
	@PostMapping
	public String registerUser(@Valid @ModelAttribute("user") User userRegistration 
			, BindingResult bindingResult ) 
	/*BindingResult - interface which dictates how the object that stores the result 
	  of validation should store and retrieve the results of the validation */
	{
		if(bindingResult.hasErrors()) {
			return "registration";
		}
		return "success";
	}

}


