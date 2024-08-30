package com.task.manager.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task.manager.dto.EmployeeDto;
import com.task.manager.service.EmployeeService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/employee")
public class EmployeeController {

    private EmployeeService employeeService;

    // Build CREATE EMPLOYEE rest api
    // Use functions called in service layer
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);

        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    // Build GET EMPLOYEE rest api
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId) {
        EmployeeDto employeesDto = employeeService.getEmployeesById(employeeId);

        return ResponseEntity.ok(employeesDto);
    }

    // Build GET ALL EMPLOYEES rest api
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
        List<EmployeeDto> employeesList = employeeService.getAllEmployees();

        return ResponseEntity.ok(employeesList);
    }

    // Build UPDATE EMPLOYEE rest api
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId,
            @RequestBody EmployeeDto updatedEmployee) {
        EmployeeDto employeesDto = employeeService.updateEmployee(employeeId, updatedEmployee);

        return ResponseEntity.ok(employeesDto);
    }

    // Build DELETE EMPLOYEE rest api
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId) {
        employeeService.deleteEmployee(employeeId);

        return ResponseEntity.ok("Emmployee deleted successfully!");

    }
}
