package com.target.Volunteeringplatform.RequestResponse;

import java.util.Date;

public class ProfileRequest {
	private String about;
	private String gender;
	private Date dob;
	private String mobileNumber;
	private String address;
	private String role;
	private String location;
	
	public ProfileRequest(String about, String gender, Date dob, String mobileNumber, String address, String role) {
		super();
		this.about = about;
		this.gender = gender;
		this.dob = dob;
		this.mobileNumber = mobileNumber;
		this.address = address;
		this.role = role;
	}

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
	
	

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "ProfileRequest [about=" + about + ", gender=" + gender + ", dob=" + dob + ", mobileNumber="
				+ mobileNumber + ", address=" + address + ", role=" + role + "]";
	}
	
	

}
