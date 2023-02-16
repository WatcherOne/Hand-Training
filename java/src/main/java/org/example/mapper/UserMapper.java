package org.example.mapper;

import org.apache.ibatis.annotations.Param;
import org.example.entity.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserMapper {
    List<User> getUserList();

    User getUserById(@Param("id") Integer id);

    int add(User user);

    int update(User user);

    int delete(List<Integer> ids);
}
