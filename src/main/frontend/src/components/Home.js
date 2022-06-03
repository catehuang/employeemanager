import axios from './axios';
import Header from './Header';
import Employee from './Employee';
import React, { useState, useEffect } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Link } from 'react-router-dom';

function Home() {
        const [employees, setEmployees] = useState([]);
        const [name, setName] = useState('');
        const [employeeCode, setEmployeeCode] = useState('');
        const [jobTitle, setJobTitle] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [imageUrl, setImageUrl] = useState('');

        useEffect(() => {
                const getAllEmployees = async () => {
                        try {
                                const response = await axios.get('/all');
                                setEmployees(response.data);
                        } catch (err) {
                                console.log(`Error: ${err.message}`);
                        }
                }
                getAllEmployees();
        }, []) // only run this when the component didMount

        const findEmployeeById = (id) => {
                axios.get('http://localhost:8080/employee/find')
                        .then(res => {
                                console.log(res);
                        });
        };


        const updateEmployee = () => {
                axios.update('http://localhost:8080/employee/update')
                        .then(res => {
                                console.log(res);
                        });
        };
        const deleteEmployeeById = (id) => {
                
                axios.delete('http://localhost:8080/employee/delete')
                        .then(res => {
                                console.log(res);
                        });
        };

        return (
                <div class="bg-yellow-50 h-full">
                        <Header />
                        
                        <Link to='/add'>
                                <div class="flex space-x-1 bg-amber-200 w-40 p-3 m-10 rounded-lg border border-gray-400">
                                        <AddBoxIcon />
                                        <p class="text-l">Add Employee</p>
                                </div>
                        </Link>

                        <div class="w-3/5 flex flex-wrap gap-10  mx-auto place-items-center">
                                {employees.map(employee => (
                                <Employee key={employee.id}
                                        name = {employee.name}
                                        email = {employee.email}
                                        phone = {employee.phone}
                                        jobTitle = {employee.jobTitle}
                                        imageUrl = {employee.emailUrl}
                                        employeeCode = {employee.employeeCode}
                                />))}
                        </div>
                        
                </div>
        )
}

export default Home;
