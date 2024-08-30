package com.task.manager.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UsersDto {

    private int id;
    private String username;
    private String password;
    private String email;
    private String role;
}
