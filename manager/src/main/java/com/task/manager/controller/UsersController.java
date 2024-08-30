package com.task.manager.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task.manager.dto.UsersDto;
import com.task.manager.entity.Users;
import com.task.manager.service.UsersService;

import lombok.AllArgsConstructor;

@CrossOrigin
@RestController
@AllArgsConstructor
@RequestMapping("/api/user")
public class UsersController {

    private UsersService usersService;

    @PostMapping("/register")
    public Users register(@RequestBody Users user) {
        return usersService.createNewUser(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody Users user) {

        return (usersService.verify(user));
    }

    @GetMapping
    public ResponseEntity<List<UsersDto>> getAllUsers() {
        List<UsersDto> userList = usersService.getAllUsers();

        return ResponseEntity.ok(userList);
    }

}
