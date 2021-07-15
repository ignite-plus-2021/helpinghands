package com.target.VolunteeringPlatform.Controller;

import com.target.VolunteeringPlatform.DAO.UserRepository;
import com.target.VolunteeringPlatform.Response.MessageResponse;
import com.target.VolunteeringPlatform.Response.SignupRequest;
import com.target.VolunteeringPlatform.Service.UserDetailsServiceImpl;
import com.target.VolunteeringPlatform.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/account")
public class UserController {

    @Autowired
    UserDetailsServiceImpl userService;

    @Autowired
    UserRepository userRepository;

    @CrossOrigin("http://localhost:3000")
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody SignupRequest newUser) {

        if (userRepository.findByEmail(newUser.getEmail()) != null) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        User user = new User(newUser.getEmail(),newUser.getFirstname(),newUser.getLastname(),newUser.getPassword());
        userService.saveUser(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
}