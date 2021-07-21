package com.target.Volunteeringplatform.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.target.Volunteeringplatform.model.Profile;
import com.target.Volunteeringplatform.model.User;

@Repository("userRepository")

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
