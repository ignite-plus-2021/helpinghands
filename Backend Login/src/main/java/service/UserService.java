package com.target.igniteplus.mvcdemo.service;
import com.target.igniteplus.mvcdemo.model.Login;

import com.target.igniteplus.mvcdemo.model.User;
import com.target.igniteplus.mvcdemo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;


@Service

public class UserService {
    @Autowired
    UserRepository UserRepository;

    public ResponseEntity<Object> validateUser (Login login)
    {
        User user=UserRepository.findByEmailAndPassword(login.getEmail(),login.getPassword());

        if (user == null)
        {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        else
        {
            return ResponseEntity.status(HttpStatus.OK).build();
        }


    }
}
