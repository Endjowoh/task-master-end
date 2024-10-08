package com.task.manager.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task.manager.dto.TaskDto;
import com.task.manager.service.TaskService;

import lombok.AllArgsConstructor;

@CrossOrigin
@RestController
@AllArgsConstructor
@RequestMapping("/api/task")
public class TaskController {

    private TaskService taskService;

    // Build CREATE TASK rest api
    // Use functions called in service layer
    @PostMapping
    public ResponseEntity<TaskDto> createTask(@RequestBody TaskDto taskDto) {
        TaskDto savedTask = taskService.createTask(taskDto);

        return new ResponseEntity<>(savedTask, HttpStatus.CREATED);
    }

    // Build GET TASK rest api
    @GetMapping("{id}")
    public ResponseEntity<TaskDto> getTaskById(@PathVariable("id") Long taskId) {
        TaskDto taskDto = taskService.getTaskById(taskId);

        return ResponseEntity.ok(taskDto);
    }

    // Build GET ALL TASKS rest api
    @GetMapping
    public ResponseEntity<List<TaskDto>> getAllTasks() {
        List<TaskDto> taskList = taskService.getAllTasks();

        return ResponseEntity.ok(taskList);
    }

    // Build UPDATE TASK rest api
    @PutMapping("{id}")
    public ResponseEntity<TaskDto> updateTask(@PathVariable("id") Long taskId,
            @RequestBody TaskDto updatedTask) {
        TaskDto taskDto = taskService.updateTask(taskId, updatedTask);

        return ResponseEntity.ok(taskDto);
    }

    // Build DELETE TASK rest api
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTask(@PathVariable("id") Long taskId) {
        taskService.deleteTask(taskId);

        return ResponseEntity.ok("Task deleted successfully!");

    }
}
