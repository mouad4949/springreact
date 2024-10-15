package com.example.springreact.controller;


import com.example.springreact.exception.UserNotFoundException;
import com.example.springreact.model.User;
import com.example.springreact.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@CrossOrigin("http://localhost:3000/")
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @PostMapping("/user")
    User newUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id).orElseThrow(()->new UserNotFoundException(id));

    }
    @PutMapping("user/{id}")
    User UpdateUser(@PathVariable("id") Long id, @RequestBody User newuser) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setName(newuser.getName());
                    user.setEmail(newuser.getEmail());
                    user.setUsername(newuser.getUsername());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping ("/user/{id}")
    String deleteUser(@PathVariable Long id) {
        if(!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id " + id + " was deleted";
    }
}
