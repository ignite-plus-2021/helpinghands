package com.target.Volunteeringplatform.model;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;


import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "profile")
public class Profile {

	@Column(name = "active")
	private int active;

	@Column(name = "mobile number")
	@Size(min=10,max=10)
	private String mobileNumber;
	
	@Column(name = "DOB")
	@Temporal(TemporalType.TIMESTAMP)
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date dob;

	@Column(name = "about")
	private String about;

	@Column(name = "location")
	private String location;

	@Column(name = "gender")
	private String gender;	

	@Column(name = "address")
	private String address;
	
	

	@Column(name="role")
	private String role;

	public Profile() {

	}

	


	public Profile(@Size(min = 10, max = 10) String mobileNumber, Date dob, String about, String location,
			String gender, String address) {
		super();
		this.mobileNumber = mobileNumber;
		this.dob = dob;
		this.about = about;
		this.location = location;
		this.gender = gender;
		this.address = address;
	}




	//getters setters
	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public int getActive() {
		return active;
	}

	public void setActive(int active) {
		this.active = active;
	}
	
	

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}




	@Override
	public String toString() {
		return "Profile [active=" + active + ", about=" + about + ", gender=" + gender + ", dob=" + dob
				+ ", mobileNumber=" + mobileNumber + ", address=" + address + ", role=" + role + "]";
	}




}
