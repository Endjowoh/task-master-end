package com.task.manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.task.manager.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
