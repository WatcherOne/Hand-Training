package org.example.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {
    private Integer id;

    private String userCode;

    private String userName;

    private Integer age;

    private Integer sex;

    private String sexName;

    private String idCard;

    private String password;
}
