package com.example.employeemanager.service;

import com.example.employeemanager.exception.UserNotFoundException;
import com.example.employeemanager.model.Employee;
import com.example.employeemanager.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

// The @Service annotation declares EmployeeService to be a service class: a class that provides business services.
// The @Transactional annotation makes use of the attributes rollbackFor or rollbackForClassName to rollback the transactions,
// and the attributes noRollbackFor or noRollbackForClassName to avoid rollback on listed exceptions.
@Service
@Transactional
public class EmployeeService {
    private final EmployeeRepo employeeRepo;

    // The @Autowired annotation marks employeeRepo field to be injected with EmployeeRepo
    // and bring its dependencies
    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    public Employee addEmployee(Employee employee) {
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepo.save(employee);
    }

    public List<Employee> findAllEmployees() {
        return employeeRepo.findAll();
    }

    public Employee updateEmployee(Employee employee) {
        return employeeRepo.save(employee);
    }

    public Employee findEmployeeById(Long id) {
        // Because the method is optional, it might not find the employee corresponding to the given id
        return employeeRepo.findEmployeeById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public void deleteEmployee(Long id){
        employeeRepo.deleteEmployeeById(id);
    }
}
