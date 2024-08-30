package com.task.manager.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.task.manager.dto.TaskDto;
import com.task.manager.entity.Task;
import com.task.manager.mapper.TaskMapper;
import com.task.manager.repository.TaskRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public TaskDto createTask(TaskDto taskDto) {

        Task task = TaskMapper.mapToTask(taskDto);
        Task savedTask = taskRepository.save(task);

        return TaskMapper.mapToTaskDto(savedTask);
    }

    public TaskDto getTaskById(Long taskId) {

        Task task = taskRepository.findById(taskId).orElseThrow(
                () -> new RuntimeException("Employee does not exist"));

        return TaskMapper.mapToTaskDto(task);
    }

    public List<TaskDto> getAllTasks() {

        List<Task> tasks = taskRepository.findAll();

        return tasks.stream().map((task) -> TaskMapper.mapToTaskDto(task)).collect(Collectors.toList());

    }

    public TaskDto updateTask(Long taskId, TaskDto updatedTask) {

        Task task = taskRepository.findById(taskId).orElseThrow(
                () -> new RuntimeException("Task not found"));

        task.setTitle(updatedTask.getTitle());
        task.setDescription(updatedTask.getDescription());
        task.setStatus(updatedTask.getStatus());
        task.setPriority(updatedTask.getPriority());
        task.setDue(updatedTask.getDue());

        Task task2 = taskRepository.save(task);
        return TaskMapper.mapToTaskDto(task2);
    }

    public void deleteTask(Long taskId) {
        Task task = taskRepository.findById(taskId).orElseThrow(
                () -> new RuntimeException("Employee not found"));

        taskRepository.deleteById(task.getId());
    }

}
