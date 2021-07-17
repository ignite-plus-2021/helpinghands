package com.target.VolunteeringPlatform.Service;

import com.target.VolunteeringPlatform.DAO.UserRepository;
import com.target.VolunteeringPlatform.RequestResponse.LoginRequest;
import com.target.VolunteeringPlatform.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;

	public void saveUser(User user) {
		user.setActive(1);
		user.setRole("USER");
		userRepository.save(user);
	}

	public User validateUser (LoginRequest login)
	{
		User user = userRepository.findByEmailAndPassword(login.getEmail(),login.getPassword());
		return user;
	}
}
