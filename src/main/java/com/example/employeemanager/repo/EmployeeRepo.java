package com.example.employeemanager.repo;

import com.example.employeemanager.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

// JpaRepository contains basic methods (getters and setters).
// Check out by ctrl + clicking on JpaRepository
// It needs to know what class it going to use and the datatype of the primary key
public interface EmployeeRepo extends JpaRepository<Employee, Long> {
    // Query method in Spring boot. It knows how to do it
    // There is naming rule the action (select) + class name + the method (where)
    void deleteEmployeeById(Long id);

    // It might not find the passed id in employee, so it's optional (may fail to find it)
    Optional<Employee> findEmployeeById(Long id);
}