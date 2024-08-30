package com.task.manager.dto;

import java.util.List;

import com.task.manager.entity.Employee;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TaskDto {

    private Long id;
    private String title;
    private String description;
    private String priority;
    private String status;
    private String due;
    private List<Employee> employees;
}
