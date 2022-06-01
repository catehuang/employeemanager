package com.example.employeemanager.resource;

import com.example.employeemanager.model.Employee;
import com.example.employeemanager.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class EmployeeResource {
    // @RestController annotation in order to simplify the creation of RESTful web services.
    // @RequestMapping annotation is used to map web requests onto specific handler classes and/or handler methods
    @RestController
    @RequestMapping("/employee")
    public class EmployeeResource {
        private final EmployeeService employeeService;

        public EmployeeResource(EmployeeService employeeService) {
            this.employeeService = employeeService;
        }

        @GetMapping("/all")
        // Generic method
        public ResponseEntity<List<Employee>> getAllEmployees() {
            List<Employee> employees = employeeService.findAllEmployees();
            return new ResponseEntity<>(employees, HttpStatus.OK);
        }

        // the @PathVariable annotation to extract the templated part of the URI,
        @GetMapping("/find/{id}")
        public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") Long id) {
            Employee employee = employeeService.findEmployeeById(id);
            return new ResponseEntity<>(employee, HttpStatus.OK);
        }

        // @RequestBody annotations is used to bind the HTTP request body with a domain object in method parameter or return type.
        @PostMapping("/add")
        public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
            Employee newEmployee = employeeService.addEmployee(employee);
            return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
        }

        @PutMapping("/update")
        public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee) {
            Employee updateEmployee = employeeService.updateEmployee(employee);
            return new ResponseEntity<>(updateEmployee, HttpStatus.OK);
        }

        @DeleteMapping("/delete/{id}")
        public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id) {
            employeeService.deleteEmployee(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
