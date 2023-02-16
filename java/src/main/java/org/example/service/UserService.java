package org.example.service;

import org.example.entity.User;

import java.util.List;

public interface UserService {
    List<User> getUserList();

    User getUserById(Integer id);

    int add(User user);

    int update(User user);

    int delete(List<Integer> ids);
}
