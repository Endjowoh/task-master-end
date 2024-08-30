package com.task.manager.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.task.manager.dto.UsersDto;
import com.task.manager.entity.Users;
import com.task.manager.mapper.UsersMapper;
import com.task.manager.repository.UserRepo;

@Service
public class UsersService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private JWTService jwtService;

    public Users createNewUser(Users user) {
        return userRepo.save(user);
    }

    public String verify(Users user) {
        Authentication authentication = authManager
                .authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));

        if (authentication.isAuthenticated()) {

            return (jwtService.generateToken(user.getUsername()));

        } else {
            return "Fail";
        }
    }

    public List<UsersDto> getAllUsers() {

        List<Users> users = userRepo.findAll();

        return users.stream().map((us) -> UsersMapper.mapToUsersDto(us)).collect(Collectors.toList());

    }

}
