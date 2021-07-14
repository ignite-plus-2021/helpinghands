package com.targetplatform.model;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Email;


public class User {
	
	@NotEmpty(message="first name is mandatory")
	private String firstName;
	
	@NotEmpty
	private String lastName;
	
	@NotEmpty(message="email is mandatory")
	@Email
	private String email;
	
	@NotEmpty(message="new password is mandatory")
	@ValidPassword
	private String password;

	//default constructor
	public User()
	{
		
	}
	
	//constructor with fields
	public User(String firstName,String lastName,String email) {
		super();
		this.firstName=firstName;
		this.lastName=lastName;
		this.email=email;
	}
	
	//Getters and Setters
	public String getFirstname() {
		return firstName;
	}
	public void setFirstname(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastname() {
		return lastName;
	}
	public void setLastname(String lastName) {
		this.lastName = lastName;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	


}
