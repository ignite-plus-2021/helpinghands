package com.target.igniteplus.mvcdemo.controller;

import com.target.igniteplus.mvcdemo.model.Login;
import com.target.igniteplus.mvcdemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class LoginController {

    @Autowired
    UserService userService;


    @PostMapping("/login")
    public ResponseEntity validateUser(@RequestBody Login login)
    {
        return this.userService.validateUser(login);
    }
}
