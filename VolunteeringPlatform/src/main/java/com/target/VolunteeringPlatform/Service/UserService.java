package com.target.VolunteeringPlatform.Service;

import com.target.VolunteeringPlatform.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

    void saveUser(User user);
    User findUserByEmail(String email);
}
