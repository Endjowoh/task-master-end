package com.task.manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.task.manager.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
