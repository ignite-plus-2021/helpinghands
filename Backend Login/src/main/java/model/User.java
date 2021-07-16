package com.target.igniteplus.mvcdemo.model;
import javax.persistence.*;

@Entity
@Table(name="user")
public class User {

    private Integer id;

    private String password;
    private String firstname;
    private String lastname;
    private String email;
@Id
@GeneratedValue(strategy= GenerationType.IDENTITY)

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
