package com.task.manager.mapper;

import com.task.manager.dto.TaskDto;
import com.task.manager.entity.Task;

public class TaskMapper {

    public static TaskDto mapToTaskDto(Task task) {
        return new TaskDto(
                task.getId(),
                task.getTitle(),
                task.getDescription(),
                task.getPriority(),
                task.getStatus(),
                task.getDue(),
                task.getEmployees()

        );
    }

    public static Task mapToTask(TaskDto taskDto) {
        return new Task(
                taskDto.getId(),
                taskDto.getTitle(),
                taskDto.getDescription(),
                taskDto.getPriority(),
                taskDto.getStatus(),
                taskDto.getDue(),
                taskDto.getEmployees());
    }
}
