package com.task.manager.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.task.manager.dto.EmployeeDto;
import com.task.manager.entity.Employee;
import com.task.manager.mapper.EmployeeMapper;
import com.task.manager.repository.EmployeeRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeService {

    private EmployeeRepository employeeRepository;

    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    public EmployeeDto getEmployeesById(Long employeeId) {

        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new RuntimeException("Employee does not exist"));

        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee))
                .collect(Collectors.toList());
    }

    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {

        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new RuntimeException("Employee not found"));

        employee.setFirstName(updatedEmployee.getFirstName());

        Employee updatedEmployeeObj = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new RuntimeException("Employee not found"));

        employeeRepository.deleteById(employee.getId());
    }

}
