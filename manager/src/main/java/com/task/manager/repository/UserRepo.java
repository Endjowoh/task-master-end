package com.task.manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.task.manager.entity.Users;

public interface UserRepo extends JpaRepository<Users, Integer> {

    Users findByUsername(String username);
}
