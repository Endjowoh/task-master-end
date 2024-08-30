package com.task.manager.mapper;

import com.task.manager.dto.UsersDto;
import com.task.manager.entity.Users;

public class UsersMapper {

    public static UsersDto mapToUsersDto(Users user) {
        return new UsersDto(
                user.getId(),
                user.getUsername(),
                user.getPassword(),
                user.getEmail(),
                user.getRole());
    }

    public static Users mapToUsers(UsersDto usersDto) {
        return new Users(
                usersDto.getId(),
                usersDto.getUsername(),
                usersDto.getPassword(),
                usersDto.getEmail(),
                usersDto.getRole());

    }

}