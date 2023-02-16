package org.example.controller;

import org.example.entity.User;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user/list")
    public List<User> getUserList() {
        return userService.getUserList();
    }

    @GetMapping("/user/detail/{id}")
    public User getUserById(@PathVariable Integer id) {
        return userService.getUserById(id);
    }

    @PostMapping("/user/add")
    public int add(@RequestBody User user) {
        return userService.add(user);
    }

    @PutMapping("/user/update")
    public int update(@RequestBody User user) {
        return userService.update(user);
    }

    @DeleteMapping("/user/{ids}")
    public int delete(@PathVariable List<Integer> ids) {
        return userService.delete(ids);
    }
}
